import React, { useRef } from "react";
import Pagination from "../Pagination";

const NoticeCards = ({
  currentPage,
  setCurrentPage,
  notices,
  meta,
  isLoading,
}) => {
  const cardsBlockRef = useRef(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section ref={cardsBlockRef} className="max-width">
      <h1 className="section_title">সমস্ত বিজ্ঞপ্তিসমূহ</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {isLoading ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-full animate-pulse">
                <div className="w-full h-[400px] bg-gray-300 rounded-lg"></div>
              </div>
            ))}
          </>
        ) : (
          notices &&
          notices?.map((note, index) => (
            <div key={index}>
              <img
                src={note?.thumbnail?.url}
                alt="picture of notice"
                className="w-full object-cover rounded-lg"
              />
            </div>
          ))
        )}
      </div>
      {!isLoading && meta?.totalPages > 1 && (
        <>
          <hr className="bg-[#EAECF0] mb-5 mt-10" />
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={Number(meta?.totalPages) || 0}
            scrollRef={cardsBlockRef}
          />
        </>
      )}
    </section>
  );
};

export default NoticeCards;
