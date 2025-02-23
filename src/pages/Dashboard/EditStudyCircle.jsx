import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import PreviewImage from "../../assets/images/preview.jpg";
import { useFetchAuthorsQuery } from "../../Redux/api/authorApiSlice";
import { useUpdateStudyCircleMutation } from "../../Redux/api/studyCircleApiSlice";
import { API_URL } from "../../utils/config";

const EditStudyCircle = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const reverseDate = state?.date?.split("/").reverse().join("-");

  const { data: authors } = useFetchAuthorsQuery();
  const [UpdateStudyCircle, { isLoading }] = useUpdateStudyCircleMutation();

  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    title: state?.title || "",
    date: reverseDate || "",
    session: state?.session || "",
    description: state?.description || "",
    thumbnail: state?.thumbnail || null,
  });

  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(state?.author || null);

  const handleChangeThumbnail = async (e) => {
    const file = e.target.files[0];
    setSelectedThumbnail(file);
    if (file) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("avatar", file);
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangeAuthor = (e) => {
    const id = e.target.value;
    const selected = authors?.find((author) => author?._id === id);
    setSelectedAuthor(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { date, description, session, thumbnail, title } = form;
    if (
      date !== reverseDate ||
      description !== state?.description ||
      session !== state?.session ||
      thumbnail?.url !== state?.thumbnail?.url ||
      title !== state?.title ||
      selectedAuthor?._id !== state?.author?._id
    ) {
      if (
        date &&
        description &&
        session &&
        thumbnail?.url &&
        title &&
        selectedAuthor &&
        state?._id
      ) {
        const formattedDate = form.date.split("-").reverse().join("/");
        const author = selectedAuthor?._id;
        try {
          const studyCircleData = {
            title,
            author,
            date: formattedDate,
            session,
            description,
            thumbnail,
          };
          const res = await UpdateStudyCircle({
            studyCircleId: state?._id,
            studyCircleData,
          }).unwrap();
          toast.success(res?.message);
          navigate("/admin-dashboard/study-circle");
        } catch (error) {
          console.log("Error", error);
          toast.error("Failed to create study circle!");
        }
      } else {
        toast.error("Please fill up every field!");
      }
    } else {
      navigate("/admin-dashboard/study-circle");
      toast.error("Nothing to update");
    }
  };
  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[600px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Edit Study Circle
        </h1>
        <div className="relative mt-5">
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            hidden
            onChange={handleChangeThumbnail}
          />
          <label
            htmlFor="thumbnail"
            className="flex w-full items-center gap-2 bg-gray-200 cursor-pointer rounded overflow-hidden"
          >
            <div className="py-1.5 px-3 bg-primary-blue text-white shrink-0">
              Choose Thumbnail
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
              className={`mx-auto block w-full rounded-lg shadow-box object-cover mb-5 ${
                isUploading ? "blur" : ""
              }`}
            />
            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              onClick={handleRemoveThumbnail}
            >
              Remove
            </button>
          </div>
        )}
        <div className="relative mt-5">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.title
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Title
          </label>
        </div>
        <div className="relative mt-5">
          <input
            type="text"
            name="session"
            value={form.session}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.session
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Session
          </label>
        </div>
        <div className="relative mt-5">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1]"
          />
          <label
            className={`select-none duration-300 text-xs absolute bg-white -translate-y-1/2 mx-4 left-0 top-0 leading-none z-[2] text-primary-blue mt-[2px] inline-block`}
          >
            Date
          </label>
        </div>

        <div className="relative mt-5">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer resize-y min-h-[120px]"
          ></textarea>
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.description
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-5 text-gray-500 z-0 mt-0"
            }`}
          >
            Write Description...
          </label>
        </div>
        <div className="mt-5 flex items-center gap-3 flex-wrap sm:flex-nowrap">
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Author</label>
            <select
              className="block w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none"
              name="author"
              onChange={handleChangeAuthor}
            >
              {!selectedAuthor && <option value="">Select author</option>}
              {authors?.map((author, index) => (
                <option value={author?._id} key={index}>
                  {author?.fullName}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-2">Preview</label>
            <div className="flex items-center gap-2">
              <img
                src={selectedAuthor?.avatar?.url || PreviewImage}
                alt=""
                className="size-[40px] rounded-full shadow-box object-cover"
              />
              <h1 className="font-ador">
                {selectedAuthor?.fullName || "Author Name"}
              </h1>
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading || isUploading}
          className="disabled:bg-primary-blue/50 flex items-center justify-center w-full text-center h-11 bg-primary-blue hover:bg-primary-blue text-white font-medium mt-5 duration-300 rounded select-none"
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

export default EditStudyCircle;
