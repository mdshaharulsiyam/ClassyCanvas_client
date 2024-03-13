import React from "react";
import Input from "../html/Input";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({
  className = "",
  inputClass,
  iconClass,
  transparent,
  onChange,
}) => {
  return (
    <div className={`w-[60%] relative ${className} rounded-md`}>
      <Input
        placeholder="Search"
        onChange={onChange}
        className={`w-full  ${inputClass} ${
          transparent ? " bg-transparent" : ""
        } pl-4 rounded-md`}
      />
      <AiOutlineSearch className={`absolute top-[28%]  ${iconClass}`} />
    </div>
  );
};

export default Search;
