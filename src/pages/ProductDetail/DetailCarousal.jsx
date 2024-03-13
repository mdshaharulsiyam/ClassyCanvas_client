import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DetailCarousal = ({ images }) => {
  return (
    <Carousel
      className="flex flex-col justify-center items-center md:justify-normal md:items-start"
      autoPlay={true}
      showIndicators={false}
      stopOnHover={true}
      swipeable={true}
      width={"90%"}
      infiniteLoop={true}
    >
      {images?.map((image) => (
        <div key={image} className="text-center">
          <img src={image} alt="" className="object-cover" />
        </div>
      ))}
    </Carousel>
  );
};

export default DetailCarousal;
