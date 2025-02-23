import React, { useState } from "react";
import PatchokroCard from "../components/Cards/PatchokroCard";
import Pagination from "../components/Pagination";
import RecentEventBanner from "../components/RecentEventBanner";
import {
  useFetchStudyCircleQuery,
  useGet3StudyCircleQuery,
} from "../Redux/api/studyCircleApiSlice";

const PatchokroPage = () => {
  const { data: latest } = useGet3StudyCircleQuery();
  const { data: allPosts } = useFetchStudyCircleQuery();

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-[200px]">
      <RecentEventBanner title="সাম্প্রতিক পাঠচক্র" data={latest} />
      {/* সমস্ত পাঠচক্র section */}
      <div className="my-[60px] sm:my-[100px] max-width">
        <h1 className="font-niladri text-primary-blue text-2xl mb-10">
          সমস্ত পাঠচক্র
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-10">
          {allPosts?.map((item, i) => {
            const dateStr = item?.date;
            const [day, month, year] = dateStr.split("/");

            const date = new Date(year, month - 1, day);
            return (
              <PatchokroCard
                key={i}
                session={item?.session}
                date={new Date(date)}
                desc={item?.description}
                thumbnail={item?.thumbnail?.url}
                title={item?.title}
                link={item?._id}
              />
            );
          })}
        </div>
        <hr className="bg-[#EAECF0] mb-5 mt-10" />
        <Pagination
          currentPage={currentPage}
          itemsPerPage={10}
          onPageChange={handlePageChange}
          totalItems={100}
        />
      </div>
    </div>
  );
};

export default PatchokroPage;
