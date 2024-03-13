import React from "react";

const ProductCollectionCarousalCard = ({ brand }) => {
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto flex flex-wrap items-center flex-col cursor-pointer justify-center sm:justify-evenly h-[100px] sm:h-[150px] gap-2 sm:gap-0 shadow-2xl">
      <img src={brand?.logo} alt="" className="h-[30%] lg:h-[40%]" />
      <h3 className="text-2xl font-bold"> {brand?.name}</h3>
    </div>
    // <div
    //   style={{
    //     backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.84), rgba(16, 7, 7, 0.35)), url(${brand?.logo})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     width: "100%",
    //   }}
    //   className="h-full relative"
    // >
    //   <div className="absolute bottom-[8%] left-[38%] text-white font-clashBold text-2xl">
    //     {brand?.name}
    //   </div>
    // </div>
  );
};

export default ProductCollectionCarousalCard;
