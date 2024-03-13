import React from "react";

const ProfileHeader = ({ header, icon }) => {
  return (
    <div className="mt-5 text-xl md:text-2xl font-bold bg-white min-h-[100px] h-[23vh] flex  justify-center pl-[5%] flex-col gap-3 ">
      {icon}
      <h2 className=" font-clashBold">{header.toUpperCase()}</h2>
    </div>
  );
};

export default ProfileHeader;
