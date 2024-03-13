import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FaRegHeart, FaHeart, FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import usePostSecure from "../../../hooks/apiSecure/usePostSecure";

import toast from "react-hot-toast";
import useUser from "../../../hooks/specific/useUser";
import useAuth from "../../../hooks/auth/useAuth";
import useDeleteSecure from "../../../hooks/apiSecure/useDeleteSecure";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";

const ProductCard = ({ product }) => {
  const { _id, name, price, images } = product || {};
  const { _id: user } = useUser() || {};
  const { mutateAsync: addToCart } = usePostSecure([["Carts", user]], "/cart");

  const { user: curUser } = useAuth();

  const [bookmarked, setBookmarked] = useState(false);

  const { data: favStatus } = useGetSecure(
    ["FavoriteStatus", curUser?.email, _id],
    `/favorite-status?email=${curUser?.email}&productID=${_id}`
  );

  useEffect(() => {
    setBookmarked(favStatus?.found);
  }, [favStatus]);

  const { mutateAsync: addToFavorite } = usePostSecure(null, `/favorite`);
  const { mutateAsync: deleteFromFavorite } = useDeleteSecure(null);

  const navigate = useNavigate();

  const handleBookmarked = async (action) => {
    if (action === "+") setBookmarked(true);
    if (action === "-") setBookmarked(false);

    const favProduct = {
      product: _id,
      userName: curUser?.displayName,
      userEmail: curUser?.email,
    };

    try {
      if (action === "+") {
        const response = await addToFavorite(favProduct);
        toast.success("Product Bookmarked!!");
      } else if (action === "-") {
        const response = await deleteFromFavorite(
          `/favorite?email=${curUser?.email}&productID=${_id}`
        );
        toast.success("Product Removed From Bookmarked");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleAddToCart = async () => {
    try {
      const product = {
        user,
        product: _id,
        price,
      };

      await toast.promise(addToCart(product), {
        pending: "Adding to cart...",
        success: "Added to cart!",
        error: "Failed to add to cart",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="h-[350px] shadow-sm">
      <div className="h-[70%] bg-[#F2F2F2] relative cursor-pointer">
        <img
          src={images[0]}
          alt={name}
          className="object-cover h-full mx-auto"
        />

        {bookmarked ? (
          <FaHeart
            onClick={() => handleBookmarked("-")}
            className="absolute top-[5%] right-[5%] text-lg"
          />
        ) : (
          <FaRegHeart
            onClick={() => handleBookmarked("+")}
            className="absolute top-[5%] right-[5%] text-lg"
          />
        )}
      </div>
      <div className="px-2 flex flex-col gap-1 mt-3 text-sm font-medium">
        <h1 className="font-semibold">{name}</h1>
        <div className="flex items-center justify-between w-[95%]">
          <p className="">${price}</p>
          <p className="w-[15px] h-[15px] bg-black rounded-full"></p>
        </div>
        <div className="flex justify-between w-[96%] cursor-pointer">
          <p
            onClick={() => navigate(`/product/${_id}`)}
            className="text-[12px] flex items-center gap-2 bg-black text-white px-2 mt-2"
          >
            Detail <FaArrowAltCircleRight />
          </p>
          <p
            onClick={handleAddToCart}
            className="text-2xl text-gray-400 cursor-pointer    duration-300 hover:rotate-90"
          >
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
