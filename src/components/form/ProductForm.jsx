import React, { useEffect, useState } from "react";
import Input from "../html/Input";
import Select from "../html/Select";
import Button from "../html/Button";
import Upload from "../shared/Upload";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import usePostSecure from "../../hooks/apiSecure/usePostSecure";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/specific/useUser";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";

const ProductForm = ({ method }) => {
  const { data: Brands, isLoading } = useGetSecure(["Brands"], "/brands");
  const [photo, setPhoto] = useState([]);
  const [photoLoad, setPhotoLoad] = useState(false);

  const [gender, setGender] = useState("Gender");
  const [brands, setBrands] = useState("");

  const { mutateAsync: addProduct } = usePostSecure(null, "/product");

  const { _id: userID } = useUser() || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onProductSubmit = async (data) => {
    try {
      if (brands === "" || gender === "Gender" || !photo) {
        toast.error("Required brands, gender, photo");
        return;
      }
      if (Object.keys(errors).length > 0) {
        toast.error("Invalid input. Please check the form fields.");
      }
      const { sizes, buyingCost, ...rest } =
        data;

      const product = {
        ...rest,
        sizes: sizes.split(",").map((value) => +value),
        gender: gender === "Gender" ? "" : gender,
        brands: brands,
        price: buyingCost,
        images : photo
      };
      try {
        const response = await addProduct(product);
        console.log(response);
        if (response.insertOne) {
          toast.success("product added");
          navigate(`/profile/${userID}/admin/product-manage`);
        }
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }

      // console.log(product);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onProductSubmit)}
      className="grid grid-cols-1 md:grid-cols-6 gap-x-3 gap-y-4"
    >
      {/* Name */}
      <div className="md:col-span-3">
        <label htmlFor="name" className="font-semibold text-lg">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          placeHolder="Product Name"
          id="name"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
        />
        {errors.name?.type === "required" && (
          <p className="text-red-500 text-sm"> name is required</p>
        )}
      </div>
      {/* Brand */}
      <div className="md:col-span-3">
        <label htmlFor="brand" className="font-semibold text-lg">
          Brand
          {/* Brands */}
        </label>
        <Select
          options={isLoading ?['loading'] : Brands?.map(item => item.name)}
          // options={["Yes", "No"]}
          placeHolder=""
          className="md:col-span-2"
          chosenValue={brands}
          setChosenValue={setBrands}
        />
        {errors.brand?.type === "required" && (
          <p className="text-red-500 text-sm"> brand is required</p>
        )}
      </div>
      {/* Gender */}
      <div className="md:col-span-2">
        <label className="font-semibold text-lg">Gender</label>
        <Select
          options={["Male", "Female"]}
          placeHolder="Gender"
          className="md:col-span-2"
          chosenValue={gender}
          setChosenValue={setGender}
        />
      </div>
      {/* Price */}
      <div className="md:col-span-2">
        <label htmlFor="price" className="font-semibold text-lg">
          price
        </label>
        <input
          {...register("buyingCost", { required: true, min: 0 })}
          type="number"
          placeHolder="price"
          id="buyingCost"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
        />
        {errors.buyingCost?.type === "required" && (
          <p className="text-red-500 text-sm"> price is required</p>
        )}
      </div>

      {/* Available */}
      <div className="md:col-span-2">
        <label className="font-semibold text-lg">in stock</label>
        <input
          {...register("instok", { required: true, min: 0 })}
          type="number"
          placeHolder="in stock"
          id="buyingCost"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
        />
        {errors.instok?.type === "required" && (
          <p className="text-red-500 text-sm"> stock is required</p>
        )}
      </div>

      {/* Description */}
      <div className="md:col-span-6">
        <label htmlFor="description" className="font-semibold text-lg">
          Description
        </label>
        <textarea
          {...register("description", { required: true, minLength: 5 })}
          id="description"
          rows={3}
          className="w-full  bg-[#EBEBEB] pl-2 pt-4 focus:outline-none"
          placeholder="Product Description"
        ></textarea>
        {errors.description?.type === "required" && (
          <p className="text-red-500 text-sm"> description is required</p>
        )}
      </div>
      {/* Shipping */}
      <div className="md:col-span-2">
        <label htmlFor="shipping" className="font-semibold text-lg">
          Shipping Cost
        </label>
        <input
          {...register("shippingPrice", { required: true, min: 0 })}
          type="number"
          placeHolder="Shipping"
          id="shipping"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
        />
      </div>

      {/* Sizes */}
      <div className="md:col-span-4">
        <label htmlFor="shipping" className="font-semibold text-lg">
          Sizes
        </label>
        <input
          {...register("sizes", {
            required: true,
            pattern: {
              value: /^(\d+(,\s*\d+)*)?$/, // 1, 2, 3, 4, 5, 6
              message: "Invalid format. [1, 2, 3, 4]",
            },
          })}
          type="text"
          placeHolder="1, 2, 3, 4, 5, ..."
          id="shipping"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
        />
        {errors.sizes?.type === "pattern" && (
          <p className="text-red-500 text-sm">{errors.sizes.message}</p>
        )}
      </div>

      {/* Upload */}

      {/* Discount */}
      <div className="md:col-span-3">
        <label htmlFor="discount" className="font-semibold text-lg">
          Discount (%)
        </label>
        <input
          {...register("discount", { required: true, min: 0, max: 100 })}
          type="number"
          min={0}
          max={100}
          placeHolder="Discount (%)"
          id="discount"
          className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
        />
        {errors.discount?.type === "required" && (
          <p className="text-red-500 text-sm"> discount is required</p>
        )}
      </div>
   <div className="md:col-span-3 flex items-center gap-2">
    {photo.map(item=><img key={item} className="h-16 w-16 rounded-full" src={item} />)}
   </div>
      <div className="md:col-span-3 flex items-center">
        <Upload
          placeHolder="Upload Photo"
          setImage={setPhoto}
          setUploading={setPhotoLoad}
          uploadStatus={photoLoad}
          productImage={photo}
        />
      </div>
      {/* Add The Product Button*/}
      <Button className="md:col-span-6 text-white py-2 mt-5 font-clashBold">
        Add Product
      </Button>
    </form>
  );
};

export default ProductForm;
