import React from "react";
import { MdClose } from "react-icons/md";
import CartDrawerCard from "./CartDrawerCard";
import Button from "../../components/html/Button";
import { useNavigate } from "react-router-dom";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";
import useUser from "../../hooks/specific/useUser";

const CartDrawer = ({ cartOpen, handleCartOpen }) => {
  const navigate = useNavigate();

  const { _id: userID } = useUser() || {};

  const { data: cartProducts } = useGetSecure(
    ["Carts", userID],
    `/carts/${userID}`
  );

  return (
    <div
      className={`max-h-screen min-h-[300px]  sm:w-[70%] md:w-[50%] lg:w-[30%] fixed  top-0  bg-[#F0F0F4] h-screen p-2  flex flex-col justify-between ${
        cartOpen
          ? "right-0 z-20"
          : "right-[400%] sm:right-[-200%] md:right-[-100%] z-0"
      } duration-[.4s]`}
    >
      {/* Top Side  */}
      <div className="bg-white h-[70%] p-4 rounded-lg shadow-sm overflow-y-auto no-scrollbar flex flex-col justify-between ">
        <div className="flex justify-between items-center mt-3">
          <p className=" font-clashSemibold text-2xl">Your Cart</p>
          <MdClose
            className="text-2xl hover:rotate-90 duration-[.4s]"
            onClick={handleCartOpen}
          />
        </div>
        <div className="h-[80%] overflow-y-auto no-scrollbar">
          {cartProducts?.map((cartProduct) => (
            <CartDrawerCard key={cartProduct._id} cartProduct={cartProduct} />
          ))}
        </div>
      </div>

      {/* Bottom Side */}
      <div className="h-[28%]  shadow-sm rounded-lg bg-white p-4">
        <div className="flex justify-between items-center mt-3  font-clashSemibold ">
          <p className="text-lg">Sub Total</p>
          <p className="text-base">280 $</p>
        </div>
        <Button
          onClick={() => navigate("/checkout")}
          className="w-full mt-4 text-white py-3 rounded-md font-semibold  font-clashLight"
        >
          Continue To Checkout
        </Button>
        <p className="text-[12px] text-black mt-2 w-full text-center font-poppins ">
          Please get it now before it sells out
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
