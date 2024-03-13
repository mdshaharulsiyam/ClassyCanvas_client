import React from "react";
import { FaHeart } from "react-icons/fa";
import useDeleteSecure from "../../hooks/apiSecure/useDeleteSecure";
import useAuth from "../../hooks/auth/useAuth";
import toast from "react-hot-toast";

const FavoriteCard = ({ favorite }) => {
  const { product } = favorite;
  const { _id, images, name, price, gender } = product;
  const { user: curUser } = useAuth();
  const { mutateAsync: deleteFromFavorite } = useDeleteSecure([
    ["Favorites", curUser?.email],
  ]);

  const handleBookmarked = async () => {
    try {
      const response = await deleteFromFavorite(
        `/favorite?email=${curUser?.email}&productID=${_id}`
      );
      toast.success("Product Removed From Bookmarked");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="h-[300px] md:h-[300px] border rounded-lg shadow-sm">
      <div className="h-4/5 ">
        <img
          src={images[0]}
          alt=""
          className="w-[70%] md:w-[80%] mx-auto h-full object-cover rounded-lg"
        />
      </div>
      <div className="h-1/5 px-4 pt-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">{name}</h1>
            <p className="text-sm text-gray-400">{gender}</p>
          </div>
          <div className="flex flex-col justify-center items-end gap-1">
            <FaHeart className=" cursor-pointer" onClick={handleBookmarked} />
            <p className=" font-medium">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
