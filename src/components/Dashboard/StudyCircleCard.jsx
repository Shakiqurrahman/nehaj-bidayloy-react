import React from "react";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDeleteStudyCircleMutation } from "../../Redux/api/studyCircleApiSlice";
import { convertToBanglaDate } from "../../utils/convertToBanglaDate";

const StudyCircleCard = ({ data }) => {
  const [DeleteStudyCircle] = useDeleteStudyCircleMutation();

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = data?._id;
    if (id) {
      try {
        const res = await DeleteStudyCircle(id).unwrap();
        if (res?.success) {
          toast.success(res?.message);
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to delete study circle!");
      }
    }
  };

  const dateStr = data?.date;
  const [day, month, year] = dateStr.split("/");

  const date = new Date(year, month - 1, day);

  const banglaDate = convertToBanglaDate(new Date(date));
  return (
    <div className="relative group overflow-hidden">
      <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
        <Link
          to={"edit"}
          state={data}
          className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
        >
          <FiEdit />
        </Link>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <img
        src={data?.thumbnail?.url}
        alt=""
        className="w-full rounded-[30px] block shadow"
      />
      <div className="text-accent-golden mt-5">
        <p>{banglaDate}</p>
      </div>
      <Link
        to={`study-circle/${data?._id}`}
        className="flex items-start gap-5 font-niladri text-lg lg:text-2xl text-primary-blue line-clamp-2"
      >
        {data?.title} <MdArrowOutward className="shrink-0" />
      </Link>
      <p className="line-clamp-3 my-5">{data?.description}</p>
      <div className="flex items-center gap-2">
        <span
          className={`block px-5 py-1 text-sm rounded-[30px] bg-alert-orange text-white`}
        >
          পাঠচক্র
        </span>
        <span className="block px-5 py-1 text-sm rounded-[30px] bg-alert-green text-white">
          {data?.session}
        </span>
      </div>
    </div>
  );
};

export default StudyCircleCard;
