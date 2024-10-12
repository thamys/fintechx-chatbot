import { Button, Carousel, theme, Typography } from "antd";
import Image from "next/image";
import React from "react";

const OnBoarding = () => {
  const { useToken } = theme;
  const {
    token: { colorBgElevated },
  } = useToken();
  return (
    <div className="w-screen h-screen p-8 flex flex-col justify-center items-stretch text-center">
      <Button className="self-end mb-auto !font-semibold" type="text">
        Skip
      </Button>
      <div className="flex-grow">
        <Carousel>
          <Image
            width={362}
            height={455}
            src="/assets/onboarding-1.png"
            alt="Onboarding 1"
          />
          <Image
            width={362}
            height={455}
            src="/assets/onboarding-1.png"
            alt="Onboarding 1"
          />
          <Image
            width={362}
            height={455}
            src="/assets/onboarding-1.png"
            alt="Onboarding 1"
          />
        </Carousel>
        <Typography.Title level={2}>
          {" "}
          Unlock the Power Of Future AI
        </Typography.Title>
        <Typography.Text>
          Chat with the smartest AI Future Experience power of AI with us
        </Typography.Text>
      </div>
      <div
      style={{ backgroundColor: colorBgElevated }}
        className={`flex gap-0 justify-center items-center rounded-lg p-4`}
      >
        <Button type="text" className="!rounded-r-none rounded-b-none">
          <Image
            width={20}
            height={20}
            src="/assets/icons/arrow-left.svg"
            alt="Arrow Left"
          />
        </Button>
        <Button type="text">
          <Image
            width={20}
            height={20}
            src="/assets/icons/arrow-left.svg"
            alt="Arrow Left"
          />
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
