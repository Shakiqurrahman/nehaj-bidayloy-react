import React, { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { HiMinusSm } from "react-icons/hi";
import { IoMdReturnLeft } from "react-icons/io";
import { IoClose, IoSearch } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useLazyGetSearchSuggessionsQuery } from "../../../Redux/api/userApiSlice";
import { setOpenSearch } from "../../../Redux/features/utilsSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const { openSearch } = useSelector((state) => state.utils);

  const textRef = useRef(null);
  const searchBoxRef = useRef(null);
  const [textInput, setTextInput] = useState("");
  const [triggerSearch, { data: suggessionsData, isFetching }] =
    useLazyGetSearchSuggessionsQuery();
  useEffect(() => {
    if (openSearch && textRef.current) {
      textRef.current.focus();
    }
  }, [openSearch]);

  const handleInput = (e) => {
    const value = e.target.value;
    setTextInput(value);

    if (value.length >= 2) {
      triggerSearch({ searchTerm: value });
    }
  };

  const handleClearInput = () => {
    setTextInput("");
    textRef.current && textRef.current.focus();
  };

  const handleClose = () => {
    dispatch(setOpenSearch(false));
  };

  useOutsideClick(searchBoxRef, () => dispatch(setOpenSearch(!openSearch)));

  return (
    <div className="fixed left-0 top-0 z-[999999999999] flex h-screen w-full items-start justify-center overflow-y-auto bg-black/50 px-5 py-10 backdrop-blur-sm">
      <div
        className="w-full max-w-[600px] rounded-lg bg-white py-3"
        ref={searchBoxRef}
      >
        <div className="flex items-center gap-2 rounded-lg border-2 border-primary p-3 mx-3">
          {/* <IoSearch className="shrink-0 text-2xl text-gray-400" /> */}
          <input
            ref={textRef}
            type="text"
            placeholder="খুজুন..."
            className={`${textInput ? "search-box" : ""} flex-1 outline-none`}
            onChange={handleInput}
            value={textInput}
          />
          {textInput ? (
            <button
              className="shrink-0 text-base font-medium text-primary-blue flex items-center"
              onClick={handleClearInput}
            >
              মুছুন
              <IoClose className="text-xl" />
            </button>
          ) : (
            <div className="ml-auto flex shrink-0 items-center">
              <IoSearch className="text-2xl text-gray-400" />
            </div>
          )}
        </div>
        <div className="bg-white max-h-[82vh] search_scroll px-3">
          {textInput.length >= 2 &&
            suggessionsData?.length > 0 &&
            suggessionsData?.map((res, idx) => {
              return (
                <Link
                  className={`flex items-center justify-between border-t bg-transparent p-4 text-base font-semibold duration-300 first:mt-3 hover:bg-lightskyblue`}
                  to={`/story/${res?._id}`}
                  onClick={handleClose}
                  key={idx}
                >
                  <div className="flex items-center gap-3">
                    <FaAnglesRight />
                    <div className="flex flex-col">
                      <h2>{res?.title}</h2>
                      <div className="flex items-center text-[11px] leading-normal text-gray-500">
                        <span>লেখক</span>
                        <HiMinusSm size={12} />
                        <span> {res?.author}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-[11px] leading-normal text-gray-500">
                          <span>বিষয় </span>
                          <MdChevronRight size={15} />
                          <span> {res?.category}</span>
                        </div>
                        <div className="flex items-center text-[11px] leading-normal text-gray-500">
                          <span>ধরণ </span>
                          <MdChevronRight size={15} />
                          <span> {res?.genre}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-500">
                    <IoMdReturnLeft />
                  </span>
                </Link>
              );
            })}
          {!isFetching &&
            textInput.length >= 2 &&
            suggessionsData?.length === 0 && (
              <p className="text-center mt-5 mb-2 font-poppins">
                Nothing Found!
              </p>
            )}
        </div>
      </div>
    </div>
  );
};
