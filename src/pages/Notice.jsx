import React from "react";
import NoticeCards from "../components/Cards/NoticeCards";
import RecentEventBanner from "../components/RecentEventBanner";

const Notice = () => {
  return (
    <section className="pt-[200px] pb-[70px]">
      <RecentEventBanner title="সাম্প্রতিক বিজ্ঞপ্তি" />

      {/* Notice section  */}
      <NoticeCards />
    </section>
  );
};

export default Notice;
