import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import cardThumbnail from "../assets/images/cardImg.png";
import CardthumbnailImg from "../assets/images/Cardthumbnail.png";
import categoryImg from "../assets/images/categoryImg.png";
import onubadCardBgImage from "../assets/images/onubadCardBgImage.png";
import CategoryCard from "../components/Cards/CategoryCard";
import CategoryCardWithButton from "../components/Cards/CategoryCardWithButton";
import TranslateCard from "../components/Cards/TranslateCard";
import Pagination from "../components/Pagination";
import { useFetchStoriesQuery } from "../Redux/api/storyApiSlice";

const GenrePage = () => {
  const location = useLocation();
  const path = location?.pathname;
  const pathName = path.split("/").pop();

  const { genreSlug } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const { data: response, isLoading } = useFetchStoriesQuery(
    {
      genre: genreSlug,
      page: Number(currentPage) || 1,
    },
    {
      skip: !genreSlug,
    }
  );

  const { data: stories, meta } = response || {};
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const mostReadPosts = [
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
    {
      thumbnail: cardThumbnail,
      title: "মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল",
      desc: `যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। `,
      link: "",
      categoryName: "চিন্তা",
      genreType: "প্রবন্ধ",
    },
  ];

  const translateCardData = {
    bgImage: onubadCardBgImage,
    title: "অনুবাদ",
    desc: `"নেহাজ করে জানতে হয়"। মানুষের মাঝে নিহিত যে অমিত সম্ভাবনা বা পটেনশিয়াল, যে "ভাষাময়" অস্তিত্ব মানুষের যাপনরে "পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়।`,
    link: "",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "quotes-slider",
    autoplay: true,
  };

  return (
    <>
      <div
        className="h-[500px] sm:h-[600px] lg:h-[1000px] object-center object-cover shadow-sm rounded-[30px]"
        style={{ backgroundImage: `url(${categoryImg})` }}
      ></div>

      {/* অনুবাদ card section */}
      {translateCardData && (
        <div className="mt-[60px] sm:mt-[100px]">
          <TranslateCard
            bgImage={translateCardData?.bgImage}
            title={translateCardData?.title}
            desc={translateCardData?.desc}
            link={translateCardData?.link}
          />
        </div>
      )}

      {/* সর্বাধিক পঠিত section */}
      <div
        className={`py-10 sm:py-20 px-4 rounded-[30px] text-white ${
          pathName === "article"
            ? "bg-probondho"
            : pathName === "notes"
            ? "bg-notes"
            : "bg-onubadh"
        }`}
      >
        <div className="max-width">
          <h2 className="text-center text-lg font-niladri">সর্বাধিক পঠিত</h2>
          <p className="text-center w-full md:w-3/4 mx-auto sm:text-lg mt-5 mb-10">
            নেহাজে প্রকাশিত চিন্তা বিষয়ক প্রবন্ধ, অনুবাদসমূহ থেইকা সবচে’ বেশীবার
            পঠিত লেখাগুলা আপনি পড়তে পারে এইখান থেকে। এই আ‍র্কাইভ প্রতি মাসের
            পরিসংখ্যানের উপর নির্ভর করে রিশাফল হইবে।
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[60px]">
            {mostReadPosts?.map((item, i) => (
              <CategoryCardWithButton
                key={i}
                thumbnail={item?.thumbnail}
                title={item?.title}
                desc={item?.desc}
                link={item?.link}
                categoryName={item?.categoryName}
                genreType={item?.genreType}
              />
            ))}
          </div>
        </div>
      </div>

      {/* সমস্ত লেখা section */}
      <div className="my-[60px] sm:my-[100px] max-width">
        <h1 className="font-niladri text-primary-blue text-2xl mb-10">
          সমস্ত লেখা
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-10">
          {stories?.map((item, i) => (
            <CategoryCard
              key={i}
              categoryName={item?.category?.name}
              date={item?.createdAt}
              desc={item?.shortDescription}
              genreType={item?.genre?.name}
              thumbnail={item?.thumbnail?.url}
              title={item?.title}
              writer={item?.authorId?.fullName}
              link={`${item?._id}`}
            />
          ))}
        </div>
        <hr className="bg-[#EAECF0] mb-5 mt-10" />
        <Pagination
          currentPage={currentPage}
          totalPages={Number(meta?.totalPages) || 0}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default GenrePage;
