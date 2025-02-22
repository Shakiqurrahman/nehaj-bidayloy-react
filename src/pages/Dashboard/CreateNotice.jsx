import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useCreateNoticeMutation } from "../../Redux/api/noticeApiSlice";
import { API_URL } from "../../utils/config";

const CreateNotice = () => {
  const navigate = useNavigate();

  const [CreateNotice, { isLoading }] = useCreateNoticeMutation();

  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    thumbnail: null,
  });
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const handleAvatarChange = async (e) => {
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

  const handleRemoveAvatar = (e) => {
    e.preventDefault();
    setSelectedThumbnail(null);
    setForm((prev) => ({
      ...prev,
      thumbnail: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { thumbnail } = form;
    if (thumbnail) {
      try {
        const noticeData = {
          ...form,
        };
        const res = await CreateNotice(noticeData).unwrap();
        toast.success(res?.message);
        navigate("/admin-dashboard/notice");
      } catch (error) {
        console.log("Error", error);
        toast.error("Failed to create notice!");
      }
    } else {
      toast.error("Please select notice thumbnail!");
    }
  };

  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[600px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Create A Notice
        </h1>
        <div className="relative mt-5">
          <input
            type="file"
            name="avatar"
            id="avatar"
            hidden
            onChange={handleAvatarChange}
          />
          <label
            htmlFor="avatar"
            className="flex w-full items-center gap-2 bg-gray-200 cursor-pointer rounded overflow-hidden"
          >
            <div className="py-1.5 px-3 bg-primary-blue text-white shrink-0">
              Choose Thumbnail
            </div>
            <p className="line-clamp-1 font-ador">{selectedThumbnail?.name}</p>
          </label>
        </div>
        {(selectedThumbnail || isUploading) && (
          <div className="relative mt-5 text-center">
            <img
              src={URL.createObjectURL(selectedThumbnail)}
              alt={selectedThumbnail?.name}
              className={`mx-auto block w-full rounded-lg shadow-box object-cover mb-5 ${
                isUploading ? "blur" : ""
              }`}
            />
            <button
              type="button"
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              onClick={handleRemoveAvatar}
            >
              Remove
            </button>
          </div>
        )}
        <button
          type="submit"
          disabled={isLoading || isUploading}
          className="disabled:bg-primary-blue/50 flex items-center justify-center w-full text-center h-11 bg-primary-blue hover:bg-primary-blue text-white font-medium mt-5 duration-300 rounded select-none"
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

export default CreateNotice;
