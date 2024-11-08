import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";

import { NavLink } from "react-router-dom";
import SidePanel from "./SidePanel";
import Logo from "/nehaz-bidyalay-logo.jpg";

const Navbar = () => {
  const categories = [
    {
      categorySlug: "thought",
      categoryName: "চিন্তা",
    },
    {
      categorySlug: "history",
      categoryName: "ইতিহাস",
    },
    {
      categorySlug: "literary",
      categoryName: "সাহিত্য",
    },
    {
      categorySlug: "art",
      categoryName: "শিল্প",
    },
    {
      categorySlug: "cinema",
      categoryName: "সিনেমা",
    },
    {
      categorySlug: "theology",
      categoryName: "ধর্মতত্ত্ব",
    },
  ];
  const genre = [
    {
      genreSlug: "article",
      genreName: "প্রবন্ধ",
    },
    {
      genreSlug: "notes",
      genreName: "নোটস",
    },
    {
      genreSlug: "translation",
      genreName: "অনুবাদ",
    },
  ];

  const [openSidePanel, setOpenSidePanel] = useState(false);

  // useEffect(() => {
  //   if (openSidePanel) {
  //     // Disable scrolling
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // Enable scrolling
  //     document.body.style.overflow = "auto";
  //   }

  //   // Cleanup function to ensure scrolling is enabled when component unmounts
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [openSidePanel]);

  return (
    <>
      <nav className="bg-white  shadow sticky top-0 w-full z-[999]">
        <div className="max-width flex items-center justify-between py-3 bg-white relative z-[999999999]">
          <NavLink to={"/"} className="shrink-0">
            <img
              src={Logo}
              alt="Nehaj Bidyaloy Logo"
              className="w-[100px] sm:w-[170px]"
            />
          </NavLink>
          <nav className="flex sm:hidden gap-4 py-2 sm:text-lg ml-auto mr-3">
            <NavLink
              to={"/about-us"}
              className={` hover:text-primary duration-300 font-ador`}
            >
              পরিচয়
            </NavLink>
            <NavLink
              to={"/notice"}
              className={` hover:text-primary duration-300 font-ador`}
            >
              বিজ্ঞপ্তি
            </NavLink>
            <NavLink
              to={"/contact"}
              className={` hover:text-primary duration-300 font-ador`}
            >
              যোগাযোগ
            </NavLink>
          </nav>
          <div className="flex items-center justify-end sm:hidden w-5">
            <button
              className=" hover:text-primary duration-300 text-black"
              onClick={() => setOpenSidePanel(!openSidePanel)}
            >
              {openSidePanel ? (
                <ImCross />
              ) : (
                <GiHamburgerMenu className="text-xl" />
              )}
            </button>
          </div>
          <div className="flex items-center">
            <ul className="hidden sm:flex items-center gap-1">
              <li className="group relative cursor-pointer">
                <div
                  className={`px-3 py-2 text-lg font-ador hover:bg-gray-100 flex items-center justify-between gap-2 hover:text-primary duration-300`}
                >
                  বিষয় {categories?.length > 0 && <MdKeyboardArrowDown />}
                </div>
                {categories?.length > 0 && (
                  <ul className="absolute top-full right-0 w-[200px] py-2 bg-white shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-[9999999999]">
                    {categories?.map((category, index) => (
                      <li key={index}>
                        <NavLink
                          to={`/category/${category?.categorySlug}`}
                          className={` px-6 text-lg py-2 block w-full font-ador hover:text-primary hover:pl-8 duration-300`}
                        >
                          {category?.categoryName}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="group relative cursor-pointer">
                <div
                  className={`px-3 py-2 text-lg font-ador hover:bg-gray-100 flex items-center justify-between gap-2 hover:text-primary duration-300`}
                >
                  ধরণ {genre?.length > 0 && <MdKeyboardArrowDown />}
                </div>
                {genre?.length > 0 && (
                  <ul className="absolute top-full right-0 w-[200px] py-2 bg-white shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-[9999999999]">
                    {genre?.map((item, index) => (
                      <li key={index}>
                        <NavLink
                          to={`/${item?.genreSlug}`}
                          className={` px-6 text-lg py-2 block w-full font-ador hover:text-primary hover:pl-8 duration-300`}
                        >
                          {item?.genreName}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to={"/study-circle"}
                  className={`px-3 py-2 text-lg font-ador hover:bg-gray-100 flex items-center justify-between gap-2 hover:text-primary duration-300`}
                >
                  পাঠচক্র
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/author"}
                  className={`px-3 py-2 text-lg font-ador hover:bg-gray-100 flex items-center justify-between gap-2 hover:text-primary duration-300`}
                >
                  লেখক
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <SidePanel isOpen={openSidePanel} />
      </nav>
    </>
  );
};

export default Navbar;
