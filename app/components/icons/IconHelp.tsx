import React from "react";

const IconHelp: React.FC<{ color?: string; className?: string }> = ({
  color = "currentColor",
  className,
}) => {
  return (
    <svg
      className={className}
      width="33"
      height="34"
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3322 30.949C24.0637 30.949 30.3313 24.6814 30.3313 16.9498C30.3313 9.21832 24.0637 2.95068 16.3322 2.95068C8.60064 2.95068 2.33301 9.21832 2.33301 16.9498C2.33301 24.6814 8.60064 30.949 16.3322 30.949Z"
        stroke={color}
        strokeWidth="3.06231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3721 12.8663C12.6921 11.9567 13.3236 11.1897 14.155 10.7011C14.9863 10.2125 15.9637 10.0339 16.9141 10.197C17.8644 10.36 18.7265 10.8541 19.3474 11.5918C19.9684 12.3295 20.3083 13.2631 20.3069 14.2274C20.3069 16.9494 16.2238 18.3104 16.2238 18.3104"
        stroke={color}
        strokeWidth="3.06231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.332 23.7549H16.3449"
        stroke={color}
        strokeWidth="3.06231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconHelp;
