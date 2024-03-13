import React from "react";

const SidebarLinkSkeleton = () => {
  return (
    <ul className="flex flex-col gap-4 mt-10 ">
      {[1, 2, 3].map((value) => (
        <li
          key={value}
          className={`text-sm sm:text-base flex items-center gap-4  hover:bg-white hover:text-black duration-[.3s] py-2 pl-1 cursor-pointer h-[30px] w-[85%] bg-gray-300 animate-pulse `}
        ></li>
      ))}
    </ul>
  );
};

export default SidebarLinkSkeleton;
