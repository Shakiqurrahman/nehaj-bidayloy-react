import React from "react";
import img from "../../assets/images/noticeImage.png";

const NoticeCards = () => {
  return (
    <section className="max-width">
      <h1 className="section_title">সমস্ত বিজ্ঞপ্তিসমূহ</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index}>
            <img src={img} alt="picture of notice" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NoticeCards;
