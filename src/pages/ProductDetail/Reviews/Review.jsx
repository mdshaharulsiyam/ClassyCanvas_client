import React from "react";

const Review = ({ review }) => {
  const { user, comment } = review || {};
  const { photo } = user || {};

  //   console.log(review);

  return (
    <li className="flex md:w-[50%] gap-4 list-disc  items-center">
      <div className="flex justify-center items-center gap-4">
        <p className="w-[7px] h-[7px] bg-black rounded-full"></p>
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full border border-gray-400">
          <img
            src={
              photo ||
              "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg"
            }
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="w-[80%] text-sm md:text-base">{comment}</div>
    </li>
  );
};

export default Review;
