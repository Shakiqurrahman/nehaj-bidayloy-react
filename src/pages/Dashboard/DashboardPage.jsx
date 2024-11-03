import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthorsCard from "../../components/Dashboard/AuthorsCard";
import StoriesCard from "../../components/Dashboard/StoriesCard";

const DashboardPage = () => {
    const authorsData = [1, 2, 3, 4, 5, 6];
    return (
        <section className="w-full">
            <div>
                <h1 className="text-[28px] font-semibold leading-none">
                    Dashboard
                </h1>
                <p className="text-sm text-primary tracking-[4px]">
                    Nehaj Bidyaloy
                </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
                <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border">
                    <div>
                        <h2 className="text-[32px] font-bold mb-2 text-center">
                            100
                        </h2>
                        <p className="text-base font-medium">Total Authors</p>
                    </div>
                    <div>
                        <HiMiniUsers className="text-primary" size={50} />
                    </div>
                </div>
                <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border">
                    <div>
                        <h2 className="text-[32px] font-bold mb-2 text-center">
                            20
                        </h2>
                        <p className="text-base font-medium">
                            Total Categories
                        </p>
                    </div>
                    <div>
                        <MdCategory className="text-primary" size={50} />
                    </div>
                </div>
                <div className="flex items-center justify-between p-8 bg-white w-[300px] rounded-2xl border">
                    <div>
                        <h2 className="text-[32px] font-bold mb-2 text-center">
                            230
                        </h2>
                        <p className="text-base font-medium">Total Writings</p>
                    </div>
                    <div>
                        <FaBookOpen className="text-primary" size={50} />
                    </div>
                </div>
            </div>

            <div className=" mt-10">
                <div className="flex gap-2 justify-between items-center">
                    <h2 className="text-xl font-medium leading-none">
                        Authors
                    </h2>
                    <Link
                        to="/admin-dashboard/authors"
                        className="bg-primary hover:bg-primary-800 duration-300 px-6 py-2 rounded-[30px] text-white font-medium"
                    >
                        See All
                    </Link>
                </div>
                {/* Authors List */}

                <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                    {authorsData.map((author, idx) => (
                        <AuthorsCard key={idx} authorsData={author} />
                    ))}
                </div>

                <div className=" mt-10">
                    <div className="flex gap-2 justify-between items-center">
                        <h2 className="text-xl font-medium leading-none">
                            Writings
                        </h2>
                        <Link
                            to="/admin-dashboard/stories"
                            className="bg-primary hover:bg-primary-800 duration-300 px-6 py-2 rounded-[30px] text-white font-medium"
                        >
                            See All
                        </Link>
                    </div>
                    {/* Stories List */}

                    <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                        {authorsData.map((story, idx) => (
                            <StoriesCard key={idx} storiesData={story} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;
