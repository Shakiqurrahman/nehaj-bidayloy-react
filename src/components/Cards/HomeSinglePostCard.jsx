import React from "react";
import { Link } from "react-router-dom";

const HomeSinglePostCard = ({ storyData }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-5">
      <div className="w-full md:w-1/2 xl:w-[60%]">
        <img
          src={storyData?.thumbnail?.url}
          alt="Post Thumbnail"
          className="size-full object-cover object-center rounded-[30px]"
        />
      </div>
      <div className="w-full md:w-1/2 xl:w-[40%] shrink-0 border border-primary-blue rounded-[30px] py-10 px-5 sm:p-[60px]">
        <h1 className="text-xl sm:text-3xl font-niladri text-secondary-charcoal-gray">
          {storyData?.title}
        </h1>
        <p className="mt-[26px] mb-[40px]">{storyData?.shortDescription}</p>
        <Link
          to={`/story/${storyData?._id}`}
          className="w-full sm:w-[180px] h-[50px] flex items-center justify-center p-[6px] sm:p-[10px] rounded-[100px] border border-primary-blue text-primary-blue text-base sm:text-lg hover:bg-primary-blue hover:text-white duration-300 font-niladri"
        >
          পড়ুন
        </Link>
      </div>
    </div>
  );
};

export default HomeSinglePostCard;
