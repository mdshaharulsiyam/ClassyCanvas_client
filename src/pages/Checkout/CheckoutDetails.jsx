import React, { useState } from "react";
import CheckoutCustomerForm from "./CheckoutCustomerForm";
import CheckoutPaymentForm from "./CheckoutPaymentForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

const CheckoutDetails = () => {
  const [customerActive, setCustomerActive] = useState(false);

  return (
    <div className=" lg:col-span-3 relative min-h-[700px]">
      <h1 className=" mb-16 border-b-2 border-[#EBEBEB] font-medium w-max">
        Your Details
      </h1>
      <div className="flex gap-5 mb-7">
        <div
          onClick={() => setCustomerActive(true)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <p
            className={`w-[12px] h-[12px] rounded-full  ${
              customerActive ? "bg-black" : "border border-black"
            }`}
          ></p>
          <p className="font-semibold ">Personal</p>
        </div>
        <div
          onClick={() => setCustomerActive(false)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <p
            className={`w-[12px] h-[12px] rounded-full  ${
              !customerActive ? "bg-black" : "border border-black"
            }`}
          ></p>
          <p className="font-semibold ">Payment</p>
        </div>
      </div>

      <CheckoutCustomerForm customerActive={customerActive} />
      <Elements stripe={stripePromise}>
        <CheckoutPaymentForm customerActive={customerActive} />
      </Elements>
    </div>
  );
};

export default CheckoutDetails;
