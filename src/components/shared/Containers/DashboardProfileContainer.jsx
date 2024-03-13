import React from "react";

const DashboardProfileContainer = ({ children, className }) => {
  return (
    <div
      className={` w-[90%] lg:w-[75%] bg-transparent h-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default DashboardProfileContainer;
