import React from "react";

const YoutubeIcon = ({ className, onClick }) => {
  return (
    <svg
      width={99}
      height={81}
      viewBox="0 0 99 81"
      className={className}
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M86.2641 3.70239C90.9469 5.06574 94.5687 8.90608 95.7501 13.7663C98.7579 22.7478 98.7424 58.4244 95.7501 67.005C94.5687 71.8654 90.9469 75.7054 86.2641 77.0691C77.8493 80.2171 21.8787 80.1181 13.4696 77.0691C8.87997 75.7786 5.28425 72.1151 3.98331 67.4056C0.980807 58.5597 0.986049 22.753 3.98331 13.9692C5.16456 9.1038 8.78113 5.2687 13.4696 3.90535C21.8787 0.850755 77.8493 0.850754 86.2641 3.70239Z"
        stroke="#002F5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63.3394 42.7829L43.7004 53.9504C42.0249 54.9023 39.9434 53.6953 39.9434 51.7646V29.4305C39.9434 27.4999 42.0249 26.2875 43.7004 27.2398L63.3394 38.407C65.0358 39.3745 65.0358 41.8202 63.3394 42.7829Z"
        stroke="#002F5E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default YoutubeIcon;
