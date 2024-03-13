import React, { useEffect, useState } from "react";
import ProductCarouselCard from "../../cards/ProductCarouselCard";
import Container from "../Containers/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import SectionProductSkeleton from "../../skeletons/SectionProductSkeleton";
// import "./style.css";

const ProductCarousel = () => {
  const { data: products, isLoading } = useGetSecure(["new-arrivals"], "/new-arrivals?size=10");
  return (
    <Container className="mb-28">
      {isLoading ? (
        <SectionProductSkeleton />
      ) : (
        <Swiper
          // slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
          style={{
            height: "400px",
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },

            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
        >
          {/* <SwiperSlide className="h-[100px]">Slide 1</SwiperSlide> */}

          {products?.map((product) => (
            <SwiperSlide key={product?._id} className="h-[100px]">
              <ProductCarouselCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
};

export default ProductCarousel;
