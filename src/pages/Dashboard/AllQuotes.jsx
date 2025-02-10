import React from "react";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import articlesBgImage from "../../assets/images/articlesBgImage.png";
import articlesThumbnail from "../../assets/images/articlesThumbnail.png";

const AllQuotes = () => {
  const articlesArray = [
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
    {
      bgImage: articlesBgImage,
      thumbnail: articlesThumbnail,
      text: `"পার্টিকুলার" আর সার্থক কইরা তোলে, যার জোরে মানুষ নিঃশেষিত না হইতে সক্ষম কোনো বাঁধাধরা নিয়ম শৃঙ্খলায়। এই অমিত সম্ভাবনার বরাতে যে অভিনিবেশ আর লিপ্ততা আমাদের পাঠ আর চিন্তা চর্চায়, সত্য অনুসন্ধানে, ওইটারেই "নেহাজ" কই আমরা।`,
      writer: `এরিস্টটল`,
    },
  ];
  return (
    <section className="min-h-[calc(100vh_-_96px)]">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-semibold leading-none">Quotes</h1>
        <Link
          to={"create"}
          className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
        >
          <FiPlusCircle />
          Create new
        </Link>
      </div>
      <span className="block w-full h-px bg-black/20 my-5"></span>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {articlesArray?.map((item, i) => (
          <div key={i}>
            <div
              className="rounded-[30px] text-white py-10 text-center px-5 sm:px-10 bg-cover relative group overflow-hidden"
              style={{
                backgroundImage: `url(${item?.bgImage}), linear-gradient(to right, rgba(0,46,93,0.6), rgba(0,46,93,0.6)`,
              }}
            >
              <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
                <Link
                  to={"edit"}
                  className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                >
                  <FiEdit />
                </Link>
                <button className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300">
                  <RiDeleteBin6Line />
                </button>
              </div>
              <div className="max-width font-mainak-signature text-lg md:text-xl">
                <img
                  src={item?.thumbnail}
                  alt=""
                  className="block size-[100px] rounded-full mx-auto"
                />
                <p className="line-clamp-4 my-10 leading-[2]">{item?.text}</p>
                <h1>{item?.writer}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllQuotes;
