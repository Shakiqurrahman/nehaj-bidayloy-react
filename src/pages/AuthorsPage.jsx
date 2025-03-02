import React, { useState } from "react";
import AuthorCard from "../components/Cards/AuthorCard";
import Pagination from "../components/Pagination";
import AuthorCardSkeleton from "../components/skeleton/AuthorCardSkeleton";
import { useFetchAuthorsQuery } from "../Redux/api/authorApiSlice";

const AuthorsPage = () => {
  const { data: authors, isLoading } = useFetchAuthorsQuery();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="pt-[180px] sm:pb-[70px] max-width">
      <div>
        <h1 className="section_title">নেহাজের লেখকবৃন্দ</h1>
        <div className="grid grid-cols-3 gap-4 sm:gap-8">
          {isLoading ? (
            <>
              {Array.from({ length: 9 }).map((_, index) => (
                <AuthorCardSkeleton key={index} />
              ))}
            </>
          ) : authors && authors?.length > 0 ? (
            authors?.map((author, i) => (
              <AuthorCard authorData={author} key={i} />
            ))
          ) : (
            <p className="text-center">No authors found!</p>
          )}
        </div>
        {authors?.length > 20 && (
          <>
            <hr className="bg-[#EAECF0] mb-5 mt-10" />
            <Pagination
              currentPage={currentPage}
              itemsPerPage={10}
              onPageChange={handlePageChange}
              totalItems={100}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default AuthorsPage;
