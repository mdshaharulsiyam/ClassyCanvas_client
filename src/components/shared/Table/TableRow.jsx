import React from "react";

const TableRow = ({
  children,
  className,
  cells,
  cellWidth,
  textPosition,
  border = "1px",
}) => {
  return (
    <tr
      className={`flex  justify-between items-center border-b pl-2 py-2 ${className}`}
    >
      {cells?.map((cell) => (
        <th
          className="overflow-x-scroll no-scrollbar"
          style={{
            width: cellWidth,
            textAlign: "start",
          }}
          key={cell}
        >
          <p className="w-[90%] overflow-x-auto no-scrollbar">{cell}</p>
        </th>
      ))}
      {children}
    </tr>
  );
};

export default TableRow;
