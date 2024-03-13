import React from "react";

import { Outlet } from "react-router-dom";
import ProfileSideBar from "../components/shared/Sidebar/ProfileSideBar";

const Profile = () => {
  return (
    <div className="relative flex flex-col lg:flex-row  min-h-screen bg-[#F1F3F4] h-auto">
      <ProfileSideBar />
      <Outlet />
    </div>
  );
};

export default Profile;
