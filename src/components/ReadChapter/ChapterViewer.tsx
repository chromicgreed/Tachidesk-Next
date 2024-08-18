"use client";

import Image from "next/image";
import { startTransition, useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import { updateChapterReadProgress } from "@/app/actions/updateChapterReadProgress";

export function ChapterViewer({
  imageUrls,
  lastPageRead,
  chapterId,
  mangaId,
}: {
  imageUrls: string[];
  lastPageRead: number;
  chapterId: number;
  mangaId: number;
}) {
  const lastPageRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(lastPageRead);

  useEffect(() => {
    if (lastPageRef.current) {
      setTimeout(() => {
        lastPageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const pages = document.querySelectorAll(".page-container");
      const windowHeight = window.innerHeight;
      let maxVisiblePage = 0;

      pages.forEach((page, index) => {
        const rect = page.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const pageVisiblePercentage = visibleHeight / rect.height;

        if (pageVisiblePercentage > 0.5) {
          maxVisiblePage = index + 1;
        }
      });

      if (maxVisiblePage !== 0 && maxVisiblePage !== currentPage) {
        setCurrentPage(maxVisiblePage);
        startTransition(async () => {
          await updateChapterReadProgress(
            maxVisiblePage === imageUrls.length,
            maxVisiblePage,
            chapterId,
            mangaId,
          );
        });
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 2000);
    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [currentPage, imageUrls.length, chapterId, mangaId]);

  return (
    <>
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="flex justify-center page-container"
          ref={index === lastPageRead - 1 ? lastPageRef : null}
        >
          <Image
            src={url}
            alt={`Page ${index + 1}`}
            className="mb-2 h-auto"
            width={1200}
            height={1200}
            priority={index === lastPageRead - 1}
          />
        </div>
      ))}
    </>
  );
}
