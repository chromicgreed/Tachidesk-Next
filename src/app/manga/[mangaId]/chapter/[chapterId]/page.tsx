import React, { Suspense } from "react";
import FullPageLoadingSpinner from "@/components/FullPageLoadingSpinner";
import { ReadChapter } from "@/components/ReadChapter";

export default async function Chapter({
  params,
}: {
  params: { mangaId: string; chapterId: string };
}) {
  return (
    <>
      <Suspense fallback={<FullPageLoadingSpinner />}>
        <ReadChapter mangaId={params.mangaId} chapterId={params.chapterId} />
      </Suspense>
    </>
  );
}
