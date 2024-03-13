import React from "react";

const BrandsSkeleton = () => {
  return (
    <ul className="flex w-full max-w-full gap-4 mt-5 overflow-x-scroll no-scrollbar min-h-[50px]">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
        <li
          key={value}
          className={` py-3 w-[25%] md:w-[20%] lg:w-[13%]  flex-shrink-0 text-center  border border-gray-300  cursor-pointer duration-[.4s] text-sm flex  justify-center h-[40px] bg-gray-200 animate-pulse"
        }`}
        >
          {/* <div>
          <img src={logo} alt="" className="w-[20px] " />
        </div> */}
        </li>
      ))}
    </ul>
  );
};

export default BrandsSkeleton;
