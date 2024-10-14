'use client';
import React from "react";
import { Flex, theme } from "antd";

const CustomDots: React.FC<{ active: number, dots: number }> = ({ active, dots }) => {
  const { useToken } = theme;
  const {
    token: { colorText, colorTextDisabled },
  } = useToken();
  return (
    <Flex className="gap-2 justify-center items-center">
      {[...Array(dots)].map((_, i) => (
        <div
          key={i}
          className={`cursor-pointer flex justify-center items-center w-5 h-5 bg-transparent rounded-full ${
            active === i && "border border-current border-spacing-1 box-content"
          }`}
        >
          <div
            className={
              active === i ? "w-4 h-4 rounded-full" : "w-3 h-3 rounded-full"
            }
            style={{
              backgroundColor: active === i ? colorText : colorTextDisabled,
            }}
          />
        </div>
      ))}
    </Flex>
  );
};

export default CustomDots;