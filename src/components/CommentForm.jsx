import React, { useState } from "react";

export const CommentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, text } = form;
    if (name && email && text) {
      console.log(form);
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
          required
          onChange={handleChange}
          className="bg-[#D9D9D9] rounded-[15px] outline-none p-3 block w-full mt-2"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="text" className="text-accent-golden">
          মন্তব্য*
        </label>
        <textarea
          id="text"
          name="text"
          required
          onChange={handleChange}
          className="bg-[#D9D9D9] rounded-[15px] outline-none p-3 block w-full mt-2 h-[300px] resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-primary-blue font-niladri text-white rounded-[40px] outline-none py-3 px-10 mt-5"
      >
        মন্তব্য প্রকাশ করুন
      </button>
    </form>
  );
};
