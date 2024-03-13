import React from "react";
import Container from "../../../components/shared/Containers/Container";

const BrandsSection = () => {
  const logos = [
    {
      id: 1,
      image:
        "https://i.ibb.co/PWsdp31/dc03893a0baf50b2efbdede6350e4d67-removebg-preview.png",
    },
    {
      id: 2,
      image: "https://i.ibb.co/PmnkYfM/nike-removebg-preview.png",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/87GRGP2/puma-icon-logo-art-design-260nw-2276794081-removebg-preview.png",
    },
    {
      id: 4,
      image:
        "https://i.ibb.co/JHDCVRv/Adidas-Logo-1991-present-removebg-preview.png",
    },
    {
      id: 5,
      image:
        "https://i.ibb.co/0j7TpTP/2560px-Reebok-2019-logo-svg-removebg-preview.png",
    },
  ];

  return (
    <div className="w-[90%] lg:w-[70%] mx-auto flex flex-wrap items-center  justify-center sm:justify-evenly h-[100px] sm:h-[150px] gap-2 sm:gap-0">
      {logos.map(({ id, image }) => (
        <img key={id} src={image} alt="" className="h-[30%] lg:h-[40%]" />
      ))}
    </div>
  );
};

export default BrandsSection;
