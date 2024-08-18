"use server";

import { graphql } from "@/gql";
import { graphQLClient } from "@/lib/config";
import { Query } from "@/gql/graphql";
import { revalidatePath } from "next/cache";

const updateLastReadPageMutation = graphql(`
  mutation UPDATE_CHAPTERS($input: UpdateChaptersInput!) {
    updateChapters(input: $input) {
      chapters {
        id
      }
    }
  }
`);

export async function updateChapterReadProgress(
  isRead: boolean,
  lastPageRead: number,
  chapterId: number,
  mangaId: number,
): Promise<void> {
  await graphQLClient.request<Query>(updateLastReadPageMutation, {
    input: {
      ids: [chapterId],
      patch: { lastPageRead: lastPageRead, isRead },
    },
  });
  revalidatePath(`/manga/${mangaId}`);
  revalidatePath(`/manga/${mangaId}/chapter/${chapterId}`);
}
