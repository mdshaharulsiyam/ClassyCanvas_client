import React, { useState } from "react";
import Button from "../html/Button";
import { useNavigate } from "react-router-dom";
import usePostSecure from "../../hooks/apiSecure/usePostSecure";
import toast from "react-hot-toast";
import useUser from "../../hooks/specific/useUser";

const ProductCarouselCard = ({ product }) => {
  const navigate = useNavigate();
  const { _id: user } = useUser()
  // console.log(user)
  const { images, name, _id,price } = product;
  const { mutateAsync: addToCart } = usePostSecure([["Carts", user]], "/cart");
  const [hover, setHover] = useState(false);
  const handleAddToCart = async () => {
    if (!user) {
      return toast.error( "please login first!")
    }
    try {
      const cartProduct = {
        user,
        product: _id,
        price : price,
        quantity: 1,
      };

      await toast.promise(addToCart(cartProduct), {
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
    <div
      className="h-[350px] mb-48 group relative]"
      style={{ backgroundColor: "rgb(234 234 234)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          backgroundImage: ` url(${images[0]})`,
          backgroundSize: "cover",
          width: "80%",
        }}
        className={`h-[90%] relative mx-auto  duration-[.4s] ${
          hover ? "scale-105" : ""
        }`}
      ></div>
      <div className=" h-[50px] bg-[rgb(234 234 234)] w-full  font-clashSemibold text-center">
        {name}
      </div>
      {/* show on hover */}
      <div
        className={`absolute top-0 left-0 w-full h-[400px]  z-5 flex flex-col justify-center items-center gap-4 font-clashRegular  ${
          hover ? "backdrop-blur-sm" : ""
        }`}
      >
        <Button
          onClick={() => navigate(`/product/${_id}`)}
          className={` w-[80%] border border-black bg-transparent text-black ${
            hover
              ? " h-[10%] text-base "
              : "w-0 h-0 text-[0px] border-none duration-[.5s]"
          } duration-[.5s] hover:bg-black hover:text-white`}
        >
          Details
        </Button>
        <Button onClick={handleAddToCart}
          className={` w-[80%] border border-black bg-transparent text-black ${
            hover ? " h-[10%] text-base " : "w-0 h-0 text-[0px] border-none "
          } duration-[.5s] hover:bg-black hover:text-white`}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCarouselCard;
