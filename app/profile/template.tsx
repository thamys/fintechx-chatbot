"use client";
import React, { PropsWithChildren } from "react";
import { Button, ConfigProvider, Layout, theme, Typography } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { getTheme } from "../themes";

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
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        ...getTheme(isDarkMode ? "dark" : "light"),
      }}
    >
      <Layout className="!min-h-screen flex flex-col flex-grow">
        <Header className="!bg-transparent !py-10 !px-10 flex justify-between align-middle gap-4">
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
          <Typography.Title
            level={3}
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            Health
          </Typography.Title>
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
        </Header>
        <Content className="h-full flex flex-col flex-grow">
          {children}
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
