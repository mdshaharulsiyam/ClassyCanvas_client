import React from "react";
import Search from "../../../components/shared/Search";
import Input from "../../../components/html/Input";
import { GoSearch } from "react-icons/go";

const OrderCount = ({ count }) => {
  return (
    <div className="mt-5 text-xl md:text-2xl font-bold bg-white min-h-[100px]  px-[5%]  gap-3 ">
      <div className="pt-10  grid grid-cols-1 md:grid-cols-5 items-center  pb-5 gap-4">
        <p className="md:col-span-2">
          Total Orders: <span className="font-clashSemibold">{count}</span>
        </p>
        <div className="md:col-span-3 relative">
          <input
            placeholder="Search"
            className="text-black text-sm  bg-[#F1F3F4] pl-3 py-3 w-full focus:outline-none"
          />
          <GoSearch className="absolute right-[5%] top-[30%] text-lg" />
        </div>
      </div>
    </div>
  );
};

export default OrderCount;
