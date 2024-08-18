import React from "react";
import { Badge } from "@/components/ui/Badge";

interface GenreProps {
  genres: string[];
}

const Genre: React.FC<GenreProps> = ({ genres }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {genres.map((genreItem, idx) => (
        <Badge key={idx} variant="secondary" className="cursor-pointer">
          {genreItem}
        </Badge>
      ))}
    </div>
  );
};

export default Genre;
