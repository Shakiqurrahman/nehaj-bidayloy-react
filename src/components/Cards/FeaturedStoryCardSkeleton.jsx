import React from "react";

const FeaturedStoryCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center flex-wrap sm:flex-nowrap gap-5 md:gap-[60px] py-5 md:py-16 border-b-2 border-primary-blue">
        <div className="w-full sm:w-[45%] shrink-0 rounded-lg bg-gray-300 h-[250px]"></div>
        <div className="w-full sm:w-[55%] flex items-center justify-between gap-5">
          <div className="w-full">
            <div className="h-6 bg-gray-300 w-1/3 rounded mb-2"></div>
            <div className="h-8 bg-gray-300 w-2/3 rounded mb-3 sm:mb-5"></div>
            <div className="h-4 bg-gray-300 w-full rounded mb-2"></div>
            <div className="h-4 bg-gray-300 w-5/6 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 w-2/3 rounded"></div>
          </div>
          <div className="shrink-0 size-10 rounded-full border-2 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStoryCardSkeleton;
