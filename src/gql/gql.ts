/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation UPDATE_CHAPTERS($input: UpdateChaptersInput!) {\n    updateChapters(input: $input) {\n      chapters {\n        id\n      }\n    }\n  }\n": types.Update_ChaptersDocument,
    "\n  query GetMangaDetail($mangaId: Int!) {\n    manga(id: $mangaId) {\n      chapters {\n        nodes {\n          chapterNumber\n          id\n          isDownloaded\n          isRead\n          lastPageRead\n          lastReadAt\n          mangaId\n          name\n          pageCount\n        }\n        totalCount\n      }\n      author\n      artist\n      description\n      id\n      source {\n        displayName\n      }\n      status\n      thumbnailUrl\n      title\n      genre\n    }\n  }\n": types.GetMangaDetailDocument,
    "\n  query AllMangasInLibrary {\n    mangas(filter: { inLibrary: { equalTo: true } }) {\n      nodes {\n        id\n        title\n        thumbnailUrl\n      }\n    }\n  }\n": types.AllMangasInLibraryDocument,
    "\n  query getChapter($chapterId: Int!) {\n    chapter(id: $chapterId) {\n      pageCount\n      lastPageRead\n    }\n  }\n": types.GetChapterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UPDATE_CHAPTERS($input: UpdateChaptersInput!) {\n    updateChapters(input: $input) {\n      chapters {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UPDATE_CHAPTERS($input: UpdateChaptersInput!) {\n    updateChapters(input: $input) {\n      chapters {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetMangaDetail($mangaId: Int!) {\n    manga(id: $mangaId) {\n      chapters {\n        nodes {\n          chapterNumber\n          id\n          isDownloaded\n          isRead\n          lastPageRead\n          lastReadAt\n          mangaId\n          name\n          pageCount\n        }\n        totalCount\n      }\n      author\n      artist\n      description\n      id\n      source {\n        displayName\n      }\n      status\n      thumbnailUrl\n      title\n      genre\n    }\n  }\n"): (typeof documents)["\n  query GetMangaDetail($mangaId: Int!) {\n    manga(id: $mangaId) {\n      chapters {\n        nodes {\n          chapterNumber\n          id\n          isDownloaded\n          isRead\n          lastPageRead\n          lastReadAt\n          mangaId\n          name\n          pageCount\n        }\n        totalCount\n      }\n      author\n      artist\n      description\n      id\n      source {\n        displayName\n      }\n      status\n      thumbnailUrl\n      title\n      genre\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllMangasInLibrary {\n    mangas(filter: { inLibrary: { equalTo: true } }) {\n      nodes {\n        id\n        title\n        thumbnailUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllMangasInLibrary {\n    mangas(filter: { inLibrary: { equalTo: true } }) {\n      nodes {\n        id\n        title\n        thumbnailUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getChapter($chapterId: Int!) {\n    chapter(id: $chapterId) {\n      pageCount\n      lastPageRead\n    }\n  }\n"): (typeof documents)["\n  query getChapter($chapterId: Int!) {\n    chapter(id: $chapterId) {\n      pageCount\n      lastPageRead\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;