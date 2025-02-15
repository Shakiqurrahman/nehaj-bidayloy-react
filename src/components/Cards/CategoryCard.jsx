import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { convertToBanglaDate } from "../../utils/convertToBanglaDate";

const CategoryCard = ({
  writer,
  date,
  title,
  thumbnail,
  desc,
  categoryName,
  genreType,
  link,
}) => {
  const banglaDate = convertToBanglaDate(date);
  return (
    <div>
      <img
        src={thumbnail}
        alt=""
        className="w-full rounded-[30px] block shadow"
      />
      <div className="flex items-center gap-2 text-accent-golden mt-5">
        <h1>{writer}</h1>
        <span className="block size-2 rounded-full bg-accent-golden"></span>
        <p>{banglaDate}</p>
      </div>
      <Link
        to={`/story/${link}`}
        className="flex items-start gap-5 font-niladri text-lg lg:text-2xl text-primary-blue line-clamp-2"
      >
        {title} <MdArrowOutward className="shrink-0" />
      </Link>
      <p className="line-clamp-3 my-5">{desc}</p>
      <div className="flex items-center gap-2">
        <span className="block px-5 py-1 text-sm rounded-[30px] bg-primary-blue text-white">
          {categoryName}
        </span>
        <span
          className={`block px-5 py-1 text-sm rounded-[30px] ${
            genreType?.trim() === "অনুবাদ"
              ? "bg-onubadh"
              : genreType?.trim() === "প্রবন্ধ"
              ? "bg-probondho"
              : genreType?.trim() === "নোটস"
              ? "bg-notes"
              : "bg-primary-blue"
          } text-white`}
        >
          {genreType}
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
