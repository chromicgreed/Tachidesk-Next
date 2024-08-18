import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";
import { ChapterType } from "@/gql/graphql";
import Link from "next/link";

interface ChapterProps {
  chapter: ChapterType;
  chapterBaseUrl: string;
}
const Chapter: React.FC<ChapterProps> = ({ chapter, chapterBaseUrl }) => {
  return (
    <Link href={`${chapterBaseUrl}/${chapter.id}`}>
      <Card
        key={chapter.id}
        className="p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">
            Chapter {chapter.chapterNumber}
          </h3>
          {chapter.isRead ? (
            <Badge className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
              <Check className="w-3 h-3 mr-1 inline" />
              Read
            </Badge>
          ) : (
            <Badge className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
              Unread
            </Badge>
          )}
        </div>
        <p className="text-sm text-gray-600 truncate">
          {chapter.name || "No title"}
        </p>
        <div className="mt-2 text-xs text-gray-400 flex justify-between items-center">
          <span>{chapter.pageCount} pages</span>
          {chapter.lastReadAt && (
            <span>
              Last read:{" "}
              {chapter.lastReadAt !== "0"
                ? new Date(chapter.lastReadAt * 1000).toLocaleString()
                : "-"}
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default Chapter;
