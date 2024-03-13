import React, { useState } from "react";

const Pagination = ({ setPage, setSize, page, pageCount, size }) => {
  // console.log(pageCount);
  return (
    <div className="mb-40 w-full  flex justify-center items-center  mt-4 flex-wrap">
      {pageCount &&
        [...Array(pageCount).keys()].map((value) => (
          <div
            key={value}
            onClick={() => setPage(value)}
            className={`w-[45px]  flex-wrap h-[35px]  shadow-inner border border-[#e2e2e2] flex justify-center items-center cursor-pointer ${
              page === value ? "bg-black border-[#EBEEEF] text-white" : ""
            }`}
          >
            {value + 1}
          </div>
        ))}
      <select
        onChange={(e) => setSize(parseInt(e.target.value))}
        className="border bg-black text-white px-4 py-1 focus:border-primary ml-4"
        value={size}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default Pagination;
