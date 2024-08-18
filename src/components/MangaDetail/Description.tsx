import React from "react";
import { MangaType } from "@/gql/graphql";

interface DescriptionProps {
  manga: MangaType;
}
const Description: React.FC<DescriptionProps> = ({ manga }) => {
  return (
    <div className="mt-6">
      {" "}
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">Description</h3>
      <div className="space-y-3">
        {manga.description?.split("\n").map((line, index) => {
          const [key, value] = line.split(":").map((item) => item.trim());
          if (key && value) {
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center"
              >
                <span className="font-medium text-gray-400 sm:min-w-[140px] mb-1 sm:mb-0">
                  {key}:
                </span>
                <span className="text-gray-600">{value}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Description;
