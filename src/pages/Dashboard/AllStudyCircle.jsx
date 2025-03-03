import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import StudyCircleCard from "../../components/Dashboard/StudyCircleCard";
import Pagination from "../../components/Pagination";
import { useFetchStudyCircleQuery } from "../../Redux/api/studyCircleApiSlice";
import Loading from "../../utils/Loading";

const AllStudyCircle = () => {
  const { data: response, isLoading } = useFetchStudyCircleQuery();
  const allPosts = response?.data || [];

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return isLoading ? (
    <div className="min-h-[calc(100vh_-_96px)]">
      <Loading />
    </div>
  ) : (
    <>
      <section className="min-h-[calc(100vh_-_96px)]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-[28px] font-semibold leading-none">
            Study Circle
          </h1>
          <Link
            to={"create"}
            className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
          >
            <FiPlusCircle />
            Create new
          </Link>
        </div>
        <span className="block w-full h-px bg-black/20 my-5"></span>
        {allPosts && allPosts?.length > 0 ? (
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {allPosts?.map((item, i) => (
              <StudyCircleCard key={i} data={item} />
            ))}
          </div>
        ) : (
          <p className="text-center">No Data Found!</p>
        )}
        <hr className="bg-[#EAECF0] mb-5 mt-10" />
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default AllStudyCircle;
