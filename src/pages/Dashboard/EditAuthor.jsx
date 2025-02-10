import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";

const EditAuthor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    userName: "",
    bio: "",
  });

  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setSelectedAvatar(file);
      e.target.value = "";
    }
  };

  const handleRemoveAvatar = () => {
    setSelectedAvatar(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { categoryName, categorySlug } = form;
    if (categoryName && categorySlug && selectedAvatar) {
      console.log(form, selectedAvatar);
    }
  };
  return (
    <div className="min-h-[calc(100vh_-_96px)]">
      <form
        className="max-w-[600px] mx-auto bg-white rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl text-center font-medium mb-10">
          Edit A Author
        </h1>
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
              Choose Avatar
            </div>
            <p className="line-clamp-1 font-ador">{selectedAvatar?.name}</p>
          </label>
        </div>
        {selectedAvatar && (
          <div className="relative mt-5 text-center">
            <img
              src={URL.createObjectURL(selectedAvatar)}
              alt={selectedAvatar?.name}
              className="mx-auto block size-[200px] rounded-full shadow-box object-cover mb-5"
            />
            <button
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium"
              onClick={handleRemoveAvatar}
            >
              Remove
            </button>
          </div>
        )}
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

export default EditAuthor;
