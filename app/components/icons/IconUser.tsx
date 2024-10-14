import React from "react";

const IconUser: React.FC<{ color?: string; className?: string }> = ({
  color = "currentColor",
  className,
}) => {
  return (
    <svg
      className={className}
      width="25"
      height="28"
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.052 2.23292C9.70711 2.23292 7.80616 4.13387 7.80616 6.4788C7.80616 8.82374 9.70711 10.7247 12.052 10.7247C14.397 10.7247 16.2979 8.82374 16.2979 6.4788C16.2979 4.13387 14.397 2.23292 12.052 2.23292ZM6.00488 6.4788C6.00488 3.13905 8.71229 0.431641 12.052 0.431641C15.3918 0.431641 18.0992 3.13905 18.0992 6.4788C18.0992 9.81855 15.3918 12.526 12.052 12.526C8.71229 12.526 6.00488 9.81855 6.00488 6.4788Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.81701 20.3436C4.68703 18.3457 7.72833 16.8418 12.3952 16.8418C17.062 16.8418 20.1033 18.3457 21.9734 20.3436C23.8198 22.3163 24.4466 24.689 24.4466 26.32C24.4466 26.8174 24.0434 27.2206 23.546 27.2206H1.24439C0.746981 27.2206 0.34375 26.8174 0.34375 26.32C0.34375 24.689 0.970543 22.3163 2.81701 20.3436ZM2.22162 25.4193H22.5687C22.3813 24.2632 21.827 22.8232 20.6583 21.5745C19.1831 19.9984 16.649 18.6431 12.3952 18.6431C8.1414 18.6431 5.60731 19.9984 4.13209 21.5745C2.96332 22.8232 2.40905 24.2632 2.22162 25.4193Z"
        fill={color}
      />
    </svg>
  );
};

export default IconUser;
