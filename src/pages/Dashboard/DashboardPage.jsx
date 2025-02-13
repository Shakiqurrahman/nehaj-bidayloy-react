import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthorsCard from "../../components/Dashboard/AuthorsCard";
import StoriesCard from "../../components/Dashboard/StoriesCard";
import { useGetOverAllDataQuery } from "../../Redux/api/dashboardApiSlice";
import Loading from "../../utils/Loading";

const DashboardPage = () => {
  const { data: overAllData, isLoading } = useGetOverAllDataQuery();

  return isLoading ? (
    <Loading />
  ) : (
    <section className="w-full min-h-[calc(100vh_-_96px)]">
      <div>
        <h1 className="text-[28px] font-semibold leading-none">Dashboard</h1>
        <p className="text-sm text-primary-blue tracking-[4px]">
          Nehaj Bidyaloy
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border">
          <div>
            <h2 className="text-[32px] font-bold mb-2 text-center">
              {overAllData?.totalAuthor || 0}
            </h2>
            <p className="text-base font-medium">Total Authors</p>
          </div>
          <div>
            <HiMiniUsers className="text-primary-blue" size={50} />
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border">
          <div>
            <h2 className="text-[32px] font-bold mb-2 text-center">
              {overAllData?.totalCategory || 0}
            </h2>
            <p className="text-base font-medium">Total Categories</p>
          </div>
          <div>
            <MdCategory className="text-primary-blue" size={50} />
          </div>
        </div>
        <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border">
          <div>
            <h2 className="text-[32px] font-bold mb-2 text-center">
              {overAllData?.totalStory || 0}
            </h2>
            <p className="text-base font-medium">Total Writings</p>
          </div>
          <div>
            <FaBookOpen className="text-primary-blue" size={50} />
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <div className="flex gap-2 justify-between items-center">
          <h2 className="text-xl font-medium leading-none">Authors</h2>
          <Link
            to="/admin-dashboard/authors"
            className="bg-primary-blue hover:bg-primary-blue duration-300 px-6 py-2 rounded-[30px] text-white font-medium"
          >
            See All
          </Link>
        </div>
        {/* Authors List */}

        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
          {overAllData?.authorsData?.map((author, idx) => (
            <AuthorsCard key={idx} authorData={author} />
          ))}
        </div>

        <div className=" mt-10">
          <div className="flex gap-2 justify-between items-center">
            <h2 className="text-xl font-medium leading-none">Writings</h2>
            <Link
              to="/admin-dashboard/stories"
              className="bg-primary-blue hover:bg-primary-blue duration-300 px-6 py-2 rounded-[30px] text-white font-medium"
            >
              See All
            </Link>
          </div>
          {/* Stories List */}

          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {overAllData?.storiesData?.map((story, idx) => (
              <StoriesCard key={idx} storyData={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
