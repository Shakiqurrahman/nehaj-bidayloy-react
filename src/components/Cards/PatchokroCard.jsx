import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { convertToBanglaDate } from "../../utils/convertToBanglaDate";

const PatchokroCard = ({ date, title, thumbnail, desc, session, link }) => {
  const banglaDate = convertToBanglaDate(date);
  return (
    <div>
      <img
        src={thumbnail}
        alt=""
        className="w-full rounded-lg sm:rounded-[30px] block shadow"
      />
      <div className="text-accent-golden mt-5 text-sm sm:text-base">
        <p>{banglaDate}</p>
      </div>
      <Link
        to={`/study-circle/${link}`}
        className="flex items-start gap-5 font-niladri text-lg lg:text-2xl text-primary-blue"
      >
        <span className="line-clamp-2">{title}</span>{" "}
        <MdArrowOutward className="shrink-0" />
      </Link>
      <p className="line-clamp-5 sm:line-clamp-3 my-5 text-sm sm:text-base">
        {desc}
      </p>
      <div className="flex items-center gap-2">
        <span
          className={`block px-2 sm:px-5 py-1 text-xs sm:text-sm rounded-[30px] bg-alert-orange text-white`}
        >
          পাঠচক্র
        </span>
        <span className="block px-2 sm:px-5 py-1 text-xs sm:text-sm rounded-[30px] bg-alert-green text-white">
          {session}
        </span>
      </div>
    </div>
  );
};

export default PatchokroCard;
