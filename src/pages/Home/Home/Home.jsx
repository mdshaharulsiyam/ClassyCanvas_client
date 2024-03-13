import React from "react";
import Banner from "../Banner/Banner";
import SectionHeader from "../../../components/shared/Headers/SectionHeader";
import ProductCarousel from "../../../components/shared/ProductCarousel/ProductCarousel";
import BrandsSection from "../BrandsSection/BrandsSection";
import About from "../About/About";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";
import ProductCollectionCarousal from "../../ProductCollection/ProductCollectionCarousal/ProductCollectionCarousal";
import useAuth from "../../../hooks/auth/useAuth";
import ProductCollectionSkeleton from "../../../components/skeletons/ProductCollectionSkeleton";

const Home = () => {
  // console.log(user);
  return (
    <div>
      <Banner />
      {/* <BrandsSection /> */}
      <SectionHeader title="Discover Brands" />
      <ProductCollectionCarousal />
      <SectionHeader title="New Arrivals" />
      <ProductCarousel />
      <About />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
