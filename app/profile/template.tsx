"use client";
import React, { PropsWithChildren } from "react";
import { Button, Layout, theme, Typography } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";
import MenuBottom from "../components/MenuBottom";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const App: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { useToken } = theme;
  const {
    token: { colorBgBase },
  } = useToken();

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  return (
    <Layout className="!min-h-screen w-full flex flex-col flex-grow max-w-screen-lg m-auto">
      <Header className="!bg-transparent !py-14 !px-10 flex justify-between items-center gap-4">
        <Link prefetch href="/chat">
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
          level={4}
          style={{ fontFamily: poppins.style.fontFamily }}
          className="text-center flex-grow pr-14 !mb-0"
        >
          Profile
        </Typography.Title>
      </Header>
      <Content className="h-full flex flex-col flex-grow">{children}</Content>
      <Footer style={{ backgroundColor: colorBgBase }}>
        <MenuBottom />
      </Footer>
    </Layout>
  );
};

export default App;
