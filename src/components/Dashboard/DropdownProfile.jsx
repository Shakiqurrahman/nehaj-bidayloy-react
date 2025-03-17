import React from "react";
import toast from "react-hot-toast";
import { LuUser2 } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../Redux/api/userApiSlice";
import { logout } from "../../Redux/features/userSlice";

const DropdownProfile = ({ close, setOpenProfileModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutMutation();

  const handleViewProfile = () => {
    setOpenProfileModal(true);
    close();
  };

  const handleLogout = async () => {
    close();
    dispatch(logout());
    navigate("/");
    toast.success("Logout Successfully");
    try {
      await logoutUser().unwrap();
    } catch (error) {
      toast.error("Failed to logout!");
    }
  };
  return (
    <>
      <div className="shadow-xl mt-3 py-2 bg-white text-black absolute top-full -right-2 rounded-lg border border-gray-300 before:absolute before:top-[-0.5rem] before:right-[1.5rem] before:size-4 before:bg-white before:rotate-[45deg] before:border-l before:border-t before:border-l-gray-300 before:border-t-gray-300 text-sm sm:text-base text-nowrap flex flex-col items-start">
        <button
          type="button"
          onClick={handleViewProfile}
          className="flex gap-2 items-center px-4 py-2 hover:bg-primary-blue/5"
        >
          <LuUser2 className="text-lg" />
          View Profile
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 hover:bg-primary-blue/5 flex items-center gap-2 w-full text-left"
        >
          <MdLogout className="text-lg" /> Logout
        </button>
      </div>
    </>
  );
};

export default DropdownProfile;
