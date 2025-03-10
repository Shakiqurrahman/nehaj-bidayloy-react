import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import heroCardImg from "../../../assets/images/hero-card-img.png";
import heroBannerBg from "../../../assets/images/home-banner-bg.png";

const Hero = () => {
  return (
    <div
      className="pt-[170px] sm:pt-[263px] pb-[80px] sm:pb-[114px] bg-cover bg-center rounded-[40px] px-5"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0,47,94,0), rgba(0,47,94,0.5) 26%, rgba(0,47,94,1) 65%), url('${heroBannerBg}')`,
      }}
    >
      <div className="max-width">
        <div className="flex flex-wrap sm:flex-nowrap items-center">
          <div className="w-full sm:w-1/2 text-white">
            <h1 className="text-xl sm:text-[30px] sm:leading-[50px] md:text-[40px] xl:text-[60px] md:leading-[60px] xl:leading-[80px] font-niladri">
              চিন্তার ভরাডুবি থেইকা আমাদের যাত্রাপথ অমীয় সম্ভাবনার অভিমুখে
            </h1>
            <p className="sm:text-lg md:text-2xl mt-[30px] mb-5 sm:mb-[50px]">
              এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর
              চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই &quot;নেহাজ&quot; কই আমরা।
            </p>
            <Link
              to={"/"}
              className="p-[10px] rounded-[100px] border border-white text-white w-[100px] sm:w-[150px] md:w-[217px] flex items-center justify-center text-base md:text-2xl h-[50px] md:h-[70px] font-niladri duration-300 hover:bg-alert-orange hover:border-alert-orange"
            >
              পড়ুন
            </Link>
          </div>
          <div className="w-full sm:w-1/2 mt-10 sm:mt-0 sm:pl-5 lg:pl-[100px]">
            <img
              src={heroCardImg}
              alt="Hero Card image"
              className="rounded-[30px] object-cover h-[320px] hidden sm:block mb-[30px]"
            />
            <div className="rounded-[30px] bg-primary-white p-10 sm:p-[50px] sm:hidden lg:block">
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between">
                <div className="font-niladri w-full sm:w-auto mb-3 sm:mb-0">
                  <h1 className="text-3xl text-primary-blue">৫০০কে+</h1>
                  <p className="text-secondary-charcoal-gray text-lg">
                    পাঠক নিয়মিত পড়ছেন
                  </p>
                </div>
                <Link
                  to={"/"}
                  className="flex items-center justify-center size-[40px] rounded-full border-2 border-primary-blue text-primary-blue hover:text-white hover:bg-primary-blue duration-300"
                >
                  <MdArrowForwardIos className="text-xl" />
                </Link>
              </div>
              <p className="mt-[18px] line-clamp-6 sm:line-clamp-none">
                কোনো সত্যে পৌছাতে মানুষের লিপ্ততা, সাধনা,অভিনিবেশের যে
                &quot;বিশেষ&quot; ধরণ লালন এইটারে নেহাজ বলতেন। &quot;নেহাজ করে
                জানতে হয়&quot;। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা
                পটেনশিয়াল, যে &quot;ভাষাময়&quot; অস্তিত্ব মানুষের যাপনরে
                &quot;পার্টিকুলার&quot; আর সার্থক কইরা তোলে, যার জোরে মানুষ
                নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত
                সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা
                চর্চায়, সত্য অনুসন্ধানে, ওইটারেই &quot;নেহাজ&quot; কই আমরা।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
