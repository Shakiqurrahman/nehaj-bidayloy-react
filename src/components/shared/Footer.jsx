import React from "react";
import { Link } from "react-router-dom";
import AuthorLogo from "../../assets/images/Footer/Footer-Author.png";
import MaskutLogo from "../../assets/images/Footer/Footer-Nehaj-Maskut.png";
import WhiteLogo from "/public/nehaj-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary-blue rounded-[30px] mt-[60px] sm:mt-32 text-white pt-[78px] pb-[33px] px-5">
      <div className="max-width">
        <div className="flex items-start justify-between flex-wrap lg:flex-nowrap gap-y-5">
          <div className="w-full lg:w-auto shrink-0 flex flex-col items-center md:items-start text-center md:text-start gap-3 sm:gap-[25px]">
            <img
              src={WhiteLogo}
              alt="Nehaj Bidyaloy White Logo"
              className="w-[165px]"
            />
            <p className="sm:text-lg leading-[1.5] lg:w-[305px]">
              নেহাজ-এ প্রকাশিত কোনো লেখা, ছবি কিংবা শিল্পকর্ম লেখক অথবা
              কর্তৃপক্ষের অনুমতি ছাড়া কোথাও প্রকাশ করা অবৈধ৷
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-start gap-3 sm:gap-[25px]">
            <h1 className="text-lg sm:text-2xl font-niladri">বিষয়</h1>
            <ul className="flex md:flex-col gap-[10px]">
              <li>
                <Link
                  to={"/category/thought"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  চিন্তা
                </Link>
              </li>
              <li>
                <Link
                  to={"/category/history"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  ইতিহাস
                </Link>
              </li>
              <li>
                <Link
                  to={"/category/literary"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  সাহিত্য
                </Link>
              </li>
              <li>
                <Link
                  to={"/category/art"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  শিল্প
                </Link>
              </li>
              <li>
                <Link
                  to={"/category/cinema"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  সিনেমা
                </Link>
              </li>
              <li>
                <Link
                  to={"/category/theology"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  ধর্মতত্ত্ব
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-start gap-3 sm:gap-[25px]">
            <h1 className="text-lg sm:text-2xl font-niladri">ধরণ</h1>
            <ul className="flex md:flex-col gap-[10px]">
              <li>
                <Link
                  to={"/genre/article"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  প্রবন্ধ
                </Link>
              </li>
              <li>
                <Link
                  to={"/genre/notes"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  নোটস
                </Link>
              </li>
              <li>
                <Link
                  to={"/genre/translate"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  অনুবাদ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-start gap-3 sm:gap-[25px]">
            <h1 className="text-lg sm:text-2xl font-niladri">
              গুরুত্বপূর্ণ লিংক
            </h1>
            <ul className="flex md:flex-col gap-[10px]">
              <li>
                <Link
                  to={"/notice"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  বিজ্ঞপ্তি
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  পরিচয়
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-start gap-3 sm:gap-[25px]">
            <h1 className="text-lg sm:text-2xl font-niladri">
              সোশ্যাল মিডিয়া
            </h1>
            <ul className="flex md:flex-col gap-[10px]">
              <li>
                <Link
                  to={"https://facebook.com/"}
                  target="_blank"
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  ফেইসবুক
                </Link>
              </li>
              <li>
                <Link
                  to={"https://instagram.com/"}
                  target="_blank"
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  ইমেইল
                </Link>
              </li>
              <li>
                <Link
                  to={"https://youtube.com/"}
                  target="_blank"
                  className="text-white text-base sm:text-lg hover:text-alert-orange duration-300"
                >
                  ইউটিউব
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-start gap-3 sm:gap-[25px]">
            <h1 className="text-lg sm:text-2xl font-niladri mx-auto">
              নেহাজ-লেখক
            </h1>
            <Link to={"/author"} className="flex gap-3 sm:gap-[25px]">
              <img
                src={AuthorLogo}
                alt="Nehaj Footer Author Logo"
                className="block size-[100px] sm:size-[174px] shrink-0 rounded-full object-cover"
              />
            </Link>
          </div>
          <div className="w-auto shrink-0 hidden xl:flex flex-col gap-3 sm:gap-[25px]">
            <h1 className="text-lg sm:text-2xl font-niladri text-center">
              নেহাজ-পরিচয়
            </h1>
            <Link to={"/about-us"}>
              <img
                src={MaskutLogo}
                alt="Nehaj Footer Maskut Logo"
                className="size-[100px] sm:size-[174px] shrink-0 rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
        <hr className="w-full h-px my-10 md:my-[60px] bg-white" />
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-between sm:text-lg font-syne-mono">
          <p className="w-full text-center xl:text-left mb-3 md:mb-5 xl:mb-0 xl:w-auto">
            copyright 2024 @nehaj-bidyaloy All Right Reserved
          </p>
          <p className="w-full md:w-1/2 text-center xl:text-left xl:w-auto">
            UI by @ibnsums
          </p>
          <p className="w-full md:w-1/2 text-center xl:text-left xl:w-auto">
            developed by Shakiqur, Shakil, Soumik
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
