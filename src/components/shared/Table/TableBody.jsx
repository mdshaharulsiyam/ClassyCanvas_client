import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ children, data, className }) => {
  return <tbody className={`${className}`}>{children}</tbody>;
};

export default TableBody;
