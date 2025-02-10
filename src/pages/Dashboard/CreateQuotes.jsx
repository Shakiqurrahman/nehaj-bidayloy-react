import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useGetCategoriesQuery } from "../../Redux/api/categoryApiSlice";

const CreateQuotes = () => {
  const { data: categoryList } = useGetCategoriesQuery();

  const [form, setForm] = useState({
    text: "",
    author: "",
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedThumbnail(file);
      e.target.value = "";
    }
  };

  const handleRemoveThumbnail = () => {
    setSelectedThumbnail(null);
  };

  const handleAuthorChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedAuthor(file);
      e.target.value = "";
    }
  };

  const handleRemoveAuthor = () => {
    setSelectedAuthor(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { author, text } = form;
    if (
      selectedCategory &&
      selectedAuthor &&
      selectedThumbnail &&
      author &&
      text
    ) {
      console.log(form, selectedCategory, selectedAuthor, selectedThumbnail);
    }
  };
  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[800px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Create A Quote
        </h1>
        <div className="mt-5">
          <label className="block mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={form?.author}
            onChange={handleChange}
            className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2">Quote</label>
          <textarea
            type="text"
            name="text"
            value={form?.text}
            onChange={handleChange}
            className="block w-full h-[150px] py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none resize-y"
          ></textarea>
        </div>
        <div className="mt-5">
          <input
            type="file"
            name="bgImage"
            id="bgImage"
            hidden
            onChange={handleThumbnailChange}
          />
          <label
            htmlFor="bgImage"
            className="flex w-full items-center gap-2 bg-gray-200 cursor-pointer rounded overflow-hidden"
          >
            <div className="py-2 px-3 bg-primary-blue text-white shrink-0">
              Add Thumbnail
            </div>
            <p className="line-clamp-1 font-ador">{selectedThumbnail?.name}</p>
          </label>
        </div>
        {selectedThumbnail && (
          <div className="relative mt-5 text-center">
            <img
              src={URL.createObjectURL(selectedThumbnail)}
              alt={selectedThumbnail?.name}
              className="mx-auto block w-full rounded shadow-box object-cover mb-5"
            />
            <button
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              onClick={handleRemoveThumbnail}
            >
              Remove
            </button>
          </div>
        )}
        <div className="mt-5">
          <input
            type="file"
            name="authorImg"
            id="authorImg"
            hidden
            onChange={handleAuthorChange}
          />
          <label
            htmlFor="authorImg"
            className="flex w-full items-center gap-2 bg-gray-200 cursor-pointer rounded overflow-hidden"
          >
            <div className="py-2 px-3 bg-primary-blue text-white shrink-0">
              Add Author Image
            </div>
            <p className="line-clamp-1 font-ador">{selectedAuthor?.name}</p>
          </label>
        </div>
        {selectedAuthor && (
          <div className="relative mt-5 text-center">
            <img
              src={URL.createObjectURL(selectedAuthor)}
              alt={selectedAuthor?.name}
              className="mx-auto block size-[100px] rounded-full object-cover object-top mb-5"
            />
            <button
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              onClick={handleRemoveAuthor}
            >
              Remove
            </button>
          </div>
        )}
        <div className="mt-5 w-full sm:w-1/2">
          <label className="block mb-2">Category</label>
          <select
            className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categoryList?.map((category, index) => (
              <option value={category?.category} key={index}>
                {category?.category}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="disabled:bg-primary-blue flex items-center justify-center w-[200px] mx-auto text-center h-11 bg-primary-blue hover:bg-primary-blue text-white font-medium mt-5 duration-300 rounded select-none"
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

export default CreateQuotes;
