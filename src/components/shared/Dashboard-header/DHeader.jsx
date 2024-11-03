import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFetchUserDataQuery } from "../../../Redux/api/userApiSlice";
import { setActiveHamburgerD } from "../../../Redux/features/utilsSlice";
import Logo from "/nehaz-bidyalay-logo.jpg";

const DHeader = () => {
    const dispatch = useDispatch();
    const { activeHamburger } = useSelector((state) => state.utils);
    const { user } = useSelector((state) => state.user);
    const { data: userData } = useFetchUserDataQuery();
    console.log("userData", userData);

    console.log(activeHamburger);

    const handleHamburgerMenu = () => {
        dispatch(setActiveHamburgerD(!activeHamburger));
    };

    return (
        <header className="h-24">
            <div className="border-b bg-white text-black fixed top-0 w-full z-50">
                <div className="h-24 flex items-center justify-between gap-2 px-4 md:px-8 ">
                    <div className="nav-control lg:hidden">
                        <div
                            onClick={handleHamburgerMenu}
                            className={`${
                                activeHamburger
                                    ? "hamburger active"
                                    : "hamburger"
                            }`}
                        >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <Link to="/">
                        <div className="">
                            <img
                                src={Logo}
                                alt="Nehaj Bidyaloy Logo"
                                className="w-[80px] sm:w-[100px]"
                            />
                        </div>
                    </Link>
                    <div className="w-1/3 hidden md:block">
                        <input
                            className="w-full py-2 px-4 border outline-none rounded-md bg-transparent"
                            type="text"
                            placeholder="Search here..."
                        />
                    </div>

                    <div className="flex gap-2 items-center">
                        <h2 className="hidden md:block font-medium text-sm max-w-[200px] truncate">
                            {user?.fullName}
                        </h2>
                        <img
                            className="flex-shrink-0 size-12 rounded-full bg-primary-300 object-center overflow-hidden"
                            src={user?.avatar}
                            alt={user?.fullName}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DHeader;
