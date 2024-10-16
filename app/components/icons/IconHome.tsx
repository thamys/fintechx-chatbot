import React from "react";

const IconHome: React.FC<{ color?: string; className?: string }> = ({
  color = "currentColor",
  className,
}) => {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.64911 9.35002C0.889688 10.0335 0.456055 11.0071 0.456055 12.0289V21.2358C0.456055 23.2263 2.06963 24.8398 4.06006 24.8398H20.8787C22.8692 24.8398 24.4827 23.2263 24.4827 21.2358V12.0289C24.4827 11.0071 24.0491 10.0335 23.2897 9.35002L14.8804 1.78161C13.5098 0.548055 11.429 0.548055 10.0584 1.78162L1.64911 9.35002ZM11.2681 14.0278C9.94111 14.0278 8.8654 15.1034 8.8654 16.4304V21.2358C8.8654 21.8993 9.40326 22.4371 10.0667 22.4371H14.8721C15.5356 22.4371 16.0734 21.8993 16.0734 21.2358V16.4304C16.0734 15.1034 14.9977 14.0278 13.6707 14.0278H11.2681Z"
        fill={color}
      />
    </svg>
  );
};

export default IconHome;
