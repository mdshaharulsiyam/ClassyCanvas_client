import React, { useEffect, useState } from "react";
import Container from "../../components/shared/Containers/Container";
import ProductCollectionCarousal from "./ProductCollectionCarousal/ProductCollectionCarousal";
import FilterDrawer from "./FilterDrawer/FilterDrawer";
import Products from "./Products/Products";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";
import BrandsSkeleton from "../../components/skeletons/BrandsSkeleton";
import useBrands from "../../hooks/specific/useBrands";

const ProductCollection = () => {

  const [products, setProducts] = useState([]);

  const axiosSecure = useAxiosSecure();

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [pageCount, setPageCount] = useState(null);
  const [initialProducts, setInitialProducts] = useState(null);
  const [productLoad, setProductLoad] = useState(true);
  // const { data: shoeBrands, isLoading: brandLoad } = useGetSecure(
  //   ["Brands"],
  //   "/brands"
  // );

  const { shoeBrands, isLoading: brandLoad } = useBrands();

  // console.log(shoeBrands);
  // const { data } = useGetSecure(
  //   ["Products"],
  //   `/products?page=${page}&size=${size}`
  // );

  useEffect(() => {
    setProductLoad(true);
    axiosSecure
      .post(`/products?page=${page}&size=${size}`, {
        minPrice: priceRange.min,
        maxPrice:
          priceRange.max >= priceRange.min
            ? priceRange.max
            : priceRange.min + 1,
      })
      .then((res) => {
        setProductLoad(false);
        setProducts(res.data);
        setInitialProducts(res.data);
        // console.log(res.data);
        return;
      })
      .catch((err) => {
        setProductLoad(false);
      });
  }, []);

  const handleSearch = (e) => {
    if (!e.target.value) {
      setProducts(initialProducts);
    } else {
      // console.log(data);
      console.log(initialProducts);
      setProducts(
        initialProducts?.filter((product) =>
          product.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  const [brands, setBrands] = useState([]);
  const [genders, setGenders] = useState({});
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 20000,
  });

  const handleBrand = (brand) => {
    const exist = brands.find((brandName) => brandName === brand);

    if (exist) {
      setBrands(brands.filter((brandName) => brandName !== brand));
    } else {
      setBrands((prev) => [...prev, brand]);
    }
  };

  useEffect(() => {
    const selectGendersOptions = Object.keys(genders).filter(
      (key) => genders[key]
    );

    const filterOptions = {
      brands: brands,
      gender: selectGendersOptions,
      minPrice: priceRange.min,
      maxPrice:
        priceRange.max >= priceRange.min ? priceRange.max : priceRange.min + 1,
    };

    if (
      brands.length === 0 &&
      genders.length === 0
    ) {
      setProducts(data);
      return;
    }

    axiosSecure
      .post(`/products?page=${page}&size=${size}`, filterOptions)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [brands, genders, priceRange.min, priceRange.max, page, size]);

  return (
    <Container className="pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[7%] min-h-[600px]">
      {brandLoad ? (
        <BrandsSkeleton />
      ) : (
        <ul className="flex w-full max-w-full gap-4 mt-5 overflow-x-scroll no-scrollbar ">
          {shoeBrands?.map(({ _id, name: brandName, logo }) => (
            <li
              onClick={() => handleBrand(brandName)}
              key={brandName}
              className={` py-3 w-[25%] md:w-[20%] lg:w-[13%]  flex-shrink-0 text-center hover:border-black border border-gray-300  cursor-pointer duration-[.4s] text-sm flex  justify-center ${
                brands.includes(brandName)
                  ? " bg-black text-white"
                  : "text-black"
              }`}
            >
              {brandName}
              {/* <div>
              <img src={logo} alt="" className="w-[20px] " />
            </div> */}
            </li>
          ))}
        </ul>
      )}
      <div className="relative flex flex-col mt-5 lg:flex-row">
        <FilterDrawer
          setGenders={setGenders}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          genders={genders}
        />
        <Products
          handleSearch={handleSearch}
          products={products}
          page={page}
          setPage={setPage}
          size={size}
          setSize={setSize}
          pageCount={pageCount}
          setPageCount={setPageCount}
          productLoad={productLoad}
        />
      </div>
    </Container>
  );
};

export default ProductCollection;
