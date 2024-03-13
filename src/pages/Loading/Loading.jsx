import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen  absolute top-[-2.2%] left-0  bg-gray-200 flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loading;
