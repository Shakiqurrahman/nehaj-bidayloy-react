import React from "react";

const CategoryCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="pt-[35px] px-[35px] pb-[64px] bg-gray-300 text-transparent rounded-[30px] sm:block hidden">
        <div className="flex items-center justify-between">
          <div className="h-6 w-1/2 bg-gray-400 rounded"></div>
          <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
        </div>
        <div className="h-4 w-2/4 bg-gray-400 rounded mt-6"></div>
        <div className="h-4 w-full bg-gray-400 rounded mt-2"></div>
        <div className="h-4 w-full bg-gray-400 rounded mt-2"></div>
        <div className="h-4 w-full bg-gray-400 rounded mt-2"></div>
      </div>
      <div className="p-6 bg-gray-300 text-transparent rounded-[30px] flex items-center justify-between sm:hidden">
        <div>
          <div className="h-6 w-1/2 bg-gray-400 rounded"></div>
          <div className="h-4 w-full bg-gray-400 rounded mt-2"></div>
          <div className="h-4 w-full bg-gray-400 rounded mt-2"></div>
          <div className="h-4 w-full bg-gray-400 rounded mt-2"></div>
        </div>
        <div className="h-10 w-10 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default CategoryCardSkeleton;
