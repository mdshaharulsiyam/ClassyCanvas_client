import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import QuantityBtn from "../../components/shared/SingleUseButtons/QuantityBtn";
import toast from "react-hot-toast";
import usePutSecure from "../../hooks/apiSecure/usePutSecure";
import DeleteButton from "../../components/shared/SingleUseButtons/DeleteButton";

const CartTableRow = ({ cartProduct, handleSelected, selectedIds, userID }) => {
  const { product, quantity, price, _id } = cartProduct || {};
  console.log(cartProduct);
  const [productQuantity, setProductQuantity] = useState(null);

  useEffect(() => {
    setProductQuantity(quantity);
  }, [quantity]);

  const { mutateAsync: updateQuantityPrice } = usePutSecure(
    [["CartTotal", userID]],
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

  // console.log(selectedIds);
  return (
    <tr className="grid grid-cols-4 border-b pb-4 mt-2 overflow-scroll min-w-[500px] no-scrollbar">
      <td className="flex  col-span-2 justify-between">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={(e) => handleSelected(e, _id)}
          checked={selectedIds[_id] || false}
        />
        <div className="w-[15%] lg:w-[20%] ">
          <img
            src={product?.images[0]}
            alt=""
            className="w-full h-full object-cover bg-[#F0F0F4] p-1"
          />
        </div>
        <div className="flex flex-col justify-center w-[50%] gap-1">
          <p className=" font-poppins font-bold text-sm md:text-base">
            {product?.name}
          </p>
          <p className="text-[10px] lg:text-[12px] text-gray-400">Size - 3</p>
          <p className=" font-clashRegular text-sm">
            $ {product?.price * productQuantity}
          </p>
        </div>
      </td>
      <td className="col-span-1 flex flex-col  justify-center pb-[10%]">
        <QuantityBtn
          productQuantity={productQuantity}
          handleQuantity={handleQuantity}
        />
      </td>
      <td className="col-span-1 flex flex-col justify-center">
        <div className="flex justify-between">
          <p className=" font-clashRegular text-sm">${price}</p>
          {/* <div className="bg-red-500 flex justify-center items-center p-1 rounded-full active:scale-95 divide-blue-[.4s]">
            <MdClose className=" text-white rounded-full" />
          </div> */}
          <DeleteButton id={_id} />
        </div>
      </td>
    </tr>
  );
};

export default CartTableRow;
