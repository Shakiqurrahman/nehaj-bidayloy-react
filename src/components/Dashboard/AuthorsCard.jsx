import React from "react";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDeleteAuthorMutation } from "../../Redux/api/authorApiSlice";

const AuthorsCard = ({ authorData }) => {
  const [DeleteAuthor] = useDeleteAuthorMutation();

  const deleteAnAuthor = async (authorId) => {
    if (authorId) {
      try {
        await DeleteAuthor(authorId).unwrap();
        toast.success("Author Deleted Successfully!");
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to delete an author!");
      }
    }
  };
  return (
    <div className="w-full flex items-center gap-4 p-8 bg-white max-w-[700px] rounded-2xl border group relative overflow-hidden">
      <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
        <Link
          to={"edit"}
          state={authorData}
          className="bg-white shadow-box rounded-sm size-8 text-black hover:text-blue-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
        >
          <FiEdit />
        </Link>
        <button
          className="bg-white shadow-box rounded-sm size-8 text-black hover:text-red-600 mb-2 flex items-center justify-center text-base hover:shadow-box-lg duration-300"
          onClick={() => deleteAnAuthor(authorData?._id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <img
        src={authorData?.avatar?.url}
        alt="Author Image"
        className="object-cover size-28 rounded-full shrink-0 object-top"
      />
      <div className="space-y-1">
        <h3 className="text-lg line-clamp-1 font-semibold text-primary-blue">
          {authorData?.fullName}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-5">{authorData?.bio}</p>
        <p className="text-sm font-medium">
          Total Writings : {authorData?.authoredWorks?.length}
        </p>
      </div>
    </div>
  );
};

export default AuthorsCard;
