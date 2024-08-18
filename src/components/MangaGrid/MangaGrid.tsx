import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { API_URL, graphQLClient } from "@/lib/config";
import { MangaType, Query } from "@/gql/graphql";
import { graphql } from "@/gql";

const allCategoriesQueryDocument = graphql(`
  query AllMangasInLibrary {
    mangas(filter: { inLibrary: { equalTo: true } }) {
      nodes {
        id
        title
        thumbnailUrl
      }
    }
  }
`);

export async function MangaGrid() {
  const res: Query = await graphQLClient.request<Query>(
    allCategoriesQueryDocument,
  );

  const { nodes }: { nodes: MangaType[] } = res.mangas;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-4">
      {nodes?.map((manga: MangaType) => (
        <Link key={manga.id} href={`/manga/${manga.id}`}>
          <Card className="relative overflow-hidden">
            <CardContent className="p-0 h-full">
              <div className="aspect-[2/3] relative h-full">
                <Image
                  className="w-full h-full object-cover absolute inset-0"
                  src={`${API_URL}${manga.thumbnailUrl}`}
                  alt={manga.title}
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/100 rounded-lg"></div>
              </div>
            </CardContent>
            <CardFooter className="absolute bottom-0 left-0 right-0 p-2 rounded-b-xl">
              <p className="text-md text-white font-semibold truncate">
                {manga.title}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
