import React from "react";
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import Loading from "../../utils/Loading";

import { RiDeleteBin6Line } from "react-icons/ri";
import noticeBgImage from "../../assets/images/noticeImage.png";

const AllNotice = () => {
  const isLoading = false;

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="min-h-[calc(100vh_-_96px)]">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-semibold leading-none">Notice</h1>
          <Link
            to={"create"}
            className="font-medium px-4 py-2 rounded-[30px] border-primary-blue text-primary-blue border-2 hover:border-primary-blue duration-300 flex items-center gap-1 text-sm hover:bg-primary-blue hover:text-white"
          >
            <FiPlusCircle />
            Create new
          </Link>
        </div>
        <span className="block w-full h-px bg-black/20 my-5"></span>
        {[1, 2, 3]?.length > 0 ? (
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8]?.map((note, idx) => (
              <div key={idx} className="w-full relative group overflow-hidden">
                <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
                  <Link
                    to={"edit"}
                    // state={storyData}
                    className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                  >
                    <FiEdit />
                  </Link>
                  <button
                    type="button"
                    // onClick={handleDelete}
                    className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
                <img
                  src={noticeBgImage}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No Data Found!</p>
        )}
      </section>
    </>
  );
};

export default AllNotice;
