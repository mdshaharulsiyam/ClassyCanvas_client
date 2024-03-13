import React from "react";
import Container from "../../../components/shared/Containers/Container";
import { Rating } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCube,
  Autoplay,
} from "swiper/modules";

const Testimonial = () => {
  const testimonialData = [
    {
      rating: 4.5,
      review:
        "Our experience with this ClassyCanvas website has been amazing! The quality of the shoes is top-notch and the customer service is exceptional. Highly recommended!",
      authorName: "John Doe",
      authorPosition: "Marketing Manager",
      authorCompany: "ABC Inc",
      brand: "NIKE",
      imageUrl:
        "https://i.ibb.co/vds2C0J/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg",
    },
    {
      rating: 3.8,
      review:
        "Great selection of shoes and prompt delivery. However, I would appreciate more variety in the color options. Overall, satisfied with the purchase.",
      authorName: "Jane Smith",
      authorPosition: "Fashion Blogger",
      authorCompany: "Style Hub",
      brand: "Adidas",
      imageUrl:
        "https://i.ibb.co/Fbpc7NP/young-bearded-man-with-striped-shirt-273609-5677.jpg",
    },
    {
      rating: 5.0,
      review:
        "The ClassyCanvas products quality exceeded my expectations. The website offers a seamless shopping experience, and the customer support is fantastic. Will definitely shop here again!",
      authorName: "Alex Rodriguez",
      authorPosition: "Fitness Enthusiast",
      authorCompany: "FitLife",
      brand: "Puma",
      imageUrl:
        "https://i.ibb.co/p3gCWkm/confident-caucasian-young-man-casual-600nw-2141122925.webp",
    },
  ];
  return (
    <div className="pb-0 bg-gray-200">
      <p className="pt-16 text-xl text-center font-clashBold md:text-2xl lg:text-3xl">
        Word's Of Satisfaction
      </p>
      <Swiper
        // pagination={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
        className="mySwiper"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        speed={2000}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.imageUrl}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
