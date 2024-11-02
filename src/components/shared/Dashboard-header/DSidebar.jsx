import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { MdCategory, MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setActiveHamburgerD } from "../../../Redux/features/utilsSlice";

const DSideBar = () => {
    const dispatch = useDispatch();
    const { activeHamburger } = useSelector((state) => state.utils);
    return (
        <aside className="lg:w-[240px] relative">
            <ul
                className={`text-black bg-white w-full md:w-[250px]  left-0  fixed top-24 h-full pt-4  shadow-lg lg:translate-x-0 ${
                    activeHamburger
                        ? "translate-x-0 duration-300"
                        : "translate-x-[-100%] duration-300"
                }`}
            >
                <NavLink to="/admin-dashboard">
                    <li
                        className={` flex gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <MdDashboard size={25} />
                        Dashboard
                    </li>
                </NavLink>
                <NavLink to="/admin-dashboard/stories">
                    <li
                        className={` flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <FaBookOpen size={25} />
                        Stories
                    </li>
                </NavLink>
                <NavLink to="/admin-dashboard/authors">
                    <li
                        className={` flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <BsFillPeopleFill size={25} />
                        Authors
                    </li>
                </NavLink>
                <NavLink to="/admin-dashboard/categories">
                    <li
                        className={` flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <MdCategory size={25} />
                        Categories
                    </li>
                </NavLink>
            </ul>
        </aside>
    );
};

export default DSideBar;
