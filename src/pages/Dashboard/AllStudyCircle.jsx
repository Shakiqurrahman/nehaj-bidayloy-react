import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import CardthumbnailImg from "../../assets/images/noticeImage.png";
import StudyCircleCard from "../../components/Dashboard/StudyCircleCard";
import Loading from "../../utils/Loading";

const AllStudyCircle = () => {
  const isLoading = false;

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

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="min-h-[calc(100vh_-_96px)]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-[28px] font-semibold leading-none">
            Study Circle
          </h1>
          <Link
            to={"create"}
            className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
          >
            <FiPlusCircle />
            Create new
          </Link>
        </div>
        <span className="block w-full h-px bg-black/20 my-5"></span>
        {allPosts && allPosts?.length > 0 ? (
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {allPosts?.map((item, i) => (
              <StudyCircleCard key={i} data={item} />
            ))}
          </div>
        ) : (
          <p className="text-center">No Data Found!</p>
        )}
      </section>
    </>
  );
};

export default AllStudyCircle;
