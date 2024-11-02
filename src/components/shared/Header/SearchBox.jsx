import React, { useEffect, useRef } from "react";

export const SearchBox = ({ isOpen }) => {
  const searchBoxRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      console.dir(searchBoxRef.current);
    }
  }, [isOpen]);
  return (
    <form
      className={`${
        isOpen ? "w-[280px]" : "w-0"
      } overflow-hidden duration-300 absolute top-0 right-0 z-0`}
    >
      <input
        type="text"
        placeholder="এখানে লিখুন..."
        className="block w-full p-[10px] bg-transparent text-sm outline-none placeholder:text-black border-b-2 border-secondary text-black"
      />
    </form>
  );
};
