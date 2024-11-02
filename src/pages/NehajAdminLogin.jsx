import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { useLoginUserMutation } from "../Redux/api/userApiSlice";
import { setAccessToken, setUserData } from "../Redux/features/userSlice";

const NehajAdminLogin = () => {
  const dispatch = useDispatch();
  const { accessToken, user } = useSelector((state) => state.user);
  console.log("token", accessToken, user);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = form;

    if (email && password) {
      try {
        const result = await loginUser({ email, password }).unwrap();
        if (result.success) {
          dispatch(setAccessToken(result.accessToken));
          dispatch(setUserData(result.user));
          redirect("/admin-dashboard");
        }
        console.log("Login successful:", result, "token", result?.token);
      } catch (error) {
        console.error("Operation failed:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("All Fields Are Required!!!");
    }
  };

  return (
    <div className="max-width my-20 font-poppins">
      <form
        className="max-w-[500px] mx-auto p-8 py-10 bg-white shadow-box rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-xl font-semibold">Login</h1>
        <div className="relative mt-5">
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary peer-focus-visible:mt-[2px] inline-block ${
              form.email
                ? "text-xs top-0 z-[2] text-primary mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Username/Email
          </label>
        </div>
        <div className="relative mt-5">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className="block relative w-full py-2.5 px-4 pr-10 border-gray-300 border rounded bg-transparent outline-none z-[1] peer"
          />
          <label
            className={`duration-300 peer-focus-visible:text-xs absolute bg-white -translate-y-1/2 text-sm mx-4 left-0 peer-focus-visible:top-0 leading-none peer-focus-visible:z-[2] peer-focus-visible:text-primary peer-focus-visible:mt-[2px] inline-block ${
              form.password
                ? "text-xs top-0 z-[2] text-primary mt-[2px]"
                : "top-1/2 text-gray-500 z-0 mt-0"
            }`}
          >
            Password
          </label>
          {form.password && (
            <div
              className="absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer text-primary text-xl select-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="block w-full text-center p-2.5 bg-primary-500 hover:bg-primary-700 text-white font-medium mt-5 duration-300 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NehajAdminLogin;
