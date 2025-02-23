import React from "react";
import { Link } from "react-router-dom";

const RecentEventBanner = ({ title = "", subTitle = "", data }) => {
  return (
    <div className="bg-primary-blue rounded-[40px] pt-[70px] pb-[60px] sm:pb-[100px] mb-[80px] px-5">
      <div className="max-width text-white">
        <h2 className="text-xl font-niladri text-center mb-5">{title}</h2>
        {subTitle && (
          <p className="sm:text-lg sm:w-[70%] mx-auto mb-[60px] text-center">
            {subTitle}
          </p>
        )}
        <div className="grid gap-5 md:grid-cols-3">
          {data &&
            data?.map((item, i) =>
              item?.title ? (
                <Link
                  to={`/study-circle/${item?._id}`}
                  key={i}
                  className="w-full"
                >
                  <img
                    src={item?.thumbnail?.url}
                    alt="Recent Event Card Image"
                    className="w-full rounded-[50px] block"
                  />
                </Link>
              ) : (
                <img
                  key={i}
                  src={item?.thumbnail?.url}
                  alt="Recent Event Card Image"
                  className="w-full rounded-[50px] block"
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default RecentEventBanner;
