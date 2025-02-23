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
        className="w-full rounded-[30px] block shadow"
      />
      <div className="text-accent-golden mt-5">
        <p>{banglaDate}</p>
      </div>
      <Link
        to={`/study-circle/${link}`}
        className="flex items-start gap-5 font-niladri text-lg lg:text-2xl text-primary-blue line-clamp-2"
      >
        {title} <MdArrowOutward className="shrink-0" />
      </Link>
      <p className="line-clamp-3 my-5">{desc}</p>
      <div className="flex items-center gap-2">
        <span
          className={`block px-5 py-1 text-sm rounded-[30px] bg-alert-orange text-white`}
        >
          পাঠচক্র
        </span>
        <span className="block px-5 py-1 text-sm rounded-[30px] bg-alert-green text-white">
          {session}
        </span>
      </div>
    </div>
  );
};

export default PatchokroCard;
