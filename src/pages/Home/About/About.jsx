import React from "react";
const About = () => {
  return (
    <div className="min-h-[500px] h-[80vh] w-full bg-about bg-fixed flex  justify-center items-center">
      <div className="flex flex-col  items-center justify-center text-white w-[70%] gap-4">
        <h3 className="text-sm text-center md:text-medium font-clashSemibold">
          Your Journey in Style Begins Here
        </h3>
        <h1 className="text-2xl text-center md:text-3xl lg:text-5xl font-clashBold">
          Discover the World
          <br />
          of Exceptional fesion
        </h1>
        <p className="text-[10px] md:text-sm text-center w-full md:w-[80%] text-gray-200">
        Discover the epitome of style at our fashion website, where trends meet timeless elegance. Immerse yourself in a curated collection of contemporary and classic pieces, carefully selected to elevate your wardrobe. From chic apparel to accessories that make a statement, we bring you a seamless blend of quality, comfort, and runway-inspired designs. Unleash your individuality and embrace the latest fashion with our handpicked selection, ensuring you step out in confidence and style. Elevate your fashion journey with us – where every click is a step towards curated elegance.
        </p>
      </div>
    </div>
  );
};

export default About;
