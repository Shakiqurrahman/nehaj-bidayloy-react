import React from "react";

const FacebookIcon = ({ className, onClick }) => {
  return (
    <svg
      width={48}
      height={79}
      viewBox="0 0 48 79"
      className={className}
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 3.13889C47 1.95762 45.9597 1 44.6768 1H34.4545C28.9076 1 23.5911 3.03947 19.6714 6.6189C15.7469 10.24 13.5455 15.1305 13.5455 20.25V31.8H3.32328C2.04016 31.8 1 32.7578 1 33.9389V45.0611C1 46.2422 2.04016 47.2 3.32323 47.2H13.5455V75.8611C13.5455 77.0422 14.5856 78 15.8687 78H27.9495C29.2324 78 30.2727 77.0422 30.2727 75.8611V47.2H44.6768C45.9597 47.2 47 46.2422 47 45.0611V33.9389C47 32.7578 45.9597 31.8 44.6768 31.8H30.2727V20.25C30.2727 19.2095 30.7114 18.248 31.498 17.5155C32.28 16.8245 33.3468 16.4 34.4545 16.4H44.6768C45.9597 16.4 47 15.4424 47 14.2611V3.13889Z"
        stroke="#002F5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FacebookIcon;
