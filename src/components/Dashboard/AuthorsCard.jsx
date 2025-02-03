import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import authorLogo from "../../assets/images/authors/author1.jpg";

const AuthorsCard = ({ authorsData }) => {
  return (
    <div className="w-full flex items-center gap-4 p-8 bg-white max-w-[700px] rounded-2xl border group relative overflow-hidden">
      <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
        <Link
          to={"edit"}
          className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
        >
          <FiEdit />
        </Link>
        <button className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300">
          <RiDeleteBin6Line />
        </button>
      </div>
      <img
        src={authorLogo}
        alt="Author Image"
        className="object-cover size-28 rounded-full shrink-0 object-top"
      />
      <div className="space-y-1">
        <h3 className="text-lg line-clamp-1 font-semibold text-primary-blue">
          Author Name
        </h3>
        <p className="text-sm text-gray-500 line-clamp-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quasi
          quod quia harum ducimus, praesentium sunt nulla atque veniam velit.
        </p>
        <p className="text-sm font-medium">Total Writings : 120</p>
      </div>
    </div>
  );
};

export default AuthorsCard;
