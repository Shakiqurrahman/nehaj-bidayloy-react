import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import StoriesCard from "../../components/Dashboard/StoriesCard";
import { useFetchStoriesQuery } from "../../Redux/api/storyApiSlice";
import Loading from "../../utils/Loading";

const AllWritings = () => {
  const { data: stories, isLoading } = useFetchStoriesQuery();
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="min-h-[calc(100vh_-_96px)]">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-semibold leading-none">Writings</h1>
          <Link
            to={"create"}
            className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
          >
            <FiPlusCircle />
            Create new
          </Link>
        </div>
        <span className="block w-full h-px bg-black/20 my-5"></span>
        {stories && stories?.length > 0 ? (
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {stories?.map((story, idx) => (
              <StoriesCard key={idx} storyData={story} />
            ))}
          </div>
        ) : (
          <p className="text-center">No Data Found!</p>
        )}
      </section>
    </>
  );
};

export default AllWritings;
