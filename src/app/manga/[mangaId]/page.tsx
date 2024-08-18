import React, { Suspense } from "react";
import FullPageLoadingSpinner from "@/components/FullPageLoadingSpinner";
import { MangaDetail } from "@/components/MangaDetail";

export default async function MangaDetailPage({
  params,
}: {
  params: { mangaId: string };
}) {
  return (
    <>
      <Suspense fallback={<FullPageLoadingSpinner />}>
        <MangaDetail mangaId={params.mangaId} />
      </Suspense>
    </>
  );
}
