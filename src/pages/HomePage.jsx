import React from "react";
import HomeCategoryCard from "../components/Cards/HomeCategoryCard";
import HomeSinglePostCard from "../components/Cards/HomeSinglePostCard";
import Hero from "../components/shared/Header/Hero";

import patcokroCard1 from "../assets/images/patchokro-cards/patcokro-card-1.png";
import patcokroCard2 from "../assets/images/patchokro-cards/patcokro-card-2.png";
import patcokroCard3 from "../assets/images/patchokro-cards/patcokro-card-3.png";

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
      <div className="bg-primary-blue rounded-[40px] pt-[70px] pb-[100px] mb-[120px]">
        <div className="max-width text-white">
          <h2 className="text-xl font-niladri text-center">
            সাম্প্রতিক পাঠচক্র
          </h2>
          <p className="text-lg w-[70%] mx-auto mb-[60px] mt-5 text-center">
            নেহাজ প্রতি পাক্ষিকে একটা করে পাঠচক্রের আয়োজন করে। আগ্রহীগন
            পাঠচক্রের বিজ্ঞপ্তি মোতাবেক নেহাজের উক্ত পাঠচক্রে যুক্ত হইতে
            পারবেন। বিজ্ঞপ্তিতে ক্লিকের মাধ্যমে আপনি এক্টিভ সেশনের জুম লিংক-এ
            যেতে পারবে।
          </p>
          <div className="grid gap-5 grid-cols-3">
            <img
              src={patcokroCard1}
              alt="Patcokro Card Image"
              className="w-full rounded-[50px] block"
            />
            <img
              src={patcokroCard2}
              alt="Patcokro Card Image"
              className="w-full rounded-[50px] block"
            />
            <img
              src={patcokroCard3}
              alt="Patcokro Card Image"
              className="w-full rounded-[50px] block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
