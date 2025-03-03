import React, { useState } from "react";
import {
  useFetchNoticeQuery,
  useGet3NoticeQuery,
} from "../Redux/api/noticeApiSlice";
import NoticeCards from "../components/Cards/NoticeCards";
import RecentEventBanner from "../components/RecentEventBanner";

const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: latest } = useGet3NoticeQuery();
  const { data: response, isLoading } = useFetchNoticeQuery({
    page: Number(currentPage) || 1,
  });

  const { data: notices, meta } = response || {};
  return (
    <section className="pt-[200px] sm:pb-[70px]">
      <RecentEventBanner
        title="সাম্প্রতিক বিজ্ঞপ্তি"
        data={latest}
        isLoading={isLoading}
      />

      {/* Notice section  */}
      <NoticeCards
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        notices={notices}
        meta={meta}
        isLoading={isLoading}
      />

      {!isLoading && notices && notices?.length === 0 && (
        <p className="text-center">No notice available right now!</p>
      )}
    </section>
  );
};

export default Notice;
