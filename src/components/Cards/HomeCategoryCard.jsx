import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeCategoryCard = ({ data }) => {
  return (
    <div className="pt-[35px] px-[35px] pb-[64px] bg-primary-dark text-white rounded-[30px]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-niladri">{data?.name}</h1>
        <Link
          to={`/${data?.slug}`}
          className="flex items-center justify-center bg-white size-10 rounded-full text-primary-dark hover:bg-alert-orange hover:text-white duration-300"
        >
          <BsArrowUpRight className="text-xl" />
        </Link>
      </div>
      <ul className="flex items-center gap-1 xl:gap-4 mt-[40px] mb-[10px] text-secondary-gray font-medium text-sm xl:text-base">
        <li className="shrink-0">{data?.article} হাজার প্রবন্ধ</li>
        <li className="shrink-0">{data?.translation} হাজার অনুবাদ</li>
        <li className="shrink-0">{data?.notes} হাজার নোটস</li>
      </ul>
      <p className="leading-[1.6]">{data?.desc}</p>
    </div>
  );
};

export default HomeCategoryCard;
