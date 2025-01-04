import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import AuthorsCard from "../../components/Dashboard/AuthorsCard";

const AllAuthor = () => {
  const authors = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <>
      <section className="">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-semibold leading-none">Authors</h1>
          <Link
            to={"create"}
            className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
          >
            <FiPlusCircle />
            Create new
          </Link>
        </div>
        <span className="block w-full h-px bg-black/20 my-5"></span>

        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
          {authors?.slice(0, 15).map((story, idx) => (
            <AuthorsCard key={idx} storiesData={story} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllAuthor;
