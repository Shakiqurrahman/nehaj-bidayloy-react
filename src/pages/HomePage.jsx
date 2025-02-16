import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import onubadCardBgImage from "../assets/images/onubadCardBgImage.png";
import CategoryCardWithButton from "../components/Cards/CategoryCardWithButton";
import HomeCategoryCard from "../components/Cards/HomeCategoryCard";
import HomeSinglePostCard from "../components/Cards/HomeSinglePostCard";
import TranslateCard from "../components/Cards/TranslateCard";
import RecentEventBanner from "../components/RecentEventBanner";
import Hero from "../components/shared/Header/Hero";
import {
  useGetCategoriesForHomePageQuery,
  useGetCategorySliderQuery,
} from "../Redux/api/categoryApiSlice";
import { useGetRandomQuotesQuery } from "../Redux/api/quotesApiSlice";
import {
  useGetFeaturedStoryQuery,
  useGetSelectedStoriesByCategoryQuery,
} from "../Redux/api/storyApiSlice";

const HomePage = () => {
  const { data: randomQuotes } = useGetRandomQuotesQuery();
  const { data: categorySliderData } = useGetCategorySliderQuery();
  const { data: featuredStoryData } = useGetFeaturedStoryQuery();
  const { data: categoryCardsData } = useGetCategoriesForHomePageQuery();
  const { data: thoughtCategoryStories } =
    useGetSelectedStoriesByCategoryQuery("thought");
  const { data: artCategoryStories } =
    useGetSelectedStoriesByCategoryQuery("art");

  const translateCardData = {
    bgImage: onubadCardBgImage,
    title: "অনুবাদ",
    desc: `"নেহাজ করে জানতে হয়"। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল, যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়।`,
    link: "",
  };

  const settings = {
    dots: categorySliderData?.length > 6 ? false : true,
    infinite: categorySliderData?.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "quotes-slider",
    autoplay: true,
  };

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Category Cards section */}
      {categoryCardsData && categoryCardsData?.length > 0 && (
        <div className="max-width my-[60px] sm:mt-[113px] sm:mb-[152px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-10 xl:gap-x-[70px] md:gap-y-[46px]">
            {categoryCardsData?.map((card, index) => (
              <HomeCategoryCard key={index} data={card} />
            ))}
          </div>
        </div>
      )}

      <div
        className={
          categoryCardsData?.length === 0 ? "" : "mt-[60px] sm:mt-[100px]"
        }
      ></div>

      {/* Single Category Post section */}
      {categorySliderData && categorySliderData?.length > 0 && (
        <div className="max-width mb-[60px] sm:mb-[240px]">
          <Slider {...settings}>
            {categorySliderData?.map((item, i) => (
              <div key={i}>
                <h2 className="text-lg lg:text-3xl font-niladri text-center text-primary-blue mb-2">
                  {item?.category?.id?.category}
                </h2>
                <h1 className="lg:w-[70%] mx-auto text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[60px] xl:text-[60px] xl:leading-[80px] font-niladri mb-10">
                  {item?.category?.id?.title}
                </h1>
                <HomeSinglePostCard storyData={item} />
              </div>
            ))}
          </Slider>
        </div>
      )}
      {/* সাম্প্রতিক পাঠচক্র section */}
      <RecentEventBanner
        title="সাম্প্রতিক পাঠচক্র"
        subTitle="নেহাজ প্রতি পাক্ষিকে একটা করে পাঠচক্রের আয়োজন করে। আগ্রহীগন
          পাঠচক্রের বিজ্ঞপ্তি মোতাবেক নেহাজের উক্ত পাঠচক্রে যুক্ত হইতে পারবেন।
          বিজ্ঞপ্তিতে ক্লিকের মাধ্যমে আপনি এক্টিভ সেশনের জুম লিংক-এ যেতে পারবে।"
      />
      {/* নির্বাচিত লেখা section */}
      {featuredStoryData && featuredStoryData?.length > 0 && (
        <div className="max-width">
          <h2 className="text-center text-primary-blue text-lg lg:text-2xl font-niladri mb-2">
            নির্বাচিত লেখা
          </h2>
          <h1 className="text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[60px] xl:text-[60px] xl:leading-[80px] font-niladri">
            যে কোন বিষয়বস্তু থেইকা ছাইকা বের কইরা নেয়া যায়, গুরুত্বপূর্ণ
            কনটেক্স। কোনটাই ফেলনা না
          </h1>
          {featuredStoryData?.map((item, i) => (
            <div
              key={i}
              className="flex items-center flex-wrap sm:flex-nowrap gap-5 md:gap-[60px] py-5 md:py-16 border-b-2 border-primary-blue"
            >
              <img
                src={item?.thumbnail?.url}
                alt="nirbachito-lekha"
                className="w-full sm:w-[45%] shrink-0 rounded-lg object-cover h-[250px]"
              />
              <div className="w-full sm:w-[55%] flex items-center justify-between gap-5">
                <div>
                  <h2 className="text-primary-blue text-lg lg:text-3xl font-medium">
                    {item?.authorId?.fullName}
                  </h2>
                  <h2 className="text-2xl lg:text-4xl font-semibold my-3">
                    {item?.title}
                  </h2>
                  <p className="line-clamp-3">{item?.shortDescription}</p>
                </div>
                <Link
                  to={`/story/${item?._id}`}
                  className="shrink-0 size-10 rounded-full border-2 border-black flex items-center justify-center text-xl"
                >
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* চিন্তা category posts block section */}
      {thoughtCategoryStories && thoughtCategoryStories?.length > 0 && (
        <div className="max-width py-[100px]">
          <h2 className="text-center text-primary-blue text-lg lg:text-2xl mb-2 font-niladri">
            চিন্তা
          </h2>
          <h1 className="text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[60px] xl:text-[60px] xl:leading-[80px] font-niladri">
            শিল্পের গেরুয়া বসনগুলা খুইলা ফেল, <br className="hidden lg:block" />
            শিল্পের মুখ থেকে জবান খুইতেছে
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-12 mt-10">
            {thoughtCategoryStories?.map((item, i) => (
              <CategoryCardWithButton
                key={i}
                thumbnail={item?.thumbnail?.url}
                title={item?.title}
                desc={item?.shortDescription}
                link={item?._id}
                darkMode={false}
              />
            ))}
          </div>
        </div>
      )}

      <div
        className={thoughtCategoryStories?.length > 0 ? "" : "mt-[100px]"}
      ></div>

      {/* অনুবাদ card section */}
      {translateCardData && (
        <div className="max-width">
          <TranslateCard
            bgImage={translateCardData?.bgImage}
            title={translateCardData?.title}
            desc={translateCardData?.desc}
            link={translateCardData?.link}
          />
        </div>
      )}

      {/* শিল্প category posts block section */}
      {artCategoryStories && artCategoryStories?.length > 0 && (
        <div className="max-width py-[60px] sm:py-[100px]">
          <h2 className="text-center text-primary-blue text-lg lg:text-2xl mb-2 font-niladri">
            শিল্প
          </h2>
          <h1 className="text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[60px] xl:text-[60px] xl:leading-[80px] font-niladri">
            শিল্পের গেরুয়া বসনগুলা খুইলা ফেল, <br className="hidden lg:block" />
            শিল্পের মুখ থেকে জবান খুইতেছে
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 xl:gap-12 mt-10">
            {artCategoryStories?.map((item, i) => (
              <CategoryCardWithButton
                key={i}
                thumbnail={item?.thumbnail?.url}
                title={item?.title}
                desc={item?.shortDescription}
                link={item?._id}
                darkMode={false}
              />
            ))}
          </div>
        </div>
      )}

      <div
        className={
          artCategoryStories?.length > 0 ? "" : "mt-[60px] sm:mt-[100px]"
        }
      ></div>

      {/* quotes section */}
      {randomQuotes && randomQuotes?.length > 0 && (
        <div className="rounded-[30px] overflow-hidden">
          <Slider {...settings}>
            {randomQuotes?.map((quote, i) => (
              <div key={i}>
                <div
                  className="rounded-[30px] text-white pt-10 pb-20 text-center px-5 sm:px-[100px] bg-cover"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,46,93,0.6), rgba(0,46,93,0.6)), url(${quote?.thumbnail?.url})`,
                  }}
                >
                  <div className="max-width font-mainak-signature text-lg md:text-2xl">
                    <img
                      src={quote?.authorImage?.url}
                      alt=""
                      className="block size-[100px] rounded-full mx-auto object-cover"
                    />
                    <p className="line-clamp-4 my-10 leading-[2]">
                      {quote?.quotes}
                    </p>
                    <h1>{quote?.authorName}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
};

export default HomePage;
