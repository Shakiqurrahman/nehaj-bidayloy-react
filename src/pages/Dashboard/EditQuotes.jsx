import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../Redux/api/categoryApiSlice";
import { useUpdateQuoteMutation } from "../../Redux/api/quotesApiSlice";
import { API_URL } from "../../utils/config";

const EditQuotes = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { data: categoryList } = useGetCategoriesQuery();
  const [UpdateQuote, { isLoading }] = useUpdateQuoteMutation();

  const [form, setForm] = useState({
    quotes: state?.quotes || "",
    authorName: state?.authorName || "",
    thumbnail: state?.thumbnail || null,
    authorImage: state?.authorImage || null,
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    state?.category || ""
  );
  const [isUploading, setIsUploading] = useState(false);
  const [isUploading2, setIsUploading2] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChangeCategory = (e) => {
    const id = e.target.value;
    const selected = categoryList?.find((category) => category?._id === id);
    setSelectedCategory(selected);
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
    if (
      authorImage?.url !== state?.authorImage?.url ||
      quotes !== state?.quotes ||
      authorName !== state?.authorName ||
      thumbnail?.url !== state?.thumbnail?.url ||
      selectedCategory?.slug !== state?.category?.slug
    ) {
      if (
        selectedCategory &&
        authorName &&
        quotes &&
        authorImage &&
        thumbnail &&
        state?._id
      ) {
        const quotesData = {
          ...form,
          category: {
            id: selectedCategory?._id || selectedCategory?.id,
            name: selectedCategory?.category || selectedCategory?.name,
            slug: selectedCategory?.categorySlug || selectedCategory?.slug,
          },
        };
        try {
          const res = await UpdateQuote({
            quoteId: state?._id,
            quotesData,
          }).unwrap();
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
    } else {
      toast.success("Nothing to change!");
      navigate("/admin-dashboard/quotes");
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[800px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">Edit A Quote</h1>
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
            <p className="line-clamp-1 font-ador">
              {selectedThumbnail?.name || form?.thumbnail?.name}
            </p>
          </label>
        </div>
        {(selectedThumbnail || form?.thumbnail) && (
          <div className="relative mt-5 text-center">
            <img
              src={
                selectedThumbnail
                  ? URL.createObjectURL(selectedThumbnail)
                  : form?.thumbnail?.url
              }
              alt={selectedThumbnail?.name || form?.thumbnail?.name}
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
            <p className="line-clamp-1 font-ador">
              {selectedAuthor?.name || form?.authorImage?.name}
            </p>
          </label>
        </div>
        {(selectedAuthor || form?.authorImage) && (
          <div className="relative mt-5 text-center">
            <img
              src={
                selectedAuthor
                  ? URL.createObjectURL(selectedAuthor)
                  : form?.authorImage?.url
              }
              alt={selectedAuthor?.name || form?.authorImage?.name}
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
            value={selectedCategory?.id || selectedCategory?._id}
            className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
            onChange={handleChangeCategory}
          >
            {!selectedCategory && <option value="">Select a category</option>}
            {categoryList?.map((category, index) => (
              <option value={category?._id} key={index}>
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
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditQuotes;
