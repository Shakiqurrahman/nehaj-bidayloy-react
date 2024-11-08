import React from "react";
import { Link, useParams } from "react-router-dom";
import thumbnail from "../assets/images/images-alt.jpg";

const GenrePage = () => {
  const { genreSlug } = useParams();
  console.log(genreSlug);
  return (
    <div className="max-width my-10">
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
              প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
              হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Link to={""} className="hover:text-primary duration-300">
              শাকিকুর রহমান
            </Link>
            <div className="h-[20px] w-[2px] bg-primary"></div>
            <Link to={""} className="font-ador hover:text-primary duration-300">
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
              প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
              হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Link to={""} className="hover:text-primary duration-300">
              শাকিকুর রহমান
            </Link>
            <div className="h-[20px] w-[2px] bg-primary"></div>
            <Link to={""} className="font-ador hover:text-primary duration-300">
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
              প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
              হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Link to={""} className="hover:text-primary duration-300">
              শাকিকুর রহমান
            </Link>
            <div className="h-[20px] w-[2px] bg-primary"></div>
            <Link to={""} className="font-ador hover:text-primary duration-300">
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
              প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
              হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Link to={""} className="hover:text-primary duration-300">
              শাকিকুর রহমান
            </Link>
            <div className="h-[20px] w-[2px] bg-primary"></div>
            <Link to={""} className="font-ador hover:text-primary duration-300">
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
              প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
              হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Link to={""} className="hover:text-primary duration-300">
              শাকিকুর রহমান
            </Link>
            <div className="h-[20px] w-[2px] bg-primary"></div>
            <Link to={""} className="font-ador hover:text-primary duration-300">
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
              প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
              হিমুর প্রতিচ্ছবি হিমুর প্রতিচ্ছবি
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <Link to={""} className="hover:text-primary duration-300">
              শাকিকুর রহমান
            </Link>
            <div className="h-[20px] w-[2px] bg-primary"></div>
            <Link to={""} className="font-ador hover:text-primary duration-300">
              সাহিত্য
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
