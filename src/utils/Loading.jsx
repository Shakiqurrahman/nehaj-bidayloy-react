import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex items-center justify-center absolute left-1/2 translate-x-1/2 top-1/2">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl text-black " />
    </div>
  );
};

export default Loading;
