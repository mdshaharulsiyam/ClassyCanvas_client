import React from "react";
import DashboardProfileContainer from "../../../components/shared/Containers/DashboardProfileContainer";
import ProfileHeader from "../../../components/shared/Headers/ProfileHeader";
import { BiSolidUserAccount } from "react-icons/bi";
import ProfileForm from "./ProfileForm";

const MyAccount = () => {
  return (
    <DashboardProfileContainer>
      <ProfileHeader
        header="My Account"
        icon={<BiSolidUserAccount className={`text-3xl md:text-4xl`} />}
      />
      <ProfileForm />
    </DashboardProfileContainer>
  );
};

export default MyAccount;
