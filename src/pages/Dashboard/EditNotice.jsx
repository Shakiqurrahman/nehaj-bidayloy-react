import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateNoticeMutation } from "../../Redux/api/noticeApiSlice";
import { API_URL } from "../../utils/config";

const EditNotice = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [UpdateNotice, { isLoading }] = useUpdateNoticeMutation();

  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    thumbnail: state?.thumbnail || null,
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
    if (thumbnail?.url !== state?.thumbnail?.url) {
      if (thumbnail && state?._id) {
        try {
          const noticeData = {
            ...form,
          };
          const res = await UpdateNotice({
            noticeId: state?._id,
            noticeData,
          }).unwrap();
          toast.success(res?.message);
          navigate("/admin-dashboard/notice");
        } catch (error) {
          console.log("Error", error);
          toast.error("Failed to update notice!");
        }
      } else {
        toast.error("Please select notice thumbnail!");
      }
    } else {
      navigate("/admin-dashboard/notice");
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
          Edit A Notice
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
            "Update"
          )}
        </button>
      </form>
    </div>
  );
};

export default EditNotice;
