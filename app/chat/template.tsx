"use client";
import React, { PropsWithChildren } from "react";
import { Button, Layout, Typography } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const { Header, Content } = Layout;

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const App: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  return (
    <Layout className="!min-h-screen flex flex-col flex-grow">
      <Header className="!bg-transparent !py-10 !px-10 flex justify-between items-center gap-4">
        <Link prefetch href="/">
          <Button
            shape="default"
            type="default"
            className="!h-[45px] !w-[45px] !rounded-2xl !border-none"
          >
            <Image
              alt="arrow left icon"
              src={
                isDarkMode
                  ? "/assets/icons/arrow-left-dark.svg"
                  : "/assets/icons/arrow-left.svg"
              }
              width={8}
              height={14}
            />
          </Button>
        </Link>
        <Typography.Title
          level={3}
          style={{ fontFamily: poppins.style.fontFamily }}
          className="!mb-0"
        >
          Health
        </Typography.Title>
        <Link prefetch href="/profile">
          <Button shape="default" type="link" className="!px-0">
            <Image
              alt="three-dots icon"
              src={
                isDarkMode
                  ? "/assets/icons/three-dots-dark.svg"
                  : "/assets/icons/three-dots.svg"
              }
              width={32}
              height={4}
            />
          </Button>
        </Link>
      </Header>
      <Content className="h-full flex flex-col flex-grow">{children}</Content>
    </Layout>
  );
};

export default App;
