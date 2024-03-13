import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import SalesSummary from "./SalesSummary";

const SalesOverview = () => {
  return (
    <DashboardProfileContainer>
      <SalesSummary />
    </DashboardProfileContainer>
  );
};

export default SalesOverview;
