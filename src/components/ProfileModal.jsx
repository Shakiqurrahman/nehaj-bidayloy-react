import React, { useRef } from "react";
import { useSelector } from "react-redux";
import defaultAvatar from "../assets/images/no-profile-picture.svg";

const ProfileModal = ({ close }) => {
  const { user } = useSelector((state) => state.user);
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close();
    }
  };
  return (
    <div
      onClick={handleClickOutside}
      className="fixed left-0 top-0 z-[99999999] flex h-screen w-full items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="bg-white max-w-lg w-full p-4 sm:p-8 rounded-[30px] flex justify-center items-center flex-col min-h-[40vh]"
      >
        <img
          className="flex-shrink-0 size-28 sm:size-32 rounded-full bg-primary-blue object-center overflow-hidden  cursor-pointer"
          src={user?.avatar ? user?.avatar : defaultAvatar}
          alt={user?.fullName}
        />
        <h2 className="font-medium text-lg sm:text-xl mt-5">
          {user?.fullName}
        </h2>
        <p className="text-sm text-primary-golden font-medium">
          {user?.role === "ADMIN" ? "Admin" : user?.role} Of Nehaj Bidyaloy
        </p>
      </div>
    </div>
  );
};

export default ProfileModal;
