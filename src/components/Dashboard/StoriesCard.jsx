import React from "react";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDeleteStoryMutation } from "../../Redux/api/storyApiSlice";

const StoriesCard = ({ storyData }) => {
  const [DeleteStory] = useDeleteStoryMutation();

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = storyData?._id;
    if (id) {
      try {
        const res = await DeleteStory(id).unwrap();
        if (res?.success) {
          toast.success(res?.message);
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to delete story!");
      }
    }
  };

  return (
    <div className="p-3 bg-white rounded-lg relative group overflow-hidden">
      <div className="absolute top-4 right-4 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 translate-x-[50px] group-hover:translate-x-0">
        <Link
          to={"edit"}
          state={storyData}
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
        src={storyData?.thumbnail?.url}
        className="w-full block object-cover"
        alt={storyData?.thumbnail?.name}
      />
      <Link
        className="line-clamp-1 font-ador text-lg text-primary-blue mt-5"
        title={storyData?.title}
      >
        {storyData?.title}
      </Link>
      <p className="line-clamp-2 my-3">{storyData?.shortDescription}</p>
      <span className="h-px w-full bg-black/20 block my-3"></span>
      <div className="flex justify-center gap-2 items-center">
        <Link className="font-ador text-primary-blue">
          {storyData?.authorId?.fullName}
        </Link>
        <span className="block w-px h-5 bg-black/20"></span>
        <Link className="font-ador  text-primary-blue">
          {storyData?.category?.name}
        </Link>
      </div>
    </div>
  );
};

export default StoriesCard;
