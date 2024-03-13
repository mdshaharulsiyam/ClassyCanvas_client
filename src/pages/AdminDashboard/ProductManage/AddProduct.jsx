import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import ProductForm from "../../../components/form/ProductForm";
import ProfileHeader from "../../../components/shared/Headers/ProfileHeader";
import { MdAddComment } from "react-icons/md";

const AddProduct = () => {
  return (
    <DashboardProfileContainer>
      <ProfileHeader
        header="Add Product "
        icon={<MdAddComment className="text-3xl lg:text-4xl" />}
      />
      <div className="min-h-[400px] bg-white mt-5 pt-5 px-[5%] pb-5">
        <ProductForm method="post" />
      </div>
    </DashboardProfileContainer>
  );
};

export default AddProduct;
