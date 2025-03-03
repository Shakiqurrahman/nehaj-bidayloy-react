import React from "react";
import StoryCardSkeleton from "./StoryCardSkeleton";

const SingleStorySkeleton = () => {
  return (
    <div className="pt-[200px] animate-pulse">
      <div className="max-width">
        <div className="flex items-center gap-2">
          <div className="h-6 w-20 bg-gray-300 rounded-[30px]"></div>
          <div className="h-6 w-20 bg-gray-300 rounded-[30px]"></div>
        </div>
        <div className="flex items-center gap-2 text-accent-golden mt-5 mb-3">
          <div className="h-4 w-24 bg-gray-300"></div>
          <div className="size-2 rounded-full bg-gray-300"></div>
          <div className="h-4 w-24 bg-gray-300"></div>
        </div>
        <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-[500px] bg-gray-300 rounded-xl my-10"></div>
        <div className="h-40 bg-gray-300 rounded mb-10"></div>
        <div className="h-40 bg-gray-300 rounded mb-10"></div>
      </div>
      {/* author details section */}
      <div className="bg-[#F1F8FF] py-[50px] w-full px-[30px]">
        <div className="max-width flex flex-wrap sm:flex-nowrap items-center gap-10">
          <div className="h-40 w-40 bg-gray-300 rounded-[20px]"></div>
          <div className="grow">
            <div className="h-6 w-40 bg-gray-300 mb-3"></div>
            <div className="h-20 bg-gray-300"></div>
          </div>
        </div>
      </div>
      {/* all comments section */}
      <div className="max-width my-[60px] sm:my-20">
        <div>
          <div className="h-6 w-60 bg-gray-300 mb-3"></div>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-5 sm:gap-10 p-4 rounded-[20px] border border-gray-300">
            <div className="h-20 w-20 bg-gray-300 rounded-[15px]"></div>
            <div className="grow">
              <div className="h-6 w-32 bg-gray-300 mb-2"></div>
              <div className="h-16 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
      {/* recent posts section */}
      <div className="max-width mt-[60px] sm:mt-20">
        <div className="h-6 w-40 bg-gray-300 mb-5"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {[...Array(3)].map((_, i) => (
            <StoryCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleStorySkeleton;
