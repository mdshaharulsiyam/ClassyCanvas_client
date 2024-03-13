import React, { useState } from "react";
import { FaM, FaP, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const MultiSelect = ({
  options,
  placeHolder = "Select",
  chosenOptions,
  setChosenOptions,
}) => {
  const [dropdownOpen, setDrownDownOpen] = useState(false);
  // const [chosenOptions, setChosenOptions] = useState({});

  const atleastOneSelect = Object.keys(chosenOptions)?.find(
    (key) => chosenOptions[key]
  );

  const handleChosenOptions = (option) => {
    setChosenOptions((prev) => ({ ...prev, [option]: !prev[option] }));
    // setChosenOptions((prev) => ({ ...prev, [option]: true }));
  };

  return (
    <div className="w-full ">
      <div
        className="flex items-center justify-between py-3 pl-1 border "
        onClick={() => setDrownDownOpen(!dropdownOpen)}
      >
        <p>
          {atleastOneSelect ? (
            <>
              {Object.keys(chosenOptions)?.map(
                (key) => chosenOptions[key] && key + " | "
              )}
            </>
          ) : (
            placeHolder
          )}
        </p>
        {dropdownOpen ? (
          <FaMinus className="mr-4 text-lg text-gray-600" />
        ) : (
          <FaPlus className="mr-4 text-lg text-gray-600" />
        )}
      </div>

      <ul
        className={`w-full   ${
          dropdownOpen ? "max-h-[150px] h-auto" : "max-h-0 h-0"
        } duration-[.4s]  overflow-y-auto `}
      >
        {options.map((option) => (
          <li
            key={option}
            className={`${
              dropdownOpen ? "border pl-1  py-2 cursor-pointer mt-2" : "hidden"
            } ${chosenOptions[option] ? "bg-gray-200" : ""}`}
            onClick={() => handleChosenOptions(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
