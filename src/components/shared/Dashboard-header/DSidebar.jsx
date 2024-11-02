"use client";
import { setActiveHamburgerD } from "@/Redux/features/utilsSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdCategory, MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const DSideBar = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const { activeHamburger } = useSelector((state) => state.utils);
    return (
        <aside className="lg:w-[240px]  relative">
            <ul
                className={`text-black bg-white w-full md:w-[250px]  left-0  fixed top-24 h-full pt-4  shadow-lg lg:translate-x-0 ${
                    activeHamburger
                        ? "translate-x-0 duration-300"
                        : "translate-x-[-100%] duration-300"
                }`}
            >
                <Link href="/admin-dashboard">
                    <li
                        className={`link ${
                            pathname === "/admin-dashboard"
                                ? "text-primary"
                                : ""
                        } flex gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <MdDashboard size={25} />
                        Dashboard
                    </li>
                </Link>
                <Link href="/admin-dashboard/stories">
                    <li
                        className={`link ${
                            pathname === "/admin-dashboard/stories"
                                ? "text-primary "
                                : ""
                        } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <FaBookOpen size={25} />
                        Stories
                    </li>
                </Link>
                <Link href="/admin-dashboard/authors">
                    <li
                        className={`link ${
                            pathname === "/admin-dashboard/authors"
                                ? "text-primary "
                                : ""
                        } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <BsFillPeopleFill size={25} />
                        Authors
                    </li>
                </Link>
                <Link href="/admin-dashboard/categories">
                    <li
                        className={`link ${
                            pathname === "/admin-dashboard/categories"
                                ? "text-primary "
                                : ""
                        } flex items-center gap-4 text-[#7e7e7e] text-xl  px-8 py-5 hover:text-primary duration-300`}
                        onClick={() => dispatch(setActiveHamburgerD(false))}
                    >
                        <MdCategory size={25} />
                        Categories
                    </li>
                </Link>
            </ul>
        </aside>
    );
};

export default DSideBar;
