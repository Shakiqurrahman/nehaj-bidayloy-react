import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useFetchUserDataQuery } from "../../../Redux/api/userApiSlice";
import { setUserData } from "../../../Redux/features/userSlice";
import { setActiveHamburgerD } from "../../../Redux/features/utilsSlice";
import defaultAvatar from "../../../assets/images/no-profile-picture.svg";
import DropdownProfile from "../../Dashboard/DropdownProfile";
import Logo from "/public/Nehaj_Logo.png";

const DHeader = () => {
  const dispatch = useDispatch();
  const { activeHamburger } = useSelector((state) => state.utils);
  const { user } = useSelector((state) => state.user);
  const { data: userData } = useFetchUserDataQuery();
  const [openProfile, setOpenProfile] = useState(false);

  const handleHamburgerMenu = () => {
    dispatch(setActiveHamburgerD(!activeHamburger));
  };

  useEffect(() => {
    if (userData) {
      dispatch(setUserData(userData));
    }
  }, [userData, dispatch]);

  return (
    <header className="h-24">
      <div className="border-b bg-white text-black fixed top-0 w-full z-50">
        <div className="h-24 flex items-center justify-between gap-2 px-4 md:px-8 ">
          <div className="nav-control lg:hidden">
            <div
              onClick={handleHamburgerMenu}
              className={`${
                activeHamburger ? "hamburger active" : "hamburger"
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

          <div className="flex gap-2 items-center relative">
            <h2 className="hidden md:block font-medium text-sm max-w-[200px] truncate">
              {user?.fullName}
            </h2>
            <img
              className="flex-shrink-0 size-12 rounded-full bg-primary-blue object-center overflow-hidden  cursor-pointer"
              onClick={() => setOpenProfile(!openProfile)}
              src={user?.avatar ? user?.avatar : defaultAvatar}
              alt={user?.fullName}
            />
            {openProfile && (
              <DropdownProfile close={() => setOpenProfile(false)} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DHeader;
