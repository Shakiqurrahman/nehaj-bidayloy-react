import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const CreateCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    categoryName: "",
    categorySlug: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { categoryName, categorySlug } = form;
    if (categoryName && categorySlug) {
      console.log(form);
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
            name="categoryName"
            value={form.categoryName}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary peer-focus-visible:mt-[2px] inline-block ${
              form.categoryName
                ? "text-xs top-0 z-[2] text-primary mt-[2px]"
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
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary peer-focus-visible:mt-[2px] inline-block ${
              form.categorySlug
                ? "text-xs top-0 z-[2] text-primary mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Category Slug
          </label>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="disabled:bg-primary-300 flex items-center justify-center w-full text-center h-11 bg-primary-500 hover:bg-primary-700 text-white font-medium mt-5 duration-300 rounded select-none"
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
