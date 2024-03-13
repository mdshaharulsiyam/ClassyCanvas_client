import React from "react";
import Container from "../shared/Containers/Container";
import { Button } from "@mui/material";

const SectionProductSkeleton = () => {
  return (
    <div className="overflow-x-auto min-w-[1000px] mx-auto max-h-[400px] flex gap-4">
      {[1, 2, 3, 4].map((value) => (
        <div
          key={value}
          className="h-[300px] bg-gray-200 animate-pulse w-[30%]"
        ></div>
      ))}
    </div>
  );
};

export default SectionProductSkeleton;
