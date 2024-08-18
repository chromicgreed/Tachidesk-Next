import React from "react";
import { MangaType } from "@/gql/graphql";

interface DetailsProps {
  manga: MangaType;
}
const Details: React.FC<DetailsProps> = ({ manga }) => {
  return (
    <>
      <h2 className="text-2xl font-bold border-b pb-2">About</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Author</span>
          <span className="font-semibold">{manga.author ?? "-"}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Artist</span>
          <span className="font-semibold">{manga.artist ?? "-"}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Status</span>
          <span className="font-semibold">{manga.status}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">Source</span>
          <span className="font-semibold">{manga.source?.displayName}</span>
        </div>
      </div>
    </>
  );
};

export default Details;
