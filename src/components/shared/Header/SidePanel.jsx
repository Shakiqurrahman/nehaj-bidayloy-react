import React, { Fragment, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SidePanel = ({ isOpen }) => {
  const navLinks = [
    {
      categorySlug: "discipline",
      category: "বিষয়",
      subCategories: [
        {
          subCategorySlug: "thought",
          subCategory: "চিন্তা",
        },
        {
          subCategorySlug: "history",
          subCategory: "ইতিহাস",
        },
        {
          subCategorySlug: "literary",
          subCategory: "সাহিত্য",
        },
        {
          subCategorySlug: "art",
          subCategory: "শিল্প",
        },
        {
          subCategorySlug: "cinema",
          subCategory: "সিনেমা",
        },
        {
          subCategorySlug: "theology",
          subCategory: "ধর্মতত্ত্ব",
        },
      ],
    },
    {
      categorySlug: "genre",
      category: "ধরণ",
      subCategories: [
        {
          subCategorySlug: "article",
          subCategory: "প্রবন্ধ",
        },
        {
          subCategorySlug: "notes",
          subCategory: "নোটস",
        },
        {
          subCategorySlug: "translation",
          subCategory: "অনুবাদ",
        },
      ],
    },
    {
      categorySlug: "study-circle",
      category: "পাঠচক্র",
    },
    {
      categorySlug: "author",
      category: "লেখক",
    },
  ];

  const dropdownRef = useRef(null);

  const [isCollapse, setIsCollapse] = useState(null);

  const handleCollapse = (id) => {
    setIsCollapse(isCollapse === id ? null : id);
  };

  console.log(isCollapse);

  return (
    <div
      className={`sm:hidden absolute top-full left-0  w-full bg-white duration-500 border-t z-[99999] ${
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
      {navLinks?.length > 0 && (
        <ul className="px-3">
          {navLinks?.map((links, index) => (
            <Fragment key={index}>
              <li className="border-b text-lg font-ador flex w-full justify-between">
                <NavLink
                  to={`/category/${links?.categorySlug}`}
                  className={`hover:text-primary p-2 grow`}
                >
                  {links?.category}
                </NavLink>
                {links?.subCategories?.length > 0 && (
                  <button
                    onClick={() => handleCollapse(index)}
                    className={`border-l py-2 px-4 shrink-0 gap-3 hover:text-primary duration-300 ${
                      isCollapse === index && "text-primary bg-gray-100"
                    }`}
                  >
                    <IoIosArrowDown
                      className={`${
                        isCollapse === index ? "-rotate-180" : "rotate-0"
                      } hover:text-primary transition-transform duration-300`}
                    />
                  </button>
                )}
              </li>
              {links?.subCategories?.length > 0 && (
                <li
                  ref={dropdownRef}
                  style={{
                    height:
                      isCollapse === index
                        ? dropdownRef.current.scrollHeight
                        : 0,
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                  }}
                >
                  <ul className="pl-4">
                    {links?.subCategories?.map((subLinks, index) => (
                      <li key={index}>
                        <NavLink
                          to={`/category/${links?.categorySlug}/${subLinks?.subCategorySlug}`}
                          className={`px-3 py-2 font-ador hover:text-primary duration-300 block border-b`}
                        >
                          {subLinks?.subCategory}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SidePanel;
