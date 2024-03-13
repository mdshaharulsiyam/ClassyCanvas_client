import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import OrderCount from "./OrderCount";
import OrderTable from "./OrderTable";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";

const OrderManage = () => {
  const { data: orders } = useGetSecure(["Ordes"], `/orders`);

  return (
    <DashboardProfileContainer>
      <OrderCount count={orders?.length} />
      <OrderTable orders={orders} />
    </DashboardProfileContainer>
  );
};

export default OrderManage;
