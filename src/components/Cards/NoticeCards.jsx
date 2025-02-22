import React, { useState } from "react";
import { useFetchNoticeQuery } from "../../Redux/api/noticeApiSlice";
import Pagination from "../Pagination";

const NoticeCards = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: notices } = useFetchNoticeQuery();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="max-width">
      <h1 className="section_title">সমস্ত বিজ্ঞপ্তিসমূহ</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {notices &&
          notices?.map((note, index) => (
            <div key={index}>
              <img
                src={note?.thumbnail?.url}
                alt="picture of notice"
                className="w-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <hr className="bg-[#EAECF0] mb-5 mt-10" />
      <Pagination
        currentPage={currentPage}
        itemsPerPage={10}
        onPageChange={handlePageChange}
        totalItems={100}
      />
    </section>
  );
};

export default NoticeCards;
