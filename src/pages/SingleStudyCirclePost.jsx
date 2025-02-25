import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleStudyCircleQuery } from "../Redux/api/studyCircleApiSlice";
import { convertToBanglaDate } from "../utils/convertToBanglaDate";

const SingleStudyCirclePost = () => {
  const { studyCircleId } = useParams();
  const navigate = useNavigate();

  const { data: storyData, isLoading } = useGetSingleStudyCircleQuery(
    studyCircleId,
    {
      skip: !studyCircleId,
    }
  );

  if (!isLoading && !storyData) {
    navigate("/not-found", { replace: true });
  }

  const dateStr = storyData?.date;
  const [day, month, year] = dateStr?.split("/") || [];

  const date = new Date(year, month - 1, day);

  const banglaDate = convertToBanglaDate(new Date(date));

  return (
    <div className="pt-[200px]">
      <div className="max-width">
        <div className="flex items-center gap-2">
          <span
            className={`block px-5 py-1 rounded-[30px] text-white text-sm bg-alert-orange`}
          >
            পাঠচক্র
          </span>
          <span
            className={`block px-5 py-1 rounded-[30px] text-white text-sm bg-alert-green`}
          >
            {storyData?.session}
          </span>
        </div>
        <div className="flex items-center gap-2 text-accent-golden mt-5 mb-3">
          <span>{storyData?.authorId?.fullName}</span>
          <span className="size-2 rounded-full bg-accent-golden shrink-0 block"></span>
          <span>
            {storyData?.createdAt
              ? banglaDate
              : convertToBanglaDate(new Date())}
          </span>
        </div>
        <h1 className="text-xl md:text-3xl lg:text-[60px] lg:leading-[80px] font-niladri text-primary-blue">
          {storyData?.title}
        </h1>
        <img
          src={storyData?.thumbnail?.url}
          alt="Blog Thumbnail"
          className="block w-full rounded-[30px] object-cover my-10"
        />
        <div className="mb-10 text-justify sm:text-start px-4 sm:px-0">
          {storyData?.description}
        </div>
      </div>
      {/* author details section */}
      <div className="bg-[#F1F8FF] py-[50px] w-[calc(100%_+_20px)] sm:w-[calc(100%_+_60px)] -ml-[10px] sm:-ml-[30px] px-[30px]">
        <div className="max-width">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-10">
            <img
              src={storyData?.author?.avatar?.url}
              alt="Author Image"
              className="mx-auto sm:ml-0 w-full sm:w-[220px] object-cover rounded-[20px] shrink-0"
            />
            <div className="grow">
              <h1 className="text-lg sm:text-2xl font-niladri text-primary-blue mb-3">
                {storyData?.author?.fullName}
              </h1>
              <p>{storyData?.author?.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-width"> */}
      {/* recent posts section */}
      {/* {relatedStories && relatedStories?.length > 0 && (
          <div className="mt-[60px] sm:mt-20">
            <h1 className=" text-lg sm:text-xl md:text-3xl font-niladri mb-5">
              আরো লেখা
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedStories?.map((story, i) => (
                <CategoryCard
                  key={i}
                  categoryName={story?.category?.name}
                  categorySlug={story?.category?.slug}
                  date={
                    story?.createdAt ? new Date(story?.createdAt) : new Date()
                  }
                  desc={story?.shortDescription}
                  genreType={story?.genre?.name}
                  genreSlug={story?.genre?.slug}
                  thumbnail={story?.thumbnail?.url}
                  title={story?.title}
                  writer={story?.author?.fullName}
                  link={story?._id}
                />
              ))}
            </div>
          </div>
        )} */}
      {/* </div> */}
    </div>
  );
};

export default SingleStudyCirclePost;
