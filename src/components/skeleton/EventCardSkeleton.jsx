import React from "react";

const EventCardSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full h-[400px] bg-gray-300 rounded-[50px]"></div>
    </div>
  );
};

export default EventCardSkeleton;
