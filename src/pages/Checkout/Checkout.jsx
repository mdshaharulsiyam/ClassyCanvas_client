import React from "react";
import Container from "../../components/shared/Containers/Container";
import CheckoutCustomerForm from "./CheckoutCustomerForm";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutOrder from "./CheckoutOrder";

const Checkout = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[8%] min-h-[700px] gap-8">
      <CheckoutDetails />
      <CheckoutOrder />
    </Container>
  );
};

export default Checkout;
