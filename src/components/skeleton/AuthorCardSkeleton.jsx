import React from "react";

const AuthorCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="mb-3 rounded-lg sm:rounded-2xl w-full h-40 bg-gray-300"></div>
      <div className="h-5 w-5/6 bg-gray-300 rounded"></div>
    </div>
  );
};

export default AuthorCardSkeleton;
