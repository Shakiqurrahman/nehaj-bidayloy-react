import React from "react";
import authorImg from "../assets/images/Cardthumbnail.png";
import commentAvatar from "../assets/images/commentAvatar.png";
import Thumbnail from "../assets/images/singlepostthumbnail.png";
import CategoryCard from "../components/Cards/CategoryCard";
import { CommentForm } from "../components/CommentForm";
import { convertToBanglaDate } from "../utils/convertToBanglaDate";

const SingleBlogPost = () => {
  const comments = [
    {
      avatar: commentAvatar,
      writer: `আবুল হাকাম`,
      text: `সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।  আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।  আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন। `,
    },
    {
      avatar: commentAvatar,
      writer: `আবুল হাকাম`,
      text: `সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।  আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।  আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন। `,
    },
    {
      avatar: commentAvatar,
      writer: `আবুল হাকাম`,
      text: `সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।  আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন।  আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি "নাহাজ", যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে "বিশেষ" ধরণ লালন এইটারে নেহাজ বলতেন। `,
    },
  ];

  const recentPosts = [
    {
      thumbnail: authorImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "অনুবাদ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
    {
      thumbnail: authorImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "অনুবাদ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
    {
      thumbnail: authorImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "অনুবাদ",
      date: new Date(),
      writer: "আবুল খায়ের",
    },
  ];

  return (
    <div className="pt-[200px]">
      <div className="max-width">
        <div className="flex items-center gap-2">
          <span className="block px-5 py-1 rounded-[30px] bg-primary-blue text-white text-sm">
            ধর্মতত্ত্ব
          </span>
          <span className="block px-5 py-1 rounded-[30px] bg-onubadh text-white text-sm">
            অনুবাদ
          </span>
        </div>
        <div className="flex items-center gap-2 text-accent-golden mt-5 mb-3">
          <span>আবুল খায়ের</span>
          <span className="size-2 rounded-full bg-accent-golden shrink-0 block"></span>
          <span>{convertToBanglaDate(new Date())}</span>
        </div>
        <h1 className="text-[60px] font-niladri text-primary-blue">
          চিন্তার ভিতর ঘুমন্ত ঘুঘু এবং অন্যান্য ফুলের কথা
        </h1>
        <img
          src={Thumbnail}
          alt="Blog Thumbnail"
          className="block w-full rounded-[30px] object-cover my-10"
        />
      </div>
      {/* author details section */}
      <div className="bg-[#F1F8FF] py-[50px]">
        <div className="max-width">
          <div className="flex items-center gap-10">
            <img
              src={authorImg}
              alt="Author Image"
              className="w-[220px] object-cover rounded-[20px] shrink-0"
            />
            <div>
              <h1 className="text-2xl font-niladri text-primary-blue mb-3">
                আবুল হুকুম
              </h1>
              <p>
                আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি
                &quot;নাহাজ&quot;, যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা
                মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে
                পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে &quot;বিশেষ&quot;
                ধরণ লালন এইটারে নেহাজ বলতেন। আবুল হুকুম হলেন একজন গদ্য লেখক।
                নেহাজ শব্দের উৎস হইলো আরবি &quot;নাহাজ&quot;, যার থাকি মানহাজ
                শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা
                পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা,
                সাধনা,অভিনিবেশের যে &quot;বিশেষ&quot; ধরণ লালন এইটারে নেহাজ
                বলতেন। আবুল হুকুম হলেন একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো
                আরবি &quot;নাহাজ&quot;, যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি
                বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো
                সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে
                &quot;বিশেষ&quot; ধরণ লালন এইটারে নেহাজ বলতেন। আবুল হুকুম হলেন
                একজন গদ্য লেখক। নেহাজ শব্দের উৎস হইলো আরবি &quot;নাহাজ&quot;,
                যার থাকি মানহাজ শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের
                বরাতেই শব্দটা আমরা পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের
                লিপ্ততা, সাধনা,অভিনিবেশের যে &quot;বিশেষ&quot; ধরণ লালন এইটারে
                নেহাজ বলতেন।
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-width">
        {/* all comments section */}
        <div className="my-20">
          <div>
            <h1 className="text-2xl font-niladri text-primary-blue">
              সাম্প্রতিক মন্তব্যসমূহ
            </h1>
            <span className="block w-full h-px mt-3 bg-primary-blue"></span>
          </div>
          {comments?.map((item, i) => (
            <div key={i} className="mt-5">
              <div className="flex items-center gap-10 p-[10px] rounded-[20px] border border-dark-grey">
                <img
                  src={item?.avatar}
                  alt="Comment Avatar"
                  className="w-[110px] object-cover rounded-[15px]"
                />
                <div className="pr-[100px]">
                  <h1 className="text-primary-blue text-xl mb-2">
                    {item?.writer}
                  </h1>
                  <p>{item?.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* comment box section */}
        <CommentForm />

        {/* recent posts section */}
        <div className="mt-20">
          <h1 className="text-3xl font-niladri mb-5">আরো লেখা</h1>
          <div className="grid grid-cols-3 gap-8">
            {recentPosts?.map((item, i) => (
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
      </div>
    </div>
  );
};

export default SingleBlogPost;
