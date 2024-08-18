import React from "react";
import { API_URL, graphQLClient } from "@/lib/config";
import { ChapterType, Query } from "@/gql/graphql";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
import { graphql } from "@/gql";
import { Button } from "@/components/ui/Button";
import { BookOpenTextIcon } from "lucide-react";
import Genre from "@/components/MangaDetail/Genre";
import Details from "@/components/MangaDetail/Details";
import Description from "@/components/MangaDetail/Description";
import Link from "next/link";
import Chapter from "@/components/MangaDetail/Chapter";

const mangaDetailQuery = graphql(`
  query GetMangaDetail($mangaId: Int!) {
    manga(id: $mangaId) {
      chapters {
        nodes {
          chapterNumber
          id
          isDownloaded
          isRead
          lastPageRead
          lastReadAt
          mangaId
          name
          pageCount
        }
        totalCount
      }
      author
      artist
      description
      id
      source {
        displayName
      }
      status
      thumbnailUrl
      title
      genre
    }
  }
`);

export async function MangaDetail({ mangaId }: { mangaId: string }) {
  const data: Query = await graphQLClient.request<Query>(mangaDetailQuery, {
    mangaId,
  });

  const { manga } = data;

  const { chapters } = manga;

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden border-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardContent className="p-6">
            <Image
              src={`${API_URL}${manga.thumbnailUrl}`}
              alt={manga.title}
              width={500}
              height={700}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </CardContent>
          <CardContent className="md:col-span-2 p-6">
            <h1 className="text-3xl font-bold mb-4">{manga.title}</h1>
            <Genre genres={manga.genre} />
            <div className="space-y-6">
              <Details manga={manga} />
              <Description manga={manga} />
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href={`/manga/${manga.id}/chapter/${manga.lastReadChapter ? manga.lastReadChapter : (manga.chapters.nodes.at(0) as ChapterType).id}`}
                passHref
              >
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 group">
                  <span className="flex items-center gap-x-2">
                    <BookOpenTextIcon /> Read Now
                  </span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Chapters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chapters.nodes.map((chapter: ChapterType) => (
            <Chapter
              key={chapter.id}
              chapter={chapter}
              chapterBaseUrl={`/manga/${manga.id}/chapter`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MangaDetail;
