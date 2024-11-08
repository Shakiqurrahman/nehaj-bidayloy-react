import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SidePanel = ({ isOpen }) => {
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

  const dropdownsRef = useRef([]);

  const [isCollapse, setIsCollapse] = useState(null);

  const handleCollapse = (id) => {
    setIsCollapse(isCollapse === id ? null : id);
  };

  console.log(isCollapse);

  return (
    <div
      className={`sm:hidden absolute top-full left-0 shadow w-full bg-white duration-500 border-t z-[99999] ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-full"
      }`}
    >
      <form className="w-full p-3 relative">
        <input
          type="text"
          placeholder="এখানে লিখুন..."
          className="w-full block border-b-2 border-secondary outline-none p-3"
        />
        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 right-5"
        >
          <IoSearch className="text-2xl text-secondary" />
        </button>
      </form>
      <ul className="px-3">
        <li className="border-b text-lg font-ador flex w-full justify-between">
          <div className={`hover:text-primary duration-300 p-2 grow`}>বিষয়</div>
          {categories?.length > 0 && (
            <button
              onClick={() => handleCollapse("category")}
              className={`border-l py-2 px-4 shrink-0 gap-3 hover:text-primary duration-300 ${
                isCollapse === "category" && "text-primary bg-gray-100"
              }`}
            >
              <IoIosArrowDown
                className={`${
                  isCollapse === "category" ? "-rotate-180" : "rotate-0"
                } hover:text-primary transition-transform duration-300`}
              />
            </button>
          )}
        </li>
        {categories?.length > 0 && (
          <li
            ref={(el) => (dropdownsRef.current["category"] = el)}
            style={{
              height:
                isCollapse === "category"
                  ? dropdownsRef?.current["category"]?.scrollHeight
                  : 0,
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
          >
            <ul className="pl-4">
              {categories?.map((category, index) => (
                <li key={index}>
                  <NavLink
                    to={`/category/${category?.categorySlug}`}
                    className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b`}
                  >
                    {category?.categoryName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        )}
        <li className="border-b text-lg font-ador flex w-full justify-between">
          <div className={`hover:text-primary duration-300 p-2 grow`}>ধরণ</div>
          {genre?.length > 0 && (
            <button
              onClick={() => handleCollapse("genre")}
              className={`border-l py-2 px-4 shrink-0 gap-3 hover:text-primary duration-300 ${
                isCollapse === "genre" && "text-primary bg-gray-100"
              }`}
            >
              <IoIosArrowDown
                className={`${
                  isCollapse === "genre" ? "-rotate-180" : "rotate-0"
                } hover:text-primary transition-transform duration-300`}
              />
            </button>
          )}
        </li>
        {genre?.length > 0 && (
          <li
            ref={(el) => (dropdownsRef.current["genre"] = el)}
            style={{
              height:
                isCollapse === "genre"
                  ? dropdownsRef?.current["genre"]?.scrollHeight
                  : 0,
              overflow: "hidden",
              transition: "height 0.3s ease",
            }}
          >
            <ul className="pl-4">
              {genre?.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={`/genre/${item?.genreSlug}`}
                    className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b`}
                  >
                    {item?.genreName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        )}
        <li className="border-b text-lg font-ador flex w-full justify-between">
          <NavLink
            to={`/study-circle`}
            className={`hover:text-primary duration-300 p-2 grow`}
          >
            পাঠচক্র
          </NavLink>
        </li>
        <li className="text-lg font-ador flex w-full justify-between">
          <NavLink
            to={`/author`}
            className={`hover:text-primary duration-300 p-2 grow`}
          >
            লেখক
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
