import React from "react";
import { MdArrowOutward } from "react-icons/md";

const StoryCardSkeleton = () => {
  return (
    <div className="rounded-xl animate-pulse">
      <div className="w-full rounded-xl sm:rounded-[30px] min-h-[180px] bg-gray-300"></div>

      <div className="flex flex-wrap text-xs sm:text-base items-center gap-2 text-gray-400 mt-5">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
        <span className="block size-2 rounded-full bg-gray-400"></span>
        <div className="h-4 w-16 bg-gray-300 rounded"></div>
      </div>

      <div className="flex items-center sm:items-start gap-2 justify-between sm:gap-5 font-niladri text-sm sm:text-lg lg:text-2xl text-gray-400 mt-3">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
      </div>

      <div className="line-clamp-3 my-5 text-xs sm:text-base space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
      </div>

      <div className="flex items-center gap-2">
        <span className="block px-5 py-2 text-xs sm:text-sm rounded-[30px] bg-gray-300 w-20 h-6"></span>
        <span className="block px-5 py-2 text-xs sm:text-sm rounded-[30px] bg-gray-300 w-20 h-6"></span>
      </div>
    </div>
  );
};

export default StoryCardSkeleton;
