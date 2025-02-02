import React from "react";
import Slider from "react-slick";
import CardthumbnailImg from "../assets/images/Cardthumbnail.png";
import cardThumbnail from "../assets/images/cardImg.png";
import categoryImg from "../assets/images/categoryImg.png";
import onubadCardBgImage from "../assets/images/onubadCardBgImage.png";
import quotesImg from "../assets/images/quotesImg.png";
import CategoryCard from "../components/Cards/CategoryCard";
import CategoryCardWithButton from "../components/Cards/CategoryCardWithButton";
import TranslateCard from "../components/Cards/TranslateCard";

const CategoryPage = () => {
  const quotesArray = [
    {
      thumbnail: quotesImg,
      text: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
      writer: "এরিস্টট",
    },
    {
      thumbnail: quotesImg,
      text: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
      writer: "এরিস্টট",
    },
    {
      thumbnail: quotesImg,
      text: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
      writer: "এরিস্টট",
    },
    {
      thumbnail: quotesImg,
      text: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
      writer: "এরিস্টট",
    },
    {
      thumbnail: quotesImg,
      text: `নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।`,
      writer: "এরিস্টট",
    },
  ];

  const mostReadPosts = [
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
  ];

  const allPosts = [
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "অনুবাদ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "অনুবাদ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "অনুবাদ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "নোটস",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "অনুবাদ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
  ];

  const translateCardData = {
    bgImage: onubadCardBgImage,
    title: "অনুবাদ",
    desc: `"নেহাজ করে জানতে হয়"। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল, যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়।`,
    link: "",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "quotes-slider",
    autoplay: true,
  };

  const categoryBgColor = "#002e5d";

  return (
    <>
      <div
        className="h-[500px] sm:h-[600px] lg:h-[1000px] object-cover object-center shadow-sm rounded-[30px]"
        style={{ backgroundImage: `url(${categoryImg})` }}
      ></div>

      {/* category quotes section */}
      <div className="max-width my-[60px] sm:my-[100px]">
        <h2 className="text-lg lg:text-3xl font-niladri text-center text-primary-blue mb-2">
          চিন্তা
        </h2>
        <h1 className="lg:w-[70%] mx-auto text-center text-2xl md:text-3xl lg:text-[40px] lg:leading-[60px] xl:text-[60px] xl:leading-[80px] font-niladri mb-10">
          চিন্তার দৈন্যদশা থেইকা আমাদের মুক্তির সংগ্রাম বুদ্ধিবৃত্তিক, কায়িক না
        </h1>
        <div className="mt-10">
          <Slider {...settings}>
            {quotesArray?.map((item, i) => (
              <div key={i}>
                <div className="flex flex-wrap lg:flex-nowrap gap-5">
                  <div className="w-full lg:w-1/2 shrink-0">
                    <img
                      src={item?.thumbnail}
                      alt=""
                      className="size-full object-cover rounded-[30px]"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 rounded-[30px] border border-primary-blue p-6 sm:p-10 md:p-20 font-mainak-signature sm:text-lg md:text-2xl">
                    <p className="leading-[2] mb-10">{item?.text}</p>
                    <h1 className="text-primary-blue">{item?.writer}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* সর্বাধিক পঠিত section */}
      <div
        className={`py-10 md:py-20 rounded-[30px] text-white px-4`}
        style={{ backgroundColor: `${categoryBgColor}` }}
      >
        <div className="max-width">
          <h2 className="text-center text-lg font-niladri">সর্বাধিক পঠিত</h2>
          <p className="text-center w-full md:w-3/4 mx-auto sm:text-lg mt-5 mb-10">
            নেহাজে প্রকাশিত চিন্তা বিষয়ক প্রবন্ধ, অনুবাদসমূহ থেইকা সবচে’ বেশীবার
            পঠিত লেখাগুলা আপনি পড়তে পারে এইখান থেকে। এই আ‍র্কাইভ প্রতি মাসের
            পরিসংখ্যানের উপর নির্ভর করে রিশাফল হইবে।
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px]">
            {mostReadPosts?.map((item, i) => (
              <CategoryCardWithButton
                key={i}
                thumbnail={item?.thumbnail}
                title={item?.title}
                desc={item?.desc}
                link={item?.link}
                categoryName={item?.categoryName}
                genreType={item?.genreType}
              />
            ))}
          </div>
        </div>
      </div>

      {/* সমস্ত লেখা section */}
      <div className="my-[60px] sm:my-[100px] max-width">
        <div className="flex items-center gap-5 mb-10">
          <h1 className="font-niladri text-primary-blue text-2xl shrink-0">
            সমস্ত লেখা
          </h1>
          <span className="block grow shrink h-px bg-primary-blue"></span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-10">
          {allPosts?.map((item, i) => (
            <CategoryCard
              key={i}
              categoryName={item?.categoryName}
              date={item?.date}
              desc={item?.desc}
              genreType={item?.genreType}
              thumbnail={item?.thumbnail}
              title={item?.title}
              writer={item?.writer}
              link={item?.link}
            />
          ))}
        </div>
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
