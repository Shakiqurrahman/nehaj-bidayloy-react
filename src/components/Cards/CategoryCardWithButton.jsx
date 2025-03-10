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
        className="rounded-xl sm:rounded-[30px] min-h-[150px] w-full object-cover shadow"
      />
      {(categoryName || genreType) && (
        <div className="flex items-center gap-5 text-grey mt-5">
          <p>{categoryName}</p>
          <p>{genreType}</p>
        </div>
      )}
      <h1
        className="font-niladri my-3 text-lg sm:text-2xl line-clamp-3 sm:line-clamp-1"
        title={title}
      >
        {title}
      </h1>
      <p className="line-clamp-5 sm:line-clamp-3">{desc}</p>
      <Link
        to={`/story/${link}`}
        className={`inline-block mt-5 px-8 py-2 rounded-[30px] border  font-niladri sm:text-lg  ${
          darkMode
            ? "text-white border-white hover:bg-white hover:text-primary-blue duration-300"
            : "text-primary-blue border-primary-blue hover:bg-primary-blue hover:border-primary-blue hover:text-white duration-300"
        }`}
      >
        পড়ুন
      </Link>
    </div>
  );
};

export default CategoryCardWithButton;
