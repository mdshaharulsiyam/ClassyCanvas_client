import React from "react";
import Button from "../../components/html/Button";
import useUser from "../../hooks/specific/useUser";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";

const CheckoutOrder = () => {
  const { _id: userID } = useUser() || {};

  const { data: cartTotal } = useGetSecure(
    ["CartTotal", userID],
    `/cart-total/${userID}`
  );

  const checkoutSummary = [
    {
      title: "Subtotal",
      total:
        cartTotal && cartTotal?.length > 0 ? cartTotal[0]?.totalDiscount : 0,
    },
    {
      title: "Discount",
      total:
        cartTotal && cartTotal?.length > 0 ? cartTotal[0]?.totalDiscount : 0,
    },
    {
      title: "Shipping",
      total: cartTotal && cartTotal?.length > 0 ? 1 : 0,
    },
    {
      title: "Total",
      total:
        cartTotal && cartTotal?.length > 0
          ? +(cartTotal[0]?.totalPrice - cartTotal[0]?.totalDiscount + 50)
          : 0,
    },
  ];

  return (
    <div className="order-4 md:order-1 w-[90%] mx-auto lg:col-span-2">
      <h1 className=" mb-16 border-b-2 border-[#EBEBEB] w-max font-medium">
        Your Order
      </h1>
      <table className="w-full">
        <thead className="w-full ">
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1">
            <th className="col-span-3">Product</th>
            <th className="col-span-2 pb-5">Subtotal</th>
          </tr>
        </thead>
        <tbody className="">
          {checkoutSummary.map(({ title, total }) => (
            <tr
              key={title}
              className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-black font-medium py-2"
            >
              <td className="col-span-3">{title}</td>
              <td className={`col-span-2`}>{total}$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutOrder;
