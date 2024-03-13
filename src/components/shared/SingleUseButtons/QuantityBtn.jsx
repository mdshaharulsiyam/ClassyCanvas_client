import React, { useState } from "react";

const QuantityBtn = ({ productQuantity, handleQuantity }) => {
  return (
    <div className="flex items-center gap-4 mt-3">
      <p
        onClick={() => handleQuantity("-")}
        className="w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
      >
        -
      </p>
      <p className="px-5 py-1 font-semibold border ">{productQuantity}</p>
      <p
        onClick={() => handleQuantity("+")}
        className=" w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
      >
        +
      </p>
    </div>
  );
};

export default QuantityBtn;
