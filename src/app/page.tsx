import { Suspense } from "react";
import { MangaGrid } from "@/components/MangaGrid";
import FullPageLoadingSpinner from "@/components/FullPageLoadingSpinner";

export default function Home() {
  return (
    <>
      <Suspense fallback={<FullPageLoadingSpinner />}>
        <MangaGrid />
      </Suspense>
    </>
  );
}
