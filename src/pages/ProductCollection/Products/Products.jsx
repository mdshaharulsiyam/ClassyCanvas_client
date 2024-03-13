import React, { useEffect, useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../../../components/shared/Pagination";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import Search from "../../../components/shared/Search";
import ProductCollectionSkeleton from "../../../components/skeletons/ProductCollectionSkeleton";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";

const Products = ({
  products,
  page,
  setPage,
  size,
  setSize,
  pageCount,
  setPageCount,
  handleSearch,
  productLoad,
}) => {
  // const { data } = useGetSecure(["ProductCount"], "/product-count");
  const [data, setData] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get("/product-count").then((res) => setData(res.data));
  }, []);

  // const { data: products } = useGetSecure(
  //   ["Products", page, size],
  //   `/products?page=${page}&size=${size}`
  // );

  // console.log(products);

  useEffect(() => {
    console.log(data?.productCount);
    setPageCount(Math.ceil(data?.productCount / size));
  }, [data]);

  return (
    <div className="lg:ml-5 font-medium min-h-[500px] mt-16 lg:mt-0 w-[90%] mx-auto lg:w-full ">
      <div className="flex w-full justify-end px-4 py-2 border rounded-md shadow-sm cursor-pointer  text-[12px] md:text-base text-gray-600">
        {/* <div className="flex items-center">
          <p className="mr-2">Sort By: </p>
          <p className="flex items-center gap-2 ">
            <span className="ml-2 font-medium">
              <span className="text-[8px] md:text-[10px] ">Price</span>Low
            </span>
            <FaArrowRightArrowLeft />
            <span className="font-medium">High</span>
          </p>
        </div> */}
        <Search
          onChange={handleSearch}
          className="flex w-full"
          iconClass={`text-xl right-[3%] top-[25%] `}
          inputClass="py-2 pl-2"
        />
      </div>

      {productLoad ? (
        <ProductCollectionSkeleton />
      ) : (
        <div className="min-h-[500px] grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4 gap-x-2 gap-y-8">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      <Pagination
        setPage={setPage}
        pageCount={pageCount}
        page={page}
        setSize={setSize}
        size={size}
      />
    </div>
  );
};

export default Products;
