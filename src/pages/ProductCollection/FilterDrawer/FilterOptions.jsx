import React from "react";
import MultiSelect from "../../../components/html/MultiSelect";
import Input from "../../../components/html/Input";

const FilterOptions = ({
  drawerOpen,
  setGenders,
  setPriceRange,
  priceRange,
  genders,
}) => {
  const gender = ["Male", "Female"];
  return (
    <div
      className={`mt-4 space-y-4 ${
        drawerOpen ? "lg:w-full" : "hidden lg:block w-full"
      }`}
    >
      <div className="w-full">
        <p>Price Range</p>
        <div className="flex items-center justify-between gap-4 mt-2">
          <Input
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, min: e.target.value }))
            }
            type="number"
            min={0}
            className=" shadow-inner w-[35%] bg-white border border-gray-300  py-1 md:py-1 "
          />
          <Input
            value={+priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, max: +e.target.value }))
            }
            type="number"
            min={+priceRange.min}
            className="shadow-inner-sm w-[35%] bg-white border border-gray-300  py-1 md:py-1 "
          />
        </div>
      </div>
      <MultiSelect
        chosenOptions={genders}
        options={gender}
        placeHolder="Gender"
        setChosenOptions={setGenders}
      />
    </div>
  );
};

export default FilterOptions;
