import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import PlusMinusBtn from "../../components/shared/SingleUseButtons/PlusMinusBtn";
import QuantityBtn from "../../components/shared/SingleUseButtons/QuantityBtn";
import usePutSecure from "../../hooks/apiSecure/usePutSecure";
import DeleteButton from "../../components/shared/SingleUseButtons/DeleteButton";
const CartDrawerCard = ({ cartProduct }) => {
  const { product, quantity, price, _id } = cartProduct || {};

  const [productQuantity, setProductQuantity] = useState(quantity);

  const { mutateAsync: updateQuantityPrice } = usePutSecure(
    null,
    `/update-cart-quantity/${_id}`
  );

  const handleQuantity = async (action) => {
    let newQuantity;
    if (action === "+") {
      newQuantity = productQuantity + 1;
    } else {
      newQuantity = productQuantity - 1 < 0 ? 0 : productQuantity - 1;
    }

    setProductQuantity(newQuantity);

    const dataToSend = {
      quantity: newQuantity,
      price: product?.price,
    };

    try {
      const response = await updateQuantityPrice(dataToSend);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-5 border  flex justify-between font-poppins overflow-y-auto rounded-md">
      <div className="w-[28%] bg-[#F0F0F4]">
        <img src={product?.images[0]} alt="" className="p-1" />
      </div>
      <div className="w-[70%] p-3 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{product?.name}</h3>
          </div>
          {/* <RiDeleteBin6Line className="text-red-500" /> */}
          <DeleteButton id={_id} />
        </div>

        <div className="flex justify-between items-center">
          <p className=" font-clashSemibold">
            {product?.price * productQuantity}$
          </p>
          <QuantityBtn
            productQuantity={productQuantity}
            handleQuantity={handleQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartDrawerCard;
