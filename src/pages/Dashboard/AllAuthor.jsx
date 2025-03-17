import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useFetchAuthorsQuery } from "../../Redux/api/authorApiSlice";
import AuthorsCard from "../../components/Dashboard/AuthorsCard";
import Pagination from "../../components/Pagination";
import Loading from "../../utils/Loading";

const AllAuthor = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: response, isLoading } = useFetchAuthorsQuery({
    page: Number(currentPage) || 1,
    limit: 12,
  });
  const { data: authors, meta } = response || {};

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

        {authors && authors?.length > 0 ? (
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
            {authors?.slice(0, 15).map((author, idx) => (
              <AuthorsCard key={idx} authorData={author} />
            ))}
          </div>
        ) : (
          <p className="text-center">No Data Found!</p>
        )}
        <hr className="bg-[#EAECF0] mb-5 mt-10" />
        {!isLoading && meta?.totalPages > 1 && (
          <>
            <hr className="bg-[#EAECF0] mb-5 mt-10" />
            <Pagination
              currentPage={currentPage}
              totalPages={Number(meta?.totalPages) || 0}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </section>
    </>
  );
};

export default AllAuthor;
