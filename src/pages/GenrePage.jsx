import React, { useState } from "react";
import { useParams } from "react-router-dom";
import onubadCardBgImage from "../assets/images/onubadCardBgImage.png";
import CategoryCard from "../components/Cards/CategoryCard";
import CategoryCardWithButton from "../components/Cards/CategoryCardWithButton";
import TranslateCard from "../components/Cards/TranslateCard";
import Pagination from "../components/Pagination";
import {
  useFetchStoriesQuery,
  useGetMostReadStoriesQuery,
} from "../Redux/api/storyApiSlice";

// genre bg image imports
import articleBgImage from "../assets/images/genre-bg-images/article.png";
import notesBgImage from "../assets/images/genre-bg-images/notes.png";
import translateBgImage from "../assets/images/genre-bg-images/translate.png";
import MostReadCardSkeleton from "../components/skeleton/MostReadCardSkeleton";
import StoryCardSkeleton from "../components/skeleton/StoryCardSkeleton";

const GenrePage = () => {
  const { genreSlug } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const { data: response, isLoading } = useFetchStoriesQuery(
    {
      genre: genreSlug,
      page: Number(currentPage) || 1,
    },
    {
      skip: !genreSlug,
    }
  );

  const { data: mostReadPosts, isLoading: isMostReadLoading } =
    useGetMostReadStoriesQuery(
      {
        genre: genreSlug,
      },
      { skip: !genreSlug }
    );

  const { data: stories, meta } = response || {};
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const translateCardData = {
    bgImage: onubadCardBgImage,
    title: "অনুবাদ",
    desc: `"নেহাজ করে জানতে হয়"। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল, যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়।`,
    link: "",
  };

  const genreBgColor =
    genreSlug === "article"
      ? "bg-probondho"
      : genreSlug === "notes"
      ? "bg-notes"
      : "bg-onubadh";

  const genreBgImage =
    genreSlug === "article"
      ? articleBgImage
      : genreSlug === "notes"
      ? notesBgImage
      : genreSlug === "translate"
      ? translateBgImage
      : articleBgImage;

  return (
    <>
      <div
        className="h-[500px] sm:h-[600px] lg:h-[1000px] object-center object-cover shadow-sm rounded-[30px]"
        style={{ backgroundImage: `url(${genreBgImage})` }}
      ></div>
      {/* অনুবাদ card section */}
      {translateCardData && (
        <div className="my-[60px] sm:my-[100px]">
          <TranslateCard
            bgImage={translateCardData?.bgImage}
            title={translateCardData?.title}
            desc={translateCardData?.desc}
            link={translateCardData?.link}
          />
        </div>
      )}
      {/* সর্বাধিক পঠিত section */}
      <div
        className={`py-10 sm:py-20 px-4 rounded-[30px] text-white ${genreBgColor}`}
      >
        <div className="max-width">
          <h2 className="text-center text-lg font-niladri">সর্বাধিক পঠিত</h2>
          <p className="text-center w-full md:w-3/4 mx-auto sm:text-lg mt-5 mb-10">
            নেহাজে প্রকাশিত চিন্তা বিষয়ক প্রবন্ধ, অনুবাদসমূহ থেইকা সবচে’ বেশীবার
            পঠিত লেখাগুলা আপনি পড়তে পারে এইখান থেকে। এই আ‍র্কাইভ প্রতি মাসের
            পরিসংখ্যানের উপর নির্ভর করে রিশাফল হইবে।
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px]">
            {isMostReadLoading ? (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <MostReadCardSkeleton key={index} />
                ))}
              </>
            ) : (
              mostReadPosts?.map((item, i) => (
                <CategoryCardWithButton
                  key={i}
                  thumbnail={item?.thumbnail?.url}
                  title={item?.title}
                  desc={item?.shortDescription}
                  link={item?._id}
                  categoryName={item?.category?.name}
                  genreType={item?.genre?.name}
                />
              ))
            )}
          </div>
        </div>
      </div>
      {/* সমস্ত লেখা section */}
      <div className="my-[60px] sm:my-[100px] max-width">
        <div className="flex items-baseline gap-5 mb-10">
          <h1 className="font-niladri text-primary-blue text-2xl shrink-0">
            সমস্ত লেখা
          </h1>
          <span className="block sm:hidden grow shrink h-px bg-primary-blue"></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-10">
          {isLoading ? (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <StoryCardSkeleton key={index} />
              ))}
            </>
          ) : (
            stories?.map((item, i) => (
              <CategoryCard
                key={i}
                categoryName={item?.category?.name}
                categorySlug={item?.category?.slug}
                date={item?.createdAt}
                desc={item?.shortDescription}
                genreType={item?.genre?.name}
                genreSlug={item?.genre?.slug}
                thumbnail={item?.thumbnail?.url}
                title={item?.title}
                writer={item?.authorId?.fullName}
                link={`${item?._id}`}
              />
            ))
          )}
        </div>
        <hr className="bg-[#EAECF0] mb-5 mt-10" />
        {!isLoading && (
          <Pagination
            currentPage={currentPage}
            totalPages={Number(meta?.totalPages) || 0}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default GenrePage;
