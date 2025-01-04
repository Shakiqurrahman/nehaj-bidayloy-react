import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/public/Nehaj_Logo.png";

const Header = () => {
  return (
    <header className="w-full absolute top-[75px] left-0 z-[99999999]">
      <nav className="max-width">
        <div className="rounded-[100px] bg-primary-white flex items-center justify-between p-[30px]">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="Nehaj Bidyaloy Logo"
              className="w-[165px] object-contain"
            />
          </Link>
          <ul className="flex items-center gap-10">
            <li>
              <NavLink
                to={"/category"}
                className="text-lg text-primary-blue hover:text-alert-orange duration-300"
              >
                বিষয়
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/genre"}
                className="text-lg text-primary-blue hover:text-alert-orange duration-300"
              >
                ধরণ
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/study-circle"}
                className="text-lg text-primary-blue hover:text-alert-orange duration-300"
              >
                পাঠচক্র
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/author"}
                className="text-lg text-primary-blue hover:text-alert-orange duration-300"
              >
                লেখক
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about-us"}
                className="text-lg text-primary-blue hover:text-alert-orange duration-300"
              >
                পরিচয়
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-[50px]">
            <NavLink
              to={"/notice"}
              className="text-lg text-primary-blue hover:text-alert-orange duration-300"
            >
              বিজ্ঞপ্তি
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-lg text-primary-blue hover:text-alert-orange duration-300"
            >
              যোগাযোগ
            </NavLink>
            <button className="shrink-0 px-10 py-[15px] rounded-[40px] bg-primary-blue text-white hover:bg-alert-orange duration-300">
              খুঁজুন
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
