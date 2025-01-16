import React from "react";

import patcokroCard1 from "../assets/images/patchokro-cards/patcokro-card-1.png";
import patcokroCard2 from "../assets/images/patchokro-cards/patcokro-card-2.png";
import patcokroCard3 from "../assets/images/patchokro-cards/patcokro-card-3.png";

const RecentEventBanner = ({ title = "", subTitle = "" }) => {
  return (
    <div className="bg-primary-blue rounded-[40px] pt-[70px] pb-[100px] mb-[80px]">
      <div className="max-width text-white">
        <h2 className="text-xl font-niladri text-center mb-5">{title}</h2>
        {subTitle && (
          <p className="text-lg w-[70%] mx-auto mb-[60px] text-center">
            {subTitle}
          </p>
        )}
        <div className="grid gap-5 grid-cols-3">
          <img
            src={patcokroCard1}
            alt="Patcokro Card Image"
            className="w-full rounded-[50px] block"
          />
          <img
            src={patcokroCard2}
            alt="Patcokro Card Image"
            className="w-full rounded-[50px] block"
          />
          <img
            src={patcokroCard3}
            alt="Patcokro Card Image"
            className="w-full rounded-[50px] block"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentEventBanner;
