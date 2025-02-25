import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import SidePanel from "./SidePanel";
import Logo from "/public/Nehaj_Logo.png";
import Icon from "/public/icon.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="w-full absolute top-[75px] left-0 z-[99999999] px-[30px] sm:px-[46px]">
        <nav className="max-width font-niladri">
          <div className="rounded-[100px] bg-primary-white flex items-center justify-between px-6 py-[10px] lg:px-[30px] lg:py-4 border">
            <Link to={"/"} className="shrink-0">
              <img
                src={Logo}
                alt="Nehaj Bidyaloy Logo"
                className="w-[80px] sm:block hidden sm:w-[165px] object-contain"
              />
              <img
                src={Icon}
                alt="Nehaj Bidyaloy Logo"
                className="w-[50px] block sm:hidden sm:w-[165px] object-contain"
              />
            </Link>
            <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
              <li className="relative group">
                <div className="text-lg text-primary-blue hover:text-primary-golden duration-300 flex items-center gap-3 cursor-pointer">
                  বিষয় <IoIosArrowDown />
                </div>
                <ul className="absolute top-[32px] left-0 space-y-3 bg-white w-[150px] py-5 rounded-lg shadow group-hover:opacity-100 opacity-0 invisible group-hover:visible duration-300">
                  <li>
                    <NavLink
                      to={"/category/thought"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      চিন্তা
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/category/history"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      ইতিহাস
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/category/literary"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      সাহিত্য
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/category/art"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      শিল্প
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/category/cinema"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      সিনেমা
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/category/theology"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      ধর্মতত্ত্ব
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <div className="text-lg text-primary-blue hover:text-primary-golden duration-300 flex items-center gap-3 cursor-pointer">
                  ধরণ <IoIosArrowDown />
                </div>
                <ul className="absolute top-[32px] left-0 space-y-3 bg-white w-[120px] py-5 rounded-lg shadow group-hover:opacity-100 opacity-0 invisible group-hover:visible duration-300">
                  <li>
                    <NavLink
                      to={"/genre/article"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      প্রবন্ধ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/genre/notes"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      নোটস
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/genre/translate"}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                    >
                      অনুবাদ
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to={"/study-circle"}
                  className="text-lg text-primary-blue hover:text-primary-golden duration-300"
                >
                  পাঠচক্র
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/author"}
                  className="text-lg text-primary-blue hover:text-primary-golden duration-300"
                >
                  লেখক
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-us"}
                  className="text-lg text-primary-blue hover:text-primary-golden duration-300"
                >
                  পরিচয়
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center gap-[15px] xl:gap-[50px]">
              <NavLink
                to={"/notice"}
                className="hidden sm:block text-lg text-primary-blue hover:text-primary-golden duration-300"
              >
                বিজ্ঞপ্তি
              </NavLink>
              <NavLink
                to={"/contact"}
                className="hidden sm:block text-lg text-primary-blue hover:text-primary-golden duration-300"
              >
                যোগাযোগ
              </NavLink>
              <button
                className="shrink-0 block lg:hidden"
                onClick={() => setToggle(true)}
              >
                <GiHamburgerMenu className="text-2xl text-primary-blue hover:text-primary-golden duration-300" />
              </button>
              <button className="hidden sm:block shrink-0 px-5 sm:px-10 py-1 text-sm sm:text-base sm:py-[15px] rounded-[40px] bg-primary-blue text-white hover:bg-primary-golden duration-300">
                খুঁজুন
              </button>
            </div>
          </div>
        </nav>
      </header>
      <SidePanel open={toggle} close={() => setToggle(false)} />
    </>
  );
};

export default Header;
