import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useGetCategoriesQuery } from "../../../Redux/api/categoryApiSlice";
import { useGetGenresQuery } from "../../../Redux/api/genreApiSlice";
import { setOpenSearch } from "../../../Redux/features/utilsSlice";
import Logo from "/icon.png";

const SidePanel = ({ open, close }) => {
  const dispatch = useDispatch();

  const { openSearch } = useSelector((state) => state.utils);
  const { user } = useSelector((state) => state.user);
  const isAdmin = user?.role === "ADMIN";

  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: genreData } = useGetGenresQuery();

  const boxRef = useRef(null);
  const dropdownsRef = useRef({});

  const [openDropdown, setOpenDropdown] = useState("category");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleSearchBox = () => {
    close();
    dispatch(setOpenSearch(!openSearch));
  };

  useOutsideClick(boxRef, close);

  return (
    <div
      className={`h-screen lg:hidden block w-full bg-black/50 fixed inset-0 z-[99999999999] ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        ref={boxRef}
        className={`h-full w-full max-w-[360px] p-5 bg-primary-white ml-auto duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img src={Logo} alt="Nehaj Logo" className="w-[50px]" />
          </Link>
          <button
            type="button"
            onClick={handleSearchBox}
            className="ml-auto shrink-0 px-5 py-2 text-sm rounded-[40px] bg-primary-blue text-white hover:bg-primary-golden duration-300 font-niladri"
          >
            খুঁজুন
          </button>
          <button onClick={close} className="shrink-0">
            <IoClose className="text-2xl" />
          </button>
        </div>
        <span className="block h-[2px] w-full bg-primary-blue rounded-lg my-5"></span>
        <ul className="font-niladri space-y-3 overflow-y-auto">
          <li className="relative group overflow-hidden">
            <div
              className="text-lg text-primary-blue hover:text-primary-golden duration-300 flex items-center gap-3 cursor-pointer"
              onClick={() =>
                setOpenDropdown(openDropdown === "category" ? "" : "category")
              }
            >
              বিষয় <IoIosArrowDown />
            </div>
            <ul
              ref={(el) => (dropdownsRef.current["category"] = el)}
              className="*:py-2 duration-300"
              style={{
                height:
                  openDropdown === "category"
                    ? dropdownsRef?.current["category"]?.scrollHeight + "px"
                    : 0,
              }}
            >
              {categoriesData &&
                categoriesData?.map((category, i) => (
                  <li key={i}>
                    <NavLink
                      to={`/category/${category?.categorySlug}`}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full"
                      onClick={close}
                    >
                      {category?.category}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </li>
          <li className="relative group overflow-hidden">
            <div
              className="text-lg text-primary-blue hover:text-primary-golden duration-300 flex items-center gap-3 cursor-pointer"
              onClick={() =>
                setOpenDropdown(openDropdown === "genre" ? "" : "genre")
              }
            >
              ধরণ <IoIosArrowDown />
            </div>
            <ul
              ref={(el) => (dropdownsRef.current["genre"] = el)}
              className="*:py-2 duration-300"
              style={{
                height:
                  openDropdown === "genre"
                    ? dropdownsRef?.current["genre"]?.scrollHeight + "px"
                    : 0,
              }}
            >
              {genreData &&
                genreData?.map((genre, i) => (
                  <li key={i}>
                    <NavLink
                      to={`/genre/${genre?.genreSlug}`}
                      className="text-lg text-primary-blue hover:text-primary-golden duration-300 px-3 block w-full"
                      onClick={close}
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
              className="text-lg text-primary-blue hover:text-primary-golden duration-300 block w-full"
              onClick={close}
            >
              পাঠচক্র
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/author"}
              className="text-lg text-primary-blue hover:text-primary-golden duration-300 block w-full"
              onClick={close}
            >
              লেখক
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about-us"}
              className="text-lg text-primary-blue hover:text-primary-golden duration-300 block w-full"
              onClick={close}
            >
              পরিচয়
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/notice"}
              className="block text-lg text-primary-blue hover:text-primary-golden duration-300 w-full"
              onClick={close}
            >
              বিজ্ঞপ্তি
            </NavLink>
          </li>
          {isAdmin ? (
            <li>
              <NavLink
                to={"/admin-dashboard"}
                className="block text-lg text-primary-blue hover:text-primary-golden duration-300 w-full"
                onClick={close}
              >
                ড্যাশবোর্ড
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                to={"/contact"}
                className="block text-lg text-primary-blue hover:text-primary-golden duration-300 w-full"
                onClick={close}
              >
                যোগাযোগ
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
