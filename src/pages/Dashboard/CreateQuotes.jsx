import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../Redux/api/categoryApiSlice";
import { useCreateQuoteMutation } from "../../Redux/api/quotesApiSlice";
import { API_URL } from "../../utils/config";

const CreateQuotes = () => {
  const navigate = useNavigate();
  const { data: categoryList } = useGetCategoriesQuery();
  const [CreateQuote, { isLoading }] = useCreateQuoteMutation();

  const [form, setForm] = useState({
    quotes: "",
    authorName: "",
    thumbnail: null,
    authorImage: null,
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isUploading2, setIsUploading2] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleThumbnailChange = async (e) => {
    const file = e.target.files[0];
    setSelectedThumbnail(file);
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("thumbnail", file);
      const url = API_URL + "/upload";
      try {
        const res = await axios.post(url, formData);
        if (res.status === 200) {
          const imgObject = {
            name: file.name,
            url: res.data.imageUrl,
          };
          setForm((prev) => ({ ...prev, thumbnail: imgObject }));
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to upload image!");
      }

      setIsUploading(false);
      e.target.value = "";
    }
  };

  const handleRemoveThumbnail = (e) => {
    e.preventDefault();
    setSelectedThumbnail(null);
    setForm((prev) => ({
      ...prev,
      thumbnail: null,
    }));
  };

  const handleAuthorChange = async (e) => {
    const file = e.target.files[0];
    setSelectedAuthor(file);
    if (file) {
      setIsUploading2(true);
      const formData = new FormData();
      formData.append("thumbnail", file);
      const url = API_URL + "/upload";
      try {
        const res = await axios.post(url, formData);
        if (res.status === 200) {
          const imgObject = {
            name: file.name,
            url: res.data.imageUrl,
          };
          setForm((prev) => ({ ...prev, authorImage: imgObject }));
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to upload image!");
      }

      setIsUploading2(false);
      e.target.value = "";
    }
  };

  const handleRemoveAuthor = (e) => {
    e.preventDefault();
    setSelectedAuthor(null);
    setForm((prev) => ({
      ...prev,
      authorImage: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { authorName, quotes, authorImage, thumbnail } = form;
    if (selectedCategory && authorName && quotes && authorImage && thumbnail) {
      const quotesData = {
        ...form,
        category: {
          id: selectedCategory?._id,
          name: selectedCategory?.category,
          slug: selectedCategory?.categorySlug,
        },
      };
      try {
        const res = await CreateQuote(quotesData).unwrap();
        if (res?.success) {
          toast.success(res?.message);
          navigate("/admin-dashboard/quotes");
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Failed to create a quote!");
      }
    } else {
      toast.error("Please fill up every field!");
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
            name="authorName"
            value={form?.authorName}
            onChange={handleChange}
            className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
          />
        </div>
        <div className="mt-5">
          <label className="block mb-2">Quote</label>
          <textarea
            type="text"
            name="quotes"
            value={form?.quotes}
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
              className={`mx-auto block w-full rounded shadow-box object-cover mb-5 ${
                isUploading ? "blur" : ""
              }`}
            />
            <button
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              type="button"
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
              className={`mx-auto block size-[100px] rounded-full object-cover object-top mb-5 ${
                isUploading2 ? "blur" : ""
              }`}
            />
            <button
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              type="button"
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
            onChange={(e) => setSelectedCategory(JSON.parse(e.target.value))}
          >
            {!selectedCategory && <option value="">Select a category</option>}
            {categoryList?.map((category, index) => (
              <option value={JSON.stringify(category)} key={index}>
                {category?.category}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={isLoading || isUploading || isUploading2}
          className="disabled:bg-primary-blue/50 flex items-center justify-center w-[200px] mx-auto text-center h-11 bg-primary-blue hover:bg-primary-blue text-white font-medium mt-5 duration-300 rounded select-none"
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
