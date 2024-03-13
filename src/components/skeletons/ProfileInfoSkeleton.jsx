import React from "react";

const ProfileInfoSkeleton = () => {
  return (
    <div className="flex items-center gap-4 pb-6 mt-5 text-white border-b">
      <div className="w-[80px] h-[80px] bg- rounded-full bg-gray-300 flex justify-center items-center font-clashBold text-2xl animate-pulse">
        {/* JK */}
      </div>
      <div className="w-[40%] space-y-2">
        <p className="w-[40%] h-[15px] bg-gray-300 animate-pulse"></p>
        <p className="font-bold w-[80%] h-[15px] bg-gray-300 animate-pulse"></p>
      </div>
    </div>
  );
};

export default ProfileInfoSkeleton;
