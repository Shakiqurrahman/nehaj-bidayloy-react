import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchQuotesQuery } from "../Redux/api/quotesApiSlice";
import {
  useFetchStoriesQuery,
  useGetMostReadStoriesQuery,
} from "../Redux/api/storyApiSlice";
import onubadCardBgImage from "../assets/images/onubadCardBgImage.png";
import CategoryCard from "../components/Cards/CategoryCard";
import Pagination from "../components/Pagination";

// category bg image imports
import Slider from "react-slick";
import artBgImage from "../assets/images/category-bg-images/art.png";
import cinemaBgImage from "../assets/images/category-bg-images/cinema.png";
import historyBgImage from "../assets/images/category-bg-images/history.png";
import literaryBgImage from "../assets/images/category-bg-images/literary.png";
import theologyBgImage from "../assets/images/category-bg-images/theology.png";
import thoughtBgImage from "../assets/images/category-bg-images/thought.png";
import CategoryCardWithButton from "../components/Cards/CategoryCardWithButton";
import TranslateCard from "../components/Cards/TranslateCard";
import MostReadCardSkeleton from "../components/skeleton/MostReadCardSkeleton";
import StoryCardSkeleton from "../components/skeleton/StoryCardSkeleton";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { data: response, isLoading } = useFetchStoriesQuery(
    {
      category: categorySlug,
      page: Number(currentPage) || 1,
    },
    {
      skip: !categorySlug,
    }
  );
  const { data: quotesResponse, isLoading: isQuotesLoading } =
    useFetchQuotesQuery(
      {
        category: categorySlug,
      },
      { skip: !categorySlug }
    );

  const { data: mostReadPosts, isLoading: isMostReadLoading } =
    useGetMostReadStoriesQuery(
      {
        category: categorySlug,
      },
      { skip: !categorySlug }
    );

  const { data: stories, meta } = response || {};
  const { quotes, categoryInfo } = quotesResponse || {};

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const translateCardData = {
    bgImage: onubadCardBgImage,
    title: "অনুবাদ",
    desc: `"নেহাজ করে জানতে হয়"। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল, যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়।`,
    link: "",
  };

  const settings = {
    dots: true,
    infinite: quotes?.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "quotes-slider",
    autoplay: true,
  };

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

  const categoryBgImage =
    categorySlug === "thought"
      ? thoughtBgImage
      : categorySlug === "history"
      ? historyBgImage
      : categorySlug === "literary"
      ? literaryBgImage
      : categorySlug === "art"
      ? artBgImage
      : categorySlug === "cinema"
      ? cinemaBgImage
      : categorySlug === "theology"
      ? theologyBgImage
      : thoughtBgImage;

  return (
    <>
      <div
        className="h-[500px] sm:h-[600px] lg:h-[1000px] bg-cover bg-center shadow-sm rounded-[30px]"
        style={{ backgroundImage: `url(${categoryBgImage})` }}
      ></div>

      {/* category quotes section */}
      <div className="max-width my-[60px] sm:my-[100px]">
        {isQuotesLoading ? (
          <h2 className="bg-gray-300 h-8 mx-auto w-[100px] rounded-lg mb-4"></h2>
        ) : (
          <h2 className="text-lg lg:text-3xl font-niladri text-center text-primary-blue mb-2">
            {categoryInfo?.category}
          </h2>
        )}
        {isQuotesLoading ? (
          <h1 className="bg-gray-300 h-8 mx-auto w-[250px] rounded-lg mb-10"></h1>
        ) : (
          <h1 className="lg:w-[70%] mx-auto text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[60px] xl:text-[60px] xl:leading-[80px] font-niladri mb-10">
            {categoryInfo?.title}
          </h1>
        )}
        <div className="mt-10">
          <Slider {...settings}>
            {isQuotesLoading ? (
              <>
                <div className="animate-pulse">
                  <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <div className="w-full lg:w-1/2 shrink-0">
                      <div className="size-full bg-gray-300 rounded-[30px]"></div>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-[30px] text-center sm:text-start sm:border border-primary-blue p-6 sm:p-10 md:p-20 font-mainak-signature sm:text-lg md:text-2xl">
                      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3 sm:mb-10"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              quotes?.map((item, i) => (
                <div key={i}>
                  <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <div className="w-full lg:w-1/2 shrink-0">
                      <img
                        src={item?.thumbnail?.url}
                        alt=""
                        className="size-full object-cover rounded-[30px]"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 rounded-[30px] text-center sm:text-start sm:border border-primary-blue p-6 sm:p-10 md:p-20 font-mainak-signature sm:text-lg md:text-2xl">
                      <p className="leading-[2] mb-3 sm:mb-10">
                        {item?.quotes}
                      </p>
                      <h1 className="text-primary-blue">{item?.authorName}</h1>
                    </div>
                  </div>
                </div>
              ))
            )}
          </Slider>
        </div>
      </div>

      <div
        className={quotes?.length > 0 ? "" : "mt-[60px] sm:mt-[100px]"}
      ></div>

      {/* সর্বাধিক পঠিত section */}
      <div
        className={`py-10 md:py-20 rounded-[30px] text-white px-4 ${categoryBgColor}`}
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
        {!isLoading && meta?.totalPages > 1 && (
          <>
            <hr className="bg-[#EAECF0] mb-5 mt-10" />
            <Pagination
              currentPage={currentPage}
              totalPages={Number(meta?.totalPages) || 0}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>

      {/* অনুবাদ card section */}
      {translateCardData && (
        <div>
          <TranslateCard
            bgImage={translateCardData?.bgImage}
            title={translateCardData?.title}
            desc={translateCardData?.desc}
            link={translateCardData?.link}
          />
        </div>
      )}
    </>
  );
};

export default CategoryPage;
