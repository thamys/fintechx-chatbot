import { Button, Carousel, Divider, Flex, theme, Typography } from "antd";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const CustomDots: React.FC<{ dots: number[]; active: number }> = ({
  dots,
  active,
}) => {
  const { useToken } = theme;
  const {
    token: { colorText, colorTextDisabled },
  } = useToken();
  return (
    <Flex className="gap-2 justify-center items-center">
      {dots.map((_, i) => (
        <div
          key={i}
          className={`cursor-pointer flex justify-center items-center w-5 h-5 bg-transparent rounded-full ${
            active === i && "border border-spacing-1 box-content"
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

const ItemCarousel: React.FC<{
  index: number;
}> = ({ index }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative">
        <Image
          className="absolute blur-3xl opacity-30"
          width={362}
          height={455}
          src="/assets/onboarding-1.png"
          alt="Onboarding 1"
        />
        <div className="py-8 px-10">
          <Image
            className="!rounded-2xl"
            width={362}
            height={455}
            src="/assets/onboarding-1.png"
            alt="Onboarding 1"
          />
        </div>
      </div>
      <CustomDots dots={[1, 2, 3]} active={index} />
      <div className="px-8 mt-6">
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

const OnBoarding = () => {
  const { useToken } = theme;
  const {
    token: { colorBgElevated },
  } = useToken();
  const sliderRef = useRef<CarouselRef>(null);

  return (
    <div className="w-screen h-screen py-8 flex flex-col justify-center items-stretch text-center">
      <Link className="self-end mb-auto mx-8" prefetch href="/chat">
        <Button className="!font-semibold" type="text">
          Skip
        </Button>
      </Link>
      <div className="flex-grow">
        <Carousel className="flex-grow" dotPosition="top" ref={sliderRef}>
          <ItemCarousel index={0} />
          <ItemCarousel index={1} />
          <ItemCarousel index={2} />
        </Carousel>
      </div>
      <div
        style={{ backgroundColor: colorBgElevated }}
        className={`flex gap-0 self-center justify-center items-center rounded-2xl p-4`}
      >
        <Button type="text" onClick={() => sliderRef.current?.prev()}>
          <Image
            width={24}
            height={24}
            src="/assets/icons/arrow-line.svg"
            alt="Arrow Left"
            className="transform rotate-180"
          />
        </Button>
        <Divider type="vertical" className="!h-8 border-2" />
        <Button type="text" onClick={() => sliderRef.current?.next()}>
          <Image
            width={24}
            height={24}
            src="/assets/icons/arrow-line.svg"
            alt="Arrow Left"
          />
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
