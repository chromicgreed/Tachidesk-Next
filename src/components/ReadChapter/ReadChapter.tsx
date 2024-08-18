import { Query } from "@/gql/graphql";
import { API_URL, graphQLClient } from "@/lib/config";
import { graphql } from "@/gql";
import { ChapterViewer } from "@/components/ReadChapter/ChapterViewer";

const mangaChapterQuery = graphql(`
  query getChapter($chapterId: Int!) {
    chapter(id: $chapterId) {
      pageCount
      lastPageRead
    }
  }
`);

export async function ReadChapter({
  mangaId,
  chapterId,
}: {
  mangaId: string;
  chapterId: string;
}) {
  const data: Query = await graphQLClient.request<Query>(mangaChapterQuery, {
    chapterId: chapterId,
  });

  const { chapter } = data;
  const { pageCount, lastPageRead } = chapter;

  const imageUrls = Array.from({ length: pageCount }, (_, index) => {
    return `${API_URL}/api/v1/manga/${mangaId}/chapter/1/page/${index}`;
  });

  return (
    <ChapterViewer
      imageUrls={imageUrls}
      lastPageRead={lastPageRead}
      chapterId={parseInt(chapterId)}
      mangaId={parseInt(mangaId)}
    />
  );
}
