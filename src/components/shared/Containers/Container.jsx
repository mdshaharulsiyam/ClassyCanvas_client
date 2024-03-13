import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` w-[90%] mx-auto max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
