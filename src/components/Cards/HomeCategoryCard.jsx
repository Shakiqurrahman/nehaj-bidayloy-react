import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { convertToBengali } from "../../utils/convertToBengali";

const HomeCategoryCard = ({ data }) => {
  return (
    <>
      <div className="pt-[35px] px-[35px] pb-[64px] bg-primary-dark text-white rounded-[30px] sm:block hidden">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-niladri">{data?.category}</h1>
          <Link
            to={`/category/${data?.categorySlug}`}
            className="flex items-center justify-center bg-white size-10 rounded-full text-primary-dark hover:bg-alert-orange hover:text-white duration-300"
          >
            <BsArrowUpRight className="text-xl" />
          </Link>
        </div>
        <ul className="flex items-center gap-1 xl:gap-4 mt-[40px] mb-[10px] text-secondary-gray font-medium text-sm xl:text-base">
          {data?.genres?.map((genre, i) => (
            <li key={i} className="shrink-0">
              {convertToBengali(genre?.totalStories)} {genre?.genreName}
            </li>
          ))}
        </ul>
        <p className="leading-[1.6]">{data?.description}</p>
      </div>
      <div className="p-6 bg-primary-dark text-white rounded-[30px] flex items-center justify-between sm:hidden">
        <div>
          <h1 className="text-3xl font-niladri">{data?.category}</h1>
          <ul className="flex items-center gap-1 xl:gap-4 mt-[10px] text-secondary-gray font-medium text-sm xl:text-base">
            {data?.genres?.map((genre, i) => (
              <li key={i} className="shrink-0">
                {convertToBengali(genre?.totalStories)} {genre?.genreName}
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={`/category/${data?.categorySlug}`}
          className="flex items-center justify-center bg-white size-10 rounded-full text-primary-dark hover:bg-alert-orange hover:text-white duration-300"
        >
          <BsArrowUpRight className="text-xl" />
        </Link>
      </div>
    </>
  );
};

export default HomeCategoryCard;
