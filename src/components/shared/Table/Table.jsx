import React from "react";

const Table = ({ children, className }) => {
  return (
    <table
      className={` overflow-scroll w-[90%] ml-[5%] sm:pl-0 min-w-[500px]  mx-auto  min-h-[500px] ${className}`}
    >
      {children}
    </table>
  );
};

export default Table;
