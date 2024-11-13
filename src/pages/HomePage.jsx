import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../assets/images/images-alt.jpg";

const HomePage = () => {
  const genre = [
    {
      genreSlug: "article",
      genreName: "প্রবন্ধ",
    },
    {
      genreSlug: "notes",
      genreName: "নোটস",
    },
    {
      genreSlug: "translation",
      genreName: "অনুবাদ",
    },
  ];
  return (
    <div className="max-width my-20">
      {genre?.length > 0 &&
        genre?.map((item, index) => (
          <div key={index} className="mb-10 group/parent">
            <Link
              to={`/genre/${item?.genreSlug}`}
              className="text-2xl font-ador mb-10 inline-block border-b-2 border-black hover:border-primary hover:text-primary duration-300"
            >
              {item.genreName}
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <div className="border-t-[3px] border-primary pt-5">
                <Link to={""} className="block w-full">
                  <div className="relative group">
                    <img
                      src={thumbnail}
                      alt="Himu"
                      className="w-full block object-cover rounded-md"
                    />
                    <div className="absolute top-0 left-0 w-full h-full block rounded-md z-[1] bg-transparent group-hover:bg-black/30 duration-300"></div>
                  </div>
                  <h1
                    className="text-lg font-bold mt-3 mb-1 hover:text-primary duration-300 line-clamp-1"
                    title="হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি"
                  >
                    হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
                  </h1>
                </Link>
                <div className="flex items-center gap-3">
                  <Link to={""} className="hover:text-primary duration-300">
                    শাকিকুর রহমান
                  </Link>
                  <div className="h-[20px] w-[2px] bg-primary"></div>
                  <Link
                    to={""}
                    className="font-ador hover:text-primary duration-300"
                  >
                    সাহিত্য
                  </Link>
                </div>
              </div>
              <div className="border-t-[3px] border-primary pt-5">
                <Link to={""} className="block w-full">
                  <div className="relative group">
                    <img
                      src={thumbnail}
                      alt="Himu"
                      className="w-full block object-cover rounded-md"
                    />
                    <div className="absolute top-0 left-0 w-full h-full block rounded-md z-[1] bg-transparent group-hover:bg-black/30 duration-300"></div>
                  </div>
                  <h1
                    className="text-lg font-bold mt-3 mb-1 hover:text-primary duration-300 line-clamp-1"
                    title="হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি"
                  >
                    হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
                  </h1>
                </Link>
                <div className="flex items-center gap-3">
                  <Link to={""} className="hover:text-primary duration-300">
                    শাকিকুর রহমান
                  </Link>
                  <div className="h-[20px] w-[2px] bg-primary"></div>
                  <Link
                    to={""}
                    className="font-ador hover:text-primary duration-300"
                  >
                    সাহিত্য
                  </Link>
                </div>
              </div>
              <div className="border-t-[3px] border-primary pt-5">
                <Link to={""} className="block w-full">
                  <div className="relative group">
                    <img
                      src={thumbnail}
                      alt="Himu"
                      className="w-full block object-cover rounded-md"
                    />
                    <div className="absolute top-0 left-0 w-full h-full block rounded-md z-[1] bg-transparent group-hover:bg-black/30 duration-300"></div>
                  </div>
                  <h1
                    className="text-lg font-bold mt-3 mb-1 hover:text-primary duration-300 line-clamp-1"
                    title="হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি"
                  >
                    হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
                  </h1>
                </Link>
                <div className="flex items-center gap-3">
                  <Link to={""} className="hover:text-primary duration-300">
                    শাকিকুর রহমান
                  </Link>
                  <div className="h-[20px] w-[2px] bg-primary"></div>
                  <Link
                    to={""}
                    className="font-ador hover:text-primary duration-300"
                  >
                    সাহিত্য
                  </Link>
                </div>
              </div>
              <div className="border-t-[3px] border-primary pt-5">
                <Link to={""} className="block w-full">
                  <div className="relative group">
                    <img
                      src={thumbnail}
                      alt="Himu"
                      className="w-full block object-cover rounded-md"
                    />
                    <div className="absolute top-0 left-0 w-full h-full block rounded-md z-[1] bg-transparent group-hover:bg-black/30 duration-300"></div>
                  </div>
                  <h1
                    className="text-lg font-bold mt-3 mb-1 hover:text-primary duration-300 line-clamp-1"
                    title="হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি"
                  >
                    হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
                  </h1>
                </Link>
                <div className="flex items-center gap-3">
                  <Link to={""} className="hover:text-primary duration-300">
                    শাকিকুর রহমান
                  </Link>
                  <div className="h-[20px] w-[2px] bg-primary"></div>
                  <Link
                    to={""}
                    className="font-ador hover:text-primary duration-300"
                  >
                    সাহিত্য
                  </Link>
                </div>
              </div>
              <div className="border-t-[3px] border-primary pt-5">
                <Link to={""} className="block w-full">
                  <div className="relative group">
                    <img
                      src={thumbnail}
                      alt="Himu"
                      className="w-full block object-cover rounded-md"
                    />
                    <div className="absolute top-0 left-0 w-full h-full block rounded-md z-[1] bg-transparent group-hover:bg-black/30 duration-300"></div>
                  </div>
                  <h1
                    className="text-lg font-bold mt-3 mb-1 hover:text-primary duration-300 line-clamp-1"
                    title="হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি"
                  >
                    হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
                  </h1>
                </Link>
                <div className="flex items-center gap-3">
                  <Link to={""} className="hover:text-primary duration-300">
                    শাকিকুর রহমান
                  </Link>
                  <div className="h-[20px] w-[2px] bg-primary"></div>
                  <Link
                    to={""}
                    className="font-ador hover:text-primary duration-300"
                  >
                    সাহিত্য
                  </Link>
                </div>
              </div>
              <div className="border-t-[3px] border-primary pt-5">
                <Link to={""} className="block w-full">
                  <div className="relative group">
                    <img
                      src={thumbnail}
                      alt="Himu"
                      className="w-full block object-cover rounded-md"
                    />
                    <div className="absolute top-0 left-0 w-full h-full block rounded-md z-[1] bg-transparent group-hover:bg-black/30 duration-300"></div>
                  </div>
                  <h1
                    className="text-lg font-bold mt-3 mb-1 hover:text-primary duration-300 line-clamp-1"
                    title="হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি"
                  >
                    হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর
                    প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
                  </h1>
                </Link>
                <div className="flex items-center gap-3">
                  <Link to={""} className="hover:text-primary duration-300">
                    শাকিকুর রহমান
                  </Link>
                  <div className="h-[20px] w-[2px] bg-primary"></div>
                  <Link
                    to={""}
                    className="font-ador hover:text-primary duration-300"
                  >
                    সাহিত্য
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-black/20 mx-auto mt-20 group-last/parent:hidden"></div>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
