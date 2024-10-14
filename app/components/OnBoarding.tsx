import { Button, Carousel, Divider, theme } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React, { useMemo, useRef, useState } from "react";
import IconArrowLine from "./icons/IconArrowLine";
import ItemCarousel from "./ItemCarousel";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const QTD_SLIDES = 3;

const OnBoarding = () => {
  const [current, setCurrent] = useState(0);
  const { useToken } = theme;
  const {
    token: { colorBgElevated, colorBgBase },
  } = useToken();
  const sliderRef = useRef<CarouselRef>(null);

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  const canGoToNext = useMemo(() => {
    return current !== QTD_SLIDES - 1;
  }, [current]);

  const canGoToPrev = useMemo(() => {
    return current !== 0;
  }, [current]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-stretch text-center pb-10 pt-8">
      <Link prefetch href="/chat" className="self-end mr-10">
        <Button
          className={`!font-semibold !text-base ${poppins.className}`}
          type="text"
        >
          Skip
        </Button>
      </Link>
      <div className="flex-grow">
        <Carousel
          className="flex-grow"
          infinite={false}
          dots={false}
          ref={sliderRef}
        >
          {[...Array(QTD_SLIDES)].map((_, index) => (
            <ItemCarousel dots={QTD_SLIDES} index={index} key={index} />
          ))}
        </Carousel>
      </div>
      <div
        style={{
          backgroundColor: !!isDarkMode ? colorBgElevated : colorBgBase,
        }}
        className={`flex gap-0 self-center justify-center items-center rounded-2xl p-4 shadow-2xl`}
      >
        <Button
          type="text"
          className="active:bg-transparent focus-within:bg-transparent hover:!bg-transparent"
          disabled={!canGoToPrev}
          onClick={() => {
            sliderRef.current?.prev();
            setCurrent((prev) => prev - 1);
          }}
        >
          <IconArrowLine className="transform rotate-180" />
        </Button>
        <Divider type="vertical" className="!h-8 border-2" />
        <Button
          type="text"
          className="active:bg-transparent focus-within:bg-transparent hover:!bg-transparent"
          disabled={!canGoToNext}
          onClick={() => {
            sliderRef.current?.next();
            setCurrent((prev) => prev + 1);
          }}
        >
          <IconArrowLine />
        </Button>
      </div>
    </div>
  );
};

export default OnBoarding;
