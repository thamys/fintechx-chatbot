import React from "react";

const IconLock: React.FC<{ color?: string; className?: string }> = ({
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
      <rect
        x="4.47266"
        y="14.7617"
        width="23.7196"
        height="16.3364"
        rx="1.02077"
        stroke={color}
        strokeWidth="3.06231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4521 21.6514V24.1555"
        stroke={color}
        strokeWidth="3.06231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5488 13.7484V9.0216C10.5488 5.63906 13.2909 2.89697 16.6735 2.89697H17.8988C21.2814 2.89697 24.0235 5.63906 24.0235 9.0216V10.0241"
        stroke={color}
        strokeWidth="3.06231"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconLock;
