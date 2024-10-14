"use client";
import React from "react";
import { Button, Layout, theme, Typography } from "antd";
import { Poppins } from "next/font/google";
import Link from "next/link";
import IconThreeDots from "../components/icons/IconThreeDots";
import IconArrowLeft from "../components/icons/IconArrowLeft";

const { Header } = Layout;

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const PageHeader: React.FC<{ title: string; linkBack: string }> = ({
  title,
  linkBack,
}) => {
  const { useToken } = theme;
  const {
    token: { colorBgBase, colorBgElevated, colorFillSecondary },
  } = useToken();

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  return (
    <Header className="!bg-transparent !py-14 !px-10 flex justify-between items-center gap-4">
      <Link prefetch href={linkBack}>
        <Button
          shape="default"
          type="default"
          className="!h-[45px] !w-[45px] !rounded-2xl !border-none"
          style={{
            backgroundColor: colorBgBase,
            boxShadow: `5.92px 11.84px 23.68px 0px ${
              isDarkMode ? colorBgBase : colorBgElevated
            }`,
          }}
        >
          <IconArrowLeft />
        </Button>
      </Link>
      <Typography.Title
        level={3}
        style={{ fontFamily: poppins.style.fontFamily }}
        className="!mb-0"
      >
        {title}
      </Typography.Title>
      <Link prefetch href="/profile">
        <Button
          shape="default"
          style={{ color: colorFillSecondary }}
          type="text"
          className="!px-0"
        >
          <IconThreeDots />
        </Button>
      </Link>
    </Header>
  );
};

export default PageHeader;
