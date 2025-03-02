import React from "react";

const PathchokroCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-40 sm:h-52 bg-gray-300 rounded-lg sm:rounded-[30px] block shadow"></div>
      <div className="h-4 w-1/4 bg-gray-300 rounded mt-5"></div>
      <div className="flex items-start gap-5 mt-3">
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
      </div>
      <div className="h-4 w-full bg-gray-300 rounded mt-4"></div>
      <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
      <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
      <div className="flex items-center gap-2 mt-4">
        <div className="h-6 w-16 bg-gray-300 rounded-[30px]"></div>
        <div className="h-6 w-16 bg-gray-300 rounded-[30px]"></div>
      </div>
    </div>
  );
};

export default PathchokroCardSkeleton;
