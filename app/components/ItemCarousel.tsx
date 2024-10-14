'use client';
import React from "react";
import {Typography } from "antd";
import Image from "next/image";
import CustomDots from "./CustomDots";

const ItemCarousel: React.FC<{
  index: number;
  dots: number;
}> = ({ index, dots }) => {
  return (
    <div className="flex flex-col justify-center items-center z-10 px-10 mt-4 mb-8">
      <Image
        className="!rounded-2xl !object-cover shadow-2xl mb-4"
        width={362}
        height={455}
        src="/assets/onboarding-1.png"
        alt="Onboarding 1"
      />
      <CustomDots dots={dots} active={index} />
      <div className="px-4 mt-4">
        <Typography.Title level={2} className="!font-bold">
          {" "}
          Unlock the Power Of Future AI
        </Typography.Title>
        <Typography.Text type="secondary" className="font-light">
          Chat with the smartest AI Future Experience power of AI with us
        </Typography.Text>
      </div>
    </div>
  );
};

export default ItemCarousel;