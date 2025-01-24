import React from "react";
import { Link } from "react-router-dom";

const CategoryCardWithButton = ({
  thumbnail,
  title,
  desc,
  link,
  darkMode = true,
  categoryName,
  genreType,
}) => {
  return (
    <div className={darkMode ? `text-white` : ``}>
      <img
        src={thumbnail}
        alt=""
        className="rounded-[30px] h-[350px] w-full object-cover shadow"
      />
      {(categoryName || genreType) && (
        <div className="flex items-center gap-5 text-grey mt-5">
          <p>{categoryName}</p>
          <p>{genreType}</p>
        </div>
      )}
      <h1 className="font-niladri my-3 text-2xl" title={title}>
        {title}
      </h1>
      <p className="line-clamp-3">{desc}</p>
      <Link
        to={`/${link}`}
        className={`inline-block mt-5 px-8 py-2 rounded-[30px] border  font-niladri text-lg  ${
          darkMode
            ? "text-white border-white"
            : "text-primary-blue border-primary-blue"
        }`}
      >
        পড়ুন
      </Link>
    </div>
  );
};

export default CategoryCardWithButton;
