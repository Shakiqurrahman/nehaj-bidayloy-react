import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import articlesBgImage from "../assets/images/articlesBgImage.png";
import articlesThumbnail from "../assets/images/articlesThumbnail.png";
import cardThumbnail from "../assets/images/cardImg.png";
import nirbachitoImg from "../assets/images/nirbachito-lekha.png";
import onubadCardBgImage from "../assets/images/onubadCardBgImage.png";
import CategoryCardWithButton from "../components/Cards/CategoryCardWithButton";
import HomeCategoryCard from "../components/Cards/HomeCategoryCard";
import HomeSinglePostCard from "../components/Cards/HomeSinglePostCard";
import TranslateCard from "../components/Cards/TranslateCard";
import RecentEventBanner from "../components/RecentEventBanner";
import Hero from "../components/shared/Header/Hero";

const HomePage = () => {
  const categoryCardsData = [
    {
      name: "চিন্তা",
      slug: "thought",
      article: "১",
      translation: "১",
      notes: "১",
      desc: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা, অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
    },
    {
      name: "ইতিহাস",
      slug: "history",
      article: "১",
      translation: "১",
      notes: "১",
      desc: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা, অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
    },
    {
      name: "সাহিত্য",
      slug: "literature",
      article: "১",
      translation: "১",
      notes: "১",
      desc: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা, অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
    },
    {
      name: "শিল্প",
      slug: "arts",
      article: "১",
      translation: "১",
      notes: "১",
      desc: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা, অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
    },
    {
      name: "সিনেমা",
      slug: "cinema",
      article: "১",
      translation: "১",
      notes: "১",
      desc: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা, অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
    },
    {
      name: "ধর্মতত্ত্ব",
      slug: "theology",
      article: "১",
      translation: "১",
      notes: "১",
      desc: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা, অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
    },
  ];
  const cardsData = [
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
    },
  ];

  const translateCardData = {
    bgImage: onubadCardBgImage,
    title: "অনুবাদ",
    desc: `"নেহাজ করে জানতে হয়"। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল, যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়।`,
    link: "",
  };

  const articlesArray = [
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "articles-slider",
    autoplay: true,
  };

  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Category Cards section */}
      <div className="max-width mt-[113px] mb-[152px]">
        <div className="grid grid-cols-3 gap-x-[70px] gap-y-[46px]">
          {categoryCardsData?.map((card, index) => (
            <HomeCategoryCard key={index} data={card} />
          ))}
        </div>
      </div>
      {/* Single Category Post section */}
      <div className="max-width mb-[240px]">
        <h2 className="text-3xl font-niladri text-center text-primary-blue">
          চিন্তা
        </h2>
        <h1 className="w-[70%] mx-auto text-[46px] font-niladri text-center mb-[76px]">
          চিন্তার দৈন্যদশা থেইকা আমাদের মুক্তির সংগ্রাম বুদ্ধিবৃত্তিক, কায়িক না
        </h1>
        <HomeSinglePostCard />
      </div>
      {/* সাম্প্রতিক পাঠচক্র section */}
      <RecentEventBanner
        title="সাম্প্রতিক পাঠচক্র"
        subTitle="নেহাজ প্রতি পাক্ষিকে একটা করে পাঠচক্রের আয়োজন করে। আগ্রহীগন
          পাঠচক্রের বিজ্ঞপ্তি মোতাবেক নেহাজের উক্ত পাঠচক্রে যুক্ত হইতে পারবেন।
          বিজ্ঞপ্তিতে ক্লিকের মাধ্যমে আপনি এক্টিভ সেশনের জুম লিংক-এ যেতে পারবে।"
      />
      {/* নির্বাচিত লেখা section */}
      <div className="max-width">
        <h2 className="text-center text-primary-blue text-2xl font-niladri">
          নির্বাচিত লেখা
        </h2>
        <h1 className="text-center text-[60px] font-niladri">
          যে কোন বিষয়বস্তু থেইকা ছাইকা বের কইরা নেয়া যায়, গুরুত্বপূর্ণ কনটেক্স।
          কোনটাই ফেলনা না
        </h1>
        {[1, 2, 3]?.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-[60px] py-16 border-b-2 border-primary-blue"
          >
            <img
              src={nirbachitoImg}
              alt="nirbachito-lekha"
              className="w-[45%] shrink-0 rounded-lg object-cover h-[250px]"
            />
            <div className="w-[55%] flex items-center gap-5">
              <div>
                <h2 className="text-primary-blue text-3xl font-medium">
                  শমসের আলী
                </h2>
                <h2 className="text-4xl font-semibold my-3">
                  গল্পের হাতুড়ি এবং নানাবিধ{" "}
                </h2>
                <p className="line-clamp-3">
                  নেহাজ শব্দের উৎস হইলো আরবি &quot;নাহাজ&quot;, যার থাকি মানহাজ
                  শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা
                  আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা,
                  সাধনা,অভিনিবেশের যে &quot;বিশেষ&quot; ধরণ লালন এইটারে নেহাজ
                  বলতেন।
                </p>
              </div>
              <Link
                to={""}
                className="shrink-0 size-10 rounded-full border-2 border-black flex items-center justify-center text-xl"
              >
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* চিন্তা category posts block section */}
      <div className="max-width py-[100px]">
        <h2 className="text-center text-primary-blue text-2xl font-niladri">
          চিন্তা
        </h2>
        <h1 className="text-center text-[60px] font-niladri">
          শিল্পের গেরুয়া বসনগুলা খুইলা ফেল, <br /> শিল্পের মুখ থেকে জবান খুইতেছে
        </h1>
        <div className="grid grid-cols-3 gap-12 mt-10">
          {cardsData?.map((item, i) => (
            <CategoryCardWithButton
              key={i}
              thumbnail={item?.thumbnail}
              title={item?.title}
              desc={item?.desc}
              link={item?.link}
              darkMode={false}
            />
          ))}
        </div>
      </div>

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
      <div className="max-width py-[100px]">
        <h2 className="text-center text-primary-blue text-2xl font-niladri">
          শিল্প
        </h2>
        <h1 className="text-center text-[60px] font-niladri">
          শিল্পের গেরুয়া বসনগুলা খুইলা ফেল, <br /> শিল্পের মুখ থেকে জবান খুইতেছে
        </h1>
        <div className="grid grid-cols-3 gap-12 mt-10">
          {cardsData?.map((item, i) => (
            <CategoryCardWithButton
              key={i}
              thumbnail={item?.thumbnail}
              title={item?.title}
              desc={item?.desc}
              link={item?.link}
              darkMode={false}
            />
          ))}
        </div>
      </div>

      {/* articles section */}
      <div className="rounded-[30px] overflow-hidden">
        <Slider {...settings}>
          {articlesArray?.map((item, i) => (
            <div key={i}>
              <div
                className="rounded-[30px] text-white pt-10 pb-20 text-center px-[100px]"
                style={{
                  backgroundImage: `url(${item?.bgImage}), linear-gradient(to right, rgba(0,46,93,0.6), rgba(0,46,93,0.6)`,
                }}
              >
                <div className="max-width font-mainak-signature text-2xl">
                  <img
                    src={item?.thumbnail}
                    alt=""
                    className="block size-[100px] rounded-full mx-auto"
                  />
                  <p className="line-clamp-4 my-10 leading-[2]">{item?.text}</p>
                  <h1>{item?.writer}</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomePage;
