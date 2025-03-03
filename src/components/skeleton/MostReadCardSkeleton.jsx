import React from "react";

const MostReadCardSkeleton = ({ dark = true }) => {
  return (
    <div className={`animate-pulse`}>
      <div className="rounded-xl sm:rounded-[30px] h-[180px] w-full bg-gray-300 shadow"></div>
      {dark && (
        <div className="flex items-center gap-5 text-grey mt-5">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
      )}
      <div className="h-8 w-3/4 bg-gray-300 rounded mt-3"></div>
      <div className="h-4 w-full bg-gray-300 rounded mt-3"></div>
      <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
      <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
      <div className="h-10 w-24 bg-gray-300 rounded-[30px] mt-5"></div>
    </div>
  );
};

export default MostReadCardSkeleton;
