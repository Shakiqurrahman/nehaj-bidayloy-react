import React, { useState } from "react";
import AuthorCard from "../components/Cards/AuthorCard";
import Pagination from "../components/Pagination";

const AuthorsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="pt-[180px] sm:pb-[70px] max-width">
      <div>
        <h1 className="section_title">নেহাজের লেখকবৃন্দ</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <AuthorCard key={i} />
          ))}
        </div>
        <hr className="bg-[#EAECF0] mb-5 mt-10" />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={10}
          onPageChange={handlePageChange}
          totalItems={100}
        />
      </div>
    </section>
  );
};

export default AuthorsPage;
