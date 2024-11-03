import React from "react";

import { Link } from "react-router-dom";
import { useFetchAuthorsQuery } from "../Redux/api/authorApiSlice";

const Author = () => {
    const { data: authorsData, isLoading } = useFetchAuthorsQuery();

    return (
        <div className="max-width my-20">
            <h1 className="text-2xl font-ador text-center mb-10">
                লেখক তালিকা
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {authorsData?.map((author) => (
                    <Link
                        key={author?._id}
                        to={`${author?.userName}`}
                        className="p-4 text-center bg-white text-black shadow-box hover:shadow-box-lg duration-500 group hover:bg-black rounded-lg"
                    >
                        <img
                            src={author?.avatar}
                            alt={author?.fullName}
                            className="size-[200px] rounded-full mx-auto object-cover object-top"
                        />
                        <h1 className="text-xl mt-5 mb-2 group-hover:text-white duration-500 font-ador">
                            {author?.fullName}
                        </h1>
                        <p className="group-hover:text-white duration-500">
                            {author?.authoredWorks?.length} posts
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Author;
