import React, { useEffect, useState } from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="h-[350px] shadow-sm">
      <div className="h-[70%] bg-gray-300  animate-pulse relative cursor-pointer "></div>
      <div className="px-2 flex flex-col gap-1 mt-3 text-sm font-medium">
        <h1 className="font-semibold bg-gray-300 animate-pulse w-[20%] h-[20px]"></h1>
        <div className="flex items-center justify-between w-[95%]">
          <p className="bg-gray-300 w-[20%] h-[15px  animate-pulse"></p>
          <p className="w-[15px] h-[15px] rounded-full animate-pulse bg-gray-300"></p>
        </div>
        <div className="flex justify-between w-[96%] cursor-pointer">
          <p className="text-[12px] flex items-center gap-2  text-white px-2 mt-2 bg-gray-300 w-[20%] h-[15px]"></p>
          <p className="text-2xl text-gray-400 cursor-pointer    duration-300 hover:rotate-90">
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
