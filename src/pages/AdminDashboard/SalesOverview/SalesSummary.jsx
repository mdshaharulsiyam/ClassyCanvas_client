import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { LiaOpencart } from "react-icons/lia";
import { VscGraphLine } from "react-icons/vsc";
import { BsFillCartCheckFill } from "react-icons/bs";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";

const SalesSummary = () => {
  const { data } = useGetSecure(null, "/sales-summary");
// console.log(data)
  const summary = [
    {
      title: "Total Sales",
      amount:data? (data?.totalSales? data?.totalSales?.toFixed(2):'0.00') : "Loading..",
      icon: <VscGraphLine className={`text-4xl `} />,
    },
    {
      title: "Total Orders",
      amount:data? (data?.totalOrders? data?.totalOrders?.toFixed(2):'0.00') : "Loading..",
      icon: <LiaOpencart className={`text-4xl `} />,
    },
    {
      title: "Avg Order Amount",
      amount:data? (data?.avgOrderAmount? data?.avgOrderAmount?.toFixed(2):'0.00') : "Loading..",
      icon: <BsFillCartCheckFill className={`text-4xl `} />,
    },
  ];

  return (
    <div className="mt-5 font-bold bg-white min-h-[100px]  px-[5%] gap-3 ">
      <p className=" font-clashBold text-lg pt-4 flex gap-2  h-max pb-4">
        Sales Summary <FaMoneyBillTrendUp className="text-lg" />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
        {summary.map(({ title, amount, icon }, idx) => (
          <div
            key={title}
            className={`min-h-[100px] p-3 ${
              idx % 2 !== 0 ? "bg-[#F1F3F4] text-black" : "bg-black text-white "
            }`}
          >
            {icon}
            <p className="pt-2">{title}</p>
            <p className="pt-4 text-5xl font-clashBold">{amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesSummary;
