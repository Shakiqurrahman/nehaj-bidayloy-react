import React from "react";
import image1 from "../assets/images/about-us-logo.png";
import image2 from "../assets/images/Devil's love 1.png";

const AboutUs = () => {
  return (
    <section className="pt-[200px] sm:pb-[70px]">
      <div className="max-width">
        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-5">
          <div className="w-full rounded-2xl">
            <img src={image1} alt="Logo" className="rounded-2xl" />
          </div>
          <div className="w-full rounded-2xl">
            <img src={image2} alt="Eagle" className="rounded-2xl" />
          </div>
        </div>

        <div className="border border-primary-blue px-4 py-8  sm:p-10 md:pt-[100px] md:px-[110px] md:pb-[50px] rounded-[30px]  text-primary-blue mt-6">
          <div className="space-y-5 mb-[50px]">
            <h1 className="font-niladri text-lg sm:text-[22px]">নেহাজ কি?</h1>
            <p className="text-base sm:text-lg text-justify sm:text-start">
              নেহাজ শব্দের উৎস হইলো আরবি &ldquo;নাহাজ&rdquo;, যার থাকি মানহাজ
              শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা
              পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের
              যে &ldquo;বিশেষ&rdquo; ধরণ লালন এইটারে নেহাজ বলতেন। &ldquo;নেহাজ
              করে জানতে হয়&rdquo;। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা
              পটেনশিয়াল, যে &ldquo;ভাষাময়&rdquo; অস্তিত্ব মানুষের যাপনরে
              &ldquo;পার্টিকুলার&rdquo; আর সার্থক কইরা তোলে, যার জোরে মানুষ
              নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত
              সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা
              চর্চায়, সত্য অনুসন্ধানে, ওইটারেই &ldquo;নেহাজ&rdquo; কই আমরা।
            </p>
          </div>
          <div className="space-y-5 ">
            <h1 className="font-niladri text-lg sm:text-[22px]">নেহাজ কেন?</h1>
            <p className="text-base sm:text-lg text-justify sm:text-start">
              নেহাজ শব্দের উৎস হইলো আরবি &ldquo;নাহাজ&rdquo;, যার থাকি মানহাজ
              শব্দ আইছে। অর্থ পদ্ধতি বা মেথড। অবশ্য লালনের বরাতেই শব্দটা আমরা
              পাই সর্বপ্রথম। কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের
              যে &ldquo;বিশেষ&rdquo; ধরণ লালন এইটারে নেহাজ বলতেন। &ldquo;নেহাজ
              করে জানতে হয়&rdquo;। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা
              পটেনশিয়াল, যে &ldquo;ভাষাময়&rdquo; অস্তিত্ব মানুষের যাপনরে
              &ldquo;পার্টিকুলার&rdquo; আর সার্থক কইরা তোলে, যার জোরে মানুষ
              নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত
              সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা
              চর্চায়, সত্য অনুসন্ধানে, ওইটারেই &ldquo;নেহাজ&rdquo; কই আমরা।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
