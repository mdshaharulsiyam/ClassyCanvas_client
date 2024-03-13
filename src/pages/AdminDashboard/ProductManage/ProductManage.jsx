import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import ProductStates from "./ProductStates";
import ProductTable from "./ProductTable";

const ProductManage = () => {
  return (
    <DashboardProfileContainer>
      <ProductStates />
      <ProductTable />
    </DashboardProfileContainer>
  );
};

export default ProductManage;
