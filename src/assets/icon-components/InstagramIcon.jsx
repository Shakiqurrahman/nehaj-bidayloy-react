import React from "react";

const InstagramIcon = ({ className, onClick }) => {
  return (
    <svg
      width={81}
      height={80}
      viewBox="0 0 81 80"
      className={className}
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2011 1.10693H58.6601C71.4033 1.10693 79.335 10.1028 79.335 22.8334V57.1851C79.335 69.9157 71.4033 78.9117 58.6558 78.9117H22.2011C9.45793 78.9117 1.53027 69.9157 1.53027 57.1851V22.8334C1.53027 10.1028 9.49579 1.10693 22.2011 1.10693Z"
        stroke="#002F5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.7605 26.2988C31.3996 26.2988 24.6201 33.0786 24.6201 41.4391C24.6201 49.8001 31.3996 56.5795 39.7605 56.5795C48.1215 56.5795 54.9009 49.8001 54.9009 41.4391C54.9009 33.0786 48.1215 26.2988 39.7605 26.2988Z"
        stroke="#002F5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.1886 18.9967V20.2547M65.33 19.2703C65.33 22.1327 63.0146 24.4482 60.1522 24.4482C57.2897 24.4482 54.9561 22.1327 54.9561 19.2703C54.9561 16.4079 57.2897 14.0742 60.1522 14.0742C63.0146 14.0742 65.33 16.4079 65.33 19.2703Z"
        stroke="#002F5E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InstagramIcon;
