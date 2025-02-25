import React from "react";

const AuthorCard = ({ authorData }) => {
  return (
    <div>
      <img
        className="mb-3 rounded-lg sm:rounded-2xl w-full object-cover object-top"
        src={authorData?.avatar?.url}
        alt="Authors Picture"
      />
      <p className="text-xs sm:text-lg text-primary-blue font-bold">
        {authorData?.fullName}
      </p>
    </div>
  );
};

export default AuthorCard;
