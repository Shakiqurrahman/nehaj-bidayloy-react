import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import heroCardImg from "../../../assets/images/hero-card-img.png";
import heroBannerBg from "../../../assets/images/home-banner-bg.png";

const Hero = () => {
  return (
    <div
      className="pt-[263px] pb-[114px] bg-cover bg-center rounded-[40px]"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0,47,94,0), rgba(0,47,94,0.5) 26%, rgba(0,47,94,1) 65%), url('${heroBannerBg}')`,
      }}
    >
      <div className="max-width">
        <div className="flex items-center">
          <div className="w-1/2 text-white">
            <h1 className="text-[60px] leading-[80px] font-niladri">
              চিন্তার ভরাডুবি থেইকা আমাদের যাত্রাপথ অমীয় সম্ভাবনার অভিমুখে
            </h1>
            <p className="text-2xl mt-[30px] mb-[50px]">
              এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর
              চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই &quot;নেহাজ&quot; কই আমরা।
            </p>
            <Link
              to={"/"}
              className="p-[10px] rounded-[100px] border border-white text-white w-[217px] flex items-center justify-center text-2xl h-[70px] font-niladri duration-300 hover:bg-alert-orange hover:border-alert-orange"
            >
              পড়ুন
            </Link>
          </div>
          <div className="w-1/2 pl-[100px]">
            <img
              src={heroCardImg}
              alt="Hero Card image"
              className="rounded-[30px] object-cover h-[320px] block mb-[30px]"
            />
            <div className="rounded-[30px] bg-primary-white p-[50px]">
              <div className="flex items-center justify-between">
                <div className="font-niladri">
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
              <p className="mt-[18px]">
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
