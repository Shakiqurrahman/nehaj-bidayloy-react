import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../Redux/api/categoryApiSlice";
import { useGetGenresQuery } from "../../../Redux/api/genreApiSlice";
import { setOpenSearch } from "../../../Redux/features/utilsSlice";
import { SearchBox } from "./SearchBox";
import SidePanel from "./SidePanel";
import Logo from "/Nehaj_Logo.png";
import Icon from "/icon.png";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const isAdmin = user?.role === "ADMIN";

  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: genreData } = useGetGenresQuery();

  const [toggle, setToggle] = useState(false);
  const { openSearch } = useSelector((state) => state.utils);

  useEffect(() => {
    if (openSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSearch]);

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
                <div className="text-lg text-primary-blue hover:text-primary-golden duration-300 flex items-center gap-1 cursor-pointer">
                  বিষয় <IoIosArrowDown />
                </div>
                <ul className="absolute top-[32px] left-0 space-y-3 bg-primary-white w-[150px] py-5 rounded-lg shadow group-hover:opacity-100 opacity-0 invisible group-hover:visible duration-300">
                  {categoriesData &&
                    categoriesData?.map((category, i) => (
                      <li key={i}>
                        <NavLink
                          to={`/category/${category?.categorySlug}`}
                          className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                        >
                          {category?.category}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </li>
              <li className="relative group">
                <div className="text-lg text-primary-blue hover:text-primary-golden duration-300 flex items-center gap-1 cursor-pointer">
                  ধরণ <IoIosArrowDown />
                </div>
                <ul className="absolute top-[32px] left-0 space-y-3 bg-primary-white w-[120px] py-5 rounded-lg shadow group-hover:opacity-100 opacity-0 invisible group-hover:visible duration-300">
                  {genreData &&
                    genreData?.map((genre, i) => (
                      <li key={i}>
                        <NavLink
                          to={`/genre/${genre?.genreSlug}`}
                          className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full hover:pl-5"
                        >
                          {genre?.genre}
                        </NavLink>
                      </li>
                    ))}
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
              {isAdmin ? (
                <NavLink
                  to={"/admin-dashboard"}
                  className="hidden sm:block text-lg text-primary-blue hover:text-primary-golden duration-300"
                >
                  ড্যাশবোর্ড
                </NavLink>
              ) : (
                <NavLink
                  to={"/contact"}
                  className="hidden sm:block text-lg text-primary-blue hover:text-primary-golden duration-300"
                >
                  যোগাযোগ
                </NavLink>
              )}
              <button
                className="shrink-0 block lg:hidden"
                onClick={() => setToggle(true)}
              >
                <GiHamburgerMenu className="text-2xl text-primary-blue hover:text-primary-golden duration-300" />
              </button>
              <button
                type="button"
                onClick={() => dispatch(setOpenSearch(!openSearch))}
                className="hidden sm:block shrink-0 px-5 sm:px-10 py-1 text-sm sm:text-base sm:py-[15px] rounded-[40px] bg-primary-blue text-white hover:bg-primary-golden duration-300"
              >
                খুঁজুন
              </button>
            </div>
          </div>
        </nav>
      </header>
      <SidePanel open={toggle} close={() => setToggle(false)} />
      {openSearch && <SearchBox />}
    </>
  );
};

export default Header;
