import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { SearchBox } from "./SearchBox";

const Header = () => {
    const [openSreachBox, setOpenSearchBox] = useState(false);

    return (
        <header className="bg-[#fbfaf6] hidden sm:block">
            <div className="flex justify-between items-center max-width">
                <nav className="flex gap-4 py-2 text-lg">
                    <NavLink
                        to={"/about-us"}
                        className={`hover:text-primary duration-300 font-ador`}
                    >
                        পরিচয়
                    </NavLink>
                    <NavLink
                        to={"/authors"}
                        className={`hover:text-primary duration-300 font-ador`}
                    >
                        বিজ্ঞপ্তি
                    </NavLink>
                    <NavLink
                        to={"/notice"}
                        className={`hover:text-primary duration-300 font-ador`}
                    >
                        যোগাযোগ
                    </NavLink>
                </nav>
                <div className="relative">
                    <button
                        className={`z-10 relative size-10 flex items-center justify-center hover:text-primary text-black duration-300`}
                        onClick={() => setOpenSearchBox(!openSreachBox)}
                    >
                        {openSreachBox ? (
                            <ImCross className="text-xs" />
                        ) : (
                            <IoSearch className="text-xl" />
                        )}
                    </button>
                    {openSreachBox && <SearchBox isOpen={openSreachBox} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
