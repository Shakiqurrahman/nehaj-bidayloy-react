import React, { useState } from "react";
import toast from "react-hot-toast";
import { useCreateCommentMutation } from "../Redux/api/storyApiSlice";
import { getDeviceId } from "../utils/getDeviceId";

export const CommentForm = ({ storyId }) => {
  const [CreateComment] = useCreateCommentMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const deviceId = getDeviceId();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, comment } = form;
    if (name && email && comment) {
      const commentData = { ...form, storyId, userIdentifier: deviceId };
      try {
        const res = await CreateComment(commentData).unwrap();
        console.log(res);
        if (res?.success) {
          toast.success(res?.message);
        }
      } catch (error) {
        console.log("error", error);
        toast.error(
          error?.data?.message === "You can only comment once on this story."
            ? error?.data?.message
            : "Failed to post a comment!"
        );
      }
      setForm({
        name: "",
        email: "",
        comment: "",
      });
    } else {
      toast.error("Please fillup every field!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-niladri text-primary-blue">মন্তব্য করুন</h1>
      <div className="mt-5">
        <label htmlFor="name" className="text-accent-golden">
          নাম*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          required
          onChange={handleChange}
          className="bg-[#D9D9D9] rounded-[15px] outline-none p-3 block w-full mt-2"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="text-accent-golden">
          ইমেইল*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          required
          onChange={handleChange}
          className="bg-[#D9D9D9] rounded-[15px] outline-none p-3 block w-full mt-2"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="comment" className="text-accent-golden">
          মন্তব্য*
        </label>
        <textarea
          id="comment"
          name="comment"
          value={form.comment}
          required
          onChange={handleChange}
          className="bg-[#D9D9D9] rounded-[15px] outline-none p-3 block w-full mt-2 h-[300px] resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-primary-blue font-niladri text-white rounded-[40px] outline-none py-3 px-10 mt-5 hover:bg-primary-golden duration-300"
      >
        মন্তব্য প্রকাশ করুন
      </button>
    </form>
  );
};
