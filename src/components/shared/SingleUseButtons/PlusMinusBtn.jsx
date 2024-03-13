import React from "react";

const PlusMinusBtn = () => {
  return (
    <div className="flex gap-3 items-center bg-[#F0F0F4] px-3 cursor-pointer py-1 text-sm rounded-md">
      <p className="font-poppins font-medium active:scale-90 duration-300">+</p>
      <p>2</p>
      <p className="font-poppins font-medium active:scale-90 duration-300">-</p>
    </div>
  );
};

export default PlusMinusBtn;
