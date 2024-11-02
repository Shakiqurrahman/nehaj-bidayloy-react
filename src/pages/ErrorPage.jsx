import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import error from "../assets/images/error.jpg";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img className="w-[85%] sm:w-[400px]" src={error} alt="error" />
            <Link
                to="/"
                className="mt-2 flex items-center gap-2 text-base font-semibold text-white bg-black px-5 py-2 borde border-[#ff644d] rounded-lg hover:underline"
            >
                <MdArrowBackIosNew />
                Go Back
            </Link>
        </div>
    );
};

export default ErrorPage;
