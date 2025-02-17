import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleStoryQuery } from "../Redux/api/storyApiSlice";
import commentAvatar from "../assets/images/commentAvatar.png";
import CategoryCard from "../components/Cards/CategoryCard";
import { CommentForm } from "../components/CommentForm";
import { convertToBanglaDate } from "../utils/convertToBanglaDate";
import { markStoryAsRead } from "../utils/markAsReadStory";

const SingleBlogPost = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const { data: storyDataObj, isLoading } = useGetSingleStoryQuery(storyId, {
    skip: storyId,
  });

  const [storyData, setStoryData] = useState({});
  const [relatedStories, setRelatedStories] = useState([]);
  const [comments, setComments] = useState([]);
  console.log(storyData, relatedStories, comments);

  useEffect(() => {
    if (storyDataObj) {
      setStoryData(storyDataObj?.story);
      setRelatedStories(storyDataObj?.relatedStories);
      setComments(storyDataObj?.story?.comments || []);
    }
  }, [storyDataObj]);

  useEffect(() => {
    if (storyId) {
      markStoryAsRead(storyId);
    }
  }, [storyId]);

  // Category Bg Color
  const categorySlug = storyData?.category?.slug;
  const categoryBgColor =
    categorySlug === "thought"
      ? "bg-primary-blue"
      : categorySlug === "history"
      ? "bg-history"
      : categorySlug === "literary"
      ? "bg-sahitto"
      : categorySlug === "art"
      ? "bg-arts"
      : categorySlug === "cinema"
      ? "bg-cinema"
      : categorySlug === "theology"
      ? "bg-dhormo-tottho"
      : "bg-primary-blue";

  // Genre Bg Color
  const genreSlug = storyData?.genre?.slug;
  const genreBgColor =
    genreSlug === "article"
      ? "bg-probondho"
      : genreSlug === "notes"
      ? "bg-notes"
      : genreSlug === "translate"
      ? "bg-onubadh"
      : "bg-primary-blue";

  if (!isLoading && !storyDataObj) {
    navigate("/not-found", { replace: true });
  }

  return (
    <div className="pt-[200px]">
      <div className="max-width">
        <div className="flex items-center gap-2">
          <span
            className={`block px-5 py-1 rounded-[30px] text-white text-sm ${categoryBgColor}`}
          >
            {storyData?.category?.name}
          </span>
          <span
            className={`block px-5 py-1 rounded-[30px] text-white text-sm ${genreBgColor}`}
          >
            {storyData?.genre?.name}
          </span>
        </div>
        <div className="flex items-center gap-2 text-accent-golden mt-5 mb-3">
          <span>{storyData?.authorId?.fullName}</span>
          <span className="size-2 rounded-full bg-accent-golden shrink-0 block"></span>
          <span>
            {storyData?.createdAt
              ? convertToBanglaDate(new Date(storyData?.createdAt))
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
      </div>
      {/* author details section */}
      <div className="bg-[#F1F8FF] py-[50px] w-[calc(100%_+_20px)] sm:w-[calc(100%_+_60px)] -ml-[10px] sm:-ml-[30px] px-[10px] sm:px-[30px]">
        <div className="max-width">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-10">
            <img
              src={storyData?.authorId?.avatar?.url}
              alt="Author Image"
              className="mx-auto sm:ml-0 w-[220px] object-cover rounded-[20px] shrink-0"
            />
            <div className="grow">
              <h1 className="text-center sm:text-left text-lg sm:text-2xl font-niladri text-primary-blue mb-3">
                {storyData?.authorId?.fullName}
              </h1>
              <p>{storyData?.authorId?.bio}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-width">
        {/* all comments section */}
        {comments && comments?.length > 0 && (
          <div className="my-[60px] sm:my-20">
            <div>
              <h1 className="text-2xl font-niladri text-primary-blue">
                সাম্প্রতিক মন্তব্যসমূহ
              </h1>
              <span className="block w-full h-px mt-3 bg-primary-blue"></span>
            </div>
            {comments?.map((comment, i) => (
              <div key={i} className="mt-5">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-10 p-4 sm:p-[10px] rounded-[20px] border border-dark-grey">
                  <img
                    src={commentAvatar}
                    alt="Comment Avatar"
                    className="sm:ml-0 mx-auto w-[110px] object-cover rounded-[15px]"
                  />
                  <div className="sm:pr-10 md:pr-[100px] grow">
                    <h1 className="text-primary-blue text-lg sm:text-xl mb-2">
                      {comment?.name}
                    </h1>
                    <p>{comment?.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* comment box section */}
        <div
          className={
            !comments || comments?.length === 0 ? "mt-[60px] sm:mt-20" : ""
          }
        >
          <CommentForm storyId={storyData?._id} />
        </div>

        {/* recent posts section */}
        {relatedStories && relatedStories?.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default SingleBlogPost;
