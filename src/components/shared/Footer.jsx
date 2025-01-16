import React from "react";
import { Link } from "react-router-dom";
import AuthorLogo from "../../assets/images/Footer/Footer-Author.png";
import MaskutLogo from "../../assets/images/Footer/Footer-Nehaj-Maskut.png";
import WhiteLogo from "/public/nehaj-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary-blue rounded-[30px] mt-32 text-white pt-[78px] pb-[33px]">
      <div className="max-width">
        <div className="flex items-start justify-between">
          <div className="w-auto shrink-0 flex flex-col gap-[25px]">
            <img
              src={WhiteLogo}
              alt="Nehaj Bidyaloy White Logo"
              className="w-[165px]"
            />
            <p className="text-lg leading-[1.5] w-[305px]">
              নেহাজ-এ প্রকাশিত কোনো লেখা, ছবি কিংবা শিল্পকর্ম লেখক অথবা
              কর্তৃপক্ষের অনুমতি ছাড়া কোথাও প্রকাশ করা অবৈধ৷
            </p>
          </div>
          <div className="w-auto shrink-0 flex flex-col gap-[25px]">
            <h1 className="text-2xl font-niladri">বিষয়</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  চিন্তা
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  ইতিহাস
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  সাহিত্য
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  শিল্প
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  সিনেমা
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  ধর্মতত্ত্ব
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto shrink-0 flex flex-col gap-[25px]">
            <h1 className="text-2xl font-niladri">ধরণ</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  প্রবন্ধ
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  নোটস
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  অনুবাদ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto shrink-0 flex flex-col gap-[25px]">
            <h1 className="text-2xl font-niladri">গুরুত্বপূর্ণ লিংক</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  বিজ্ঞপ্তি
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  পরিচয়
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto shrink-0 flex flex-col gap-[25px]">
            <h1 className="text-2xl font-niladri">সোশ্যাল মিডিয়া</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  ফেইসবুক
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  ইনস্টাগ্রাম
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="text-white text-lg hover:text-alert-orange duration-300"
                >
                  ইউটিউব
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-auto shrink-0 flex flex-col gap-[25px]">
            <h1 className="text-2xl font-niladri">নেহাজের লেখকগন</h1>
            <img
              src={AuthorLogo}
              alt="Nehaj Footer Author Logo"
              className="size-[174px] shrink-0 rounded-full object-cover"
            />
          </div>
          <div className="w-auto shrink-0 flex flex-col gap-[25px]">
            <h1 className="text-2xl font-niladri">নেহাজ মাসকুট</h1>
            <img
              src={MaskutLogo}
              alt="Nehaj Footer Maskut Logo"
              className="size-[174px] shrink-0 rounded-full object-cover"
            />
          </div>
        </div>
        <hr className="w-full h-px my-[60px] bg-white" />
        <div className="flex items-center justify-between text-lg font-syne-mono">
          <p>copyright 2024 @nehaj-bidyaloy All Right Reserved</p>
          <p>developed by flytech IT</p>
          <p>coa 2024 @ibnsums All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
