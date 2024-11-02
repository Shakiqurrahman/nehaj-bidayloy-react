import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveHamburgerD } from "../../../Redux/features/utilsSlice";
import Logo from "/public/nehaz-bidyalay-logo.jpg";
import { Link } from "react-router-dom";

const DHeader = () => {
    const dispatch = useDispatch();
    const { activeHamburger } = useSelector((state) => state.utils);
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
                    {/* <Button variant="login" size="md">
                        Login
                        <CircleUserRound className="ml-2 size-6" />
                    </Button> */}
                </div>
            </div>
        </header>
    );
};

export default DHeader;
