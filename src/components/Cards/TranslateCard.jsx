import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const TranslateCard = ({ bgImage, title, desc, link }) => {
  return (
    <div className="rounded-[30px] relative">
      <img
        src={bgImage}
        alt=""
        className="min-h-[600px] w-full rounded-[30px] object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full py-5 bg-primary-blue rounded-[30px] px-[50px]">
        <div className="flex items-center gap-5">
          <div className="text-white">
            <h1 className="font-niladri mb-2 text-xl">{title}</h1>
            <p className="line-clamp-2">{desc}</p>
          </div>
          <Link
            to={`/${link}`}
            className="shrink-0 flex items-center justify-center bg-white size-10 rounded-full text-primary-dark hover:bg-alert-orange hover:text-white duration-300"
          >
            <BsArrowUpRight className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TranslateCard;
