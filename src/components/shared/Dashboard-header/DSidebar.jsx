import React from "react";
import { BiSolidCrown } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { MdCategory, MdDashboard } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setActiveHamburgerD } from "../../../Redux/features/utilsSlice";

const DSideBar = () => {
  const dispatch = useDispatch();
  const { activeHamburger } = useSelector((state) => state.utils);
  return (
    <aside className="lg:w-[240px] relative flex-shrink-0">
      <ul
        className={`text-black bg-white w-full md:w-[250px]  left-0  fixed top-24 h-full pt-4  shadow-lg lg:translate-x-0 ${
          activeHamburger
            ? "translate-x-0 duration-300"
            : "translate-x-[-100%] duration-300"
        }`}
      >
        <NavLink
          to="/admin-dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary-blue duration-300"
              : "text-[#7e7e7e] hover:text-primary-blue duration-300"
          }
        >
          <li
            className={` flex gap-4 text-xl  px-8 py-5 `}
            onClick={() => dispatch(setActiveHamburgerD(false))}
          >
            <MdDashboard size={25} />
            Dashboard
          </li>
        </NavLink>
        <NavLink
          to="/admin-dashboard/stories"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary-blue duration-300"
              : "text-[#7e7e7e] hover:text-primary-blue duration-300"
          }
        >
          <li
            className={` flex items-center gap-4 text-xl  px-8 py-5`}
            onClick={() => dispatch(setActiveHamburgerD(false))}
          >
            <FaBookOpen size={25} />
            Writings
          </li>
        </NavLink>
        <NavLink
          to="/admin-dashboard/authors"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary-blue duration-300"
              : "text-[#7e7e7e] hover:text-primary-blue duration-300"
          }
        >
          <li
            className={` flex items-center gap-4 text-xl  px-8 py-5`}
            onClick={() => dispatch(setActiveHamburgerD(false))}
          >
            <BsFillPeopleFill size={25} />
            Authors
          </li>
        </NavLink>
        <NavLink
          to="/admin-dashboard/categories"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary-blue duration-300"
              : "text-[#7e7e7e] hover:text-primary-blue duration-300"
          }
        >
          <li
            className={` flex items-center gap-4 text-xl  px-8 py-5`}
            onClick={() => dispatch(setActiveHamburgerD(false))}
          >
            <MdCategory size={25} />
            Categories
          </li>
        </NavLink>
        <NavLink
          to="/admin-dashboard/genres"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary-blue duration-300"
              : "text-[#7e7e7e] hover:text-primary-blue duration-300"
          }
        >
          <li
            className={` flex items-center gap-4 text-xl  px-8 py-5`}
            onClick={() => dispatch(setActiveHamburgerD(false))}
          >
            <BiSolidCrown size={25} />
            Genres
          </li>
        </NavLink>
        <NavLink
          to="/admin-dashboard/quotes"
          end
          className={({ isActive }) =>
            isActive
              ? "text-primary-blue duration-300"
              : "text-[#7e7e7e] hover:text-primary-blue duration-300"
          }
        >
          <li
            className={` flex items-center gap-4 text-xl  px-8 py-5 `}
            onClick={() => dispatch(setActiveHamburgerD(false))}
          >
            <PiQuotesFill size={25} />
            Quotes
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default DSideBar;
