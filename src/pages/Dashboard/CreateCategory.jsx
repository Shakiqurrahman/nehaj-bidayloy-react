import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useCreateCategoryMutation } from "../../Redux/api/categoryApiSlice";

const CreateCategory = () => {
  const navigate = useNavigate();
  const [CreateCategory, { isLoading }] = useCreateCategoryMutation();
  const [showInfo, setShowInfo] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    category: "",
    categorySlug: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { category, categorySlug } = form;
    if (category && categorySlug) {
      const res = await CreateCategory({ category, categorySlug });
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/admin-dashboard/categories");
      } else if (res?.error) {
        toast.error(res?.error?.data?.message);
        console.log(res);
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };
  return (
    <div>
      <form
        className="max-w-[600px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Create A Category
        </h1>
        <div className="relative mt-5">
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.category
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Category Name
          </label>
        </div>
        <div className="relative mt-5">
          <input
            type="text"
            name="categorySlug"
            value={form.categorySlug}
            onChange={handleChange}
            onFocus={() => setShowInfo(true)}
            onBlur={() => setShowInfo(false)}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.categorySlug
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Category Slug
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
            "Create"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
