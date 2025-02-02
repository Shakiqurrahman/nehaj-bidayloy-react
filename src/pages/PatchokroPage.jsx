import React from "react";
import CardthumbnailImg from "../assets/images/noticeImage.png";
import PatchokroCard from "../components/Cards/PatchokroCard";
import RecentEventBanner from "../components/RecentEventBanner";

const PatchokroPage = () => {
  const allPosts = [
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "ষষ্ঠ সেশন",
      date: new Date(),
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "ষষ্ঠ সেশন",
      date: new Date(),
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "ষষ্ঠ সেশন",
      date: new Date(),
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "ষষ্ঠ সেশন",
      date: new Date(),
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "ষষ্ঠ সেশন",
      date: new Date(),
    },
    {
      thumbnail: CardthumbnailImg,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "ষষ্ঠ সেশন",
      date: new Date(),
    },
  ];
  return (
    <div className="pt-[200px]">
      <RecentEventBanner title="সাম্প্রতিক পাঠচক্র" />
      {/* সমস্ত পাঠচক্র section */}
      <div className="my-[60px] sm:my-[100px] max-width">
        <h1 className="font-niladri text-primary-blue text-2xl mb-10">
          সমস্ত পাঠচক্র
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-10">
          {allPosts?.map((item, i) => (
            <PatchokroCard
              key={i}
              categoryName={item?.categoryName}
              date={item?.date}
              desc={item?.desc}
              thumbnail={item?.thumbnail}
              title={item?.title}
              link={item?.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatchokroPage;
