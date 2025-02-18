import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/config";

const CreateStudyCircle = () => {
  const navigate = useNavigate();

  // const [CreateAuthor, { isLoading }] = useCreateAuthorMutation();

  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    userName: "",
    bio: "",
    avatar: null,
  });

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    setSelectedAvatar(file);
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
          setForm((prev) => ({ ...prev, avatar: imgObject }));
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
    setSelectedAvatar(null);
    setForm((prev) => ({
      ...prev,
      avatar: null,
    }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { avatar, bio, name, userName } = form;
    if (avatar && bio && name && userName) {
      try {
        const studyCircleData = {
          fullName: name,
          bio,
          userName,
          avatar,
        };
        console.log(studyCircleData);
        //   const res = await CreateAuthor(authorData).unwrap();
        //   toast.success(res?.message);
        //   navigate("/admin-dashboard/authors");
      } catch (error) {
        console.log("Error", error);
        toast.error("Failed to create an author!");
      }
    } else {
      toast.error("Please fill up every field!");
    }
  };
  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[600px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Create Study Circle
        </h1>
        <div className="relative mt-5">
          <input
            type="file"
            name="poster"
            id="poster"
            hidden
            onChange={handleAvatarChange}
          />
          <label
            htmlFor="poster"
            className="flex w-full items-center gap-2 bg-gray-200 cursor-pointer rounded overflow-hidden"
          >
            <div className="py-1.5 px-3 bg-primary-blue text-white shrink-0">
              Choose Poster
            </div>
            <p className="line-clamp-1 font-ador">{selectedAvatar?.name}</p>
          </label>
        </div>
        {(selectedAvatar || isUploading) && (
          <div className="relative mt-5 text-center">
            <img
              src={URL.createObjectURL(selectedAvatar)}
              alt={selectedAvatar?.name}
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
        <div className="relative mt-5">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.name
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Name
          </label>
        </div>
        <div className="relative mt-5">
          <input
            type="text"
            name="userName"
            value={form.userName}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.userName
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Username
          </label>
        </div>

        <div className="relative mt-5">
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer resize-y min-h-[120px]"
          ></textarea>
          <label
            className={`select-none duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary-blue peer-focus-visible:mt-[2px] inline-block ${
              form.bio
                ? "text-xs top-0 z-[2] text-primary-blue mt-[2px]"
                : "top-5 text-gray-500 z-0 mt-0"
            }`}
          >
            Write Bio...
          </label>
        </div>
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

export default CreateStudyCircle;
