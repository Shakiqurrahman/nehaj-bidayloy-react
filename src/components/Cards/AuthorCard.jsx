import React from "react";
import authorsImage from "../../assets/images/author card.png";

const AuthorCard = ({ authorsData }) => {
  return (
    <div>
      <img
        className="mb-3 rounded-2xl w-full object-cover object-top"
        src={authorsImage}
        alt="Authors Picture"
      />
      <p className="text-base sm:text-lg text-primary-blue font-bold">
        আবুল বারাকাত
      </p>
    </div>
  );
};

export default AuthorCard;
