import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateGenreMutation } from "../../Redux/api/genreApiSlice";

const EditGenre = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [updateCategory, { isLoading }] = useUpdateGenreMutation();
  const [showInfo, setShowInfo] = useState(false);
  const [form, setForm] = useState({
    genre: state?.genre || "",
    genreSlug: state?.genreSlug || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { genre, genreSlug } = form;
    if (genre !== state?.genre || genreSlug !== state?.genreSlug) {
      try {
        const res = await updateCategory({
          genreId: state?._id,
          genreData: {
            ...form,
          },
        }).unwrap();
        toast.success(res?.message || "Genre updated successfully");
        navigate("/admin-dashboard/genres");
      } catch (error) {
        toast.error(error?.data?.message || "Failed to update genre");
      }
    } else {
      navigate("/admin-dashboard/genres");
      toast.error("Nothing to update");
    }
  };
  return (
    <div>
      <form
        className="max-w-[600px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">Edit A Genre</h1>
        <div className="relative mt-5">
          <input
            type="text"
            name="genre"
            value={form.genre}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.genre
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Genre Name
          </label>
        </div>
        <div className="relative mt-5">
          <input
            type="text"
            name="genreSlug"
            value={form.genreSlug}
            onChange={handleChange}
            onFocus={() => setShowInfo(true)}
            onBlur={() => setShowInfo(false)}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.genreSlug
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Genre Slug
          </label>
        </div>
        {showInfo && (
          <p className="mt-5 text-sm text-red-600">
            Note: Please use small letter for slug and if slug has 2 or many
            words then use (-) after each word and dont use (space). Example:
            (history-thought)
          </p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="disabled:bg-primary-blue flex items-center justify-center w-full text-center h-11 bg-primary-blue hover:bg-primary-blue text-white font-medium mt-5 duration-300 rounded select-none"
        >
          {isLoading ? (
            <CgSpinner className="animate-spin text-xl" />
          ) : (
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditGenre;
