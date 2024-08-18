import React from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const FullPageLoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingSpinner classes="text-white text-lg" size={"48"} />
    </div>
  );
};

export default FullPageLoadingSpinner;
