import React from "react";

import { Link } from "react-router-dom";
import author1 from "../assets/images/authors/author1.jpg";
import author2 from "../assets/images/authors/author2.jpg";
import author3 from "../assets/images/authors/author3.jpg";

const Author = () => {
  return (
    <div className="max-width my-20">
      <h1 className="text-2xl font-ador text-center mb-10">লেখক তালিকা</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Link
          to={"/"}
          className="p-4 text-center bg-white text-black shadow-box hover:shadow-box-lg duration-500 group hover:bg-black rounded-lg"
        >
          <img
            src={author1}
            alt="Author image"
            className="size-[200px] rounded-full mx-auto object-cover object-top"
          />
          <h1 className="text-xl mt-5 mb-2 group-hover:text-white duration-500 font-ador">
            সারোয়ার তুষার
          </h1>
          <p className="group-hover:text-white duration-500">26 posts</p>
        </Link>
        <Link
          href={"/"}
          className="p-4 text-center bg-white text-black shadow-box hover:shadow-box-lg duration-500 group hover:bg-black rounded-lg"
        >
          <img
            src={author2}
            alt="Author image"
            className="size-[200px] rounded-full mx-auto object-cover object-top"
          />
          <h1 className="text-xl mt-5 mb-2 group-hover:text-white duration-500 font-ador">
            সহুল আহমদ
          </h1>
          <p className="group-hover:text-white duration-500">21 posts</p>
        </Link>
        <Link
          href={"/"}
          className="p-4 text-center bg-white text-black shadow-box hover:shadow-box-lg duration-500 group hover:bg-black rounded-lg"
        >
          <img
            placeholder="blur"
            src={author3}
            alt="Author image"
            className="size-[200px] rounded-full mx-auto object-cover object-top"
          />
          <h1 className="text-xl mt-5 mb-2 group-hover:text-white duration-500 font-ador">
            রবীন্দ্রনাথ ঠাকুর
          </h1>
          <p className="group-hover:text-white duration-500">1 posts</p>
        </Link>
      </div>
    </div>
  );
};

export default Author;
