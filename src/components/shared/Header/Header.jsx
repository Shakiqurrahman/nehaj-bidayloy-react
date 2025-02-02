import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import Logo from "/public/Nehaj_Logo.png";

const Header = () => {
  return (
    <header className="w-full absolute top-[75px] left-0 z-[99999999] px-[30px] sm:px-[46px]">
      <nav className="max-width font-niladri">
        <div className="rounded-[100px] bg-primary-white flex items-center justify-between px-2 sm:px-6 py-[10px] lg:px-[30px] lg:py-4 border">
          <Link to={"/"} className="shrink-0">
            <img
              src={Logo}
              alt="Nehaj Bidyaloy Logo"
              className="w-[80px] sm:w-[165px] object-contain"
            />
          </Link>
          <ul className="hidden lg:flex items-center gap-10">
            <li>
              <NavLink
                to={"/category"}
                className="text-lg text-primary-blue hover:text-primary-golden duration-300"
              >
                বিষয়
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/genre"}
                className="text-lg text-primary-blue hover:text-primary-golden duration-300"
              >
                ধরণ
              </NavLink>
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
          <div className="flex items-center gap-[15px] lg:gap-[50px]">
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
            <button className="shrink-0 block lg:hidden">
              <GiHamburgerMenu className="w-[18px] h-4 text-primary-blue hover:text-primary-golden duration-300" />
            </button>
            <button className="shrink-0 px-5 sm:px-10 py-1 text-sm sm:text-base sm:py-[15px] rounded-[40px] bg-primary-blue text-white hover:bg-primary-golden duration-300">
              খুঁজুন
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
