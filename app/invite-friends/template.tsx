"use client";
import React, { PropsWithChildren } from "react";
import { Button, Layout, Typography } from "antd";
import { Poppins } from "next/font/google";
import Image from "next/image";
import MenuBottom from "../components/MenuBottom";

const { Header, Content, Footer } = Layout;

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
    <Layout className="!min-h-screen w-full flex flex-col flex-grow">
      <Header className="!bg-transparent !py-14 !px-10 flex justify-center items-center">
        <Typography.Title
          level={4}
          style={{ fontFamily: poppins.style.fontFamily }}
          className="text-center flex-grow !mb-0"
        >
          Invite Friends
        </Typography.Title>
      </Header>
      <Content className="h-full flex flex-col flex-grow">{children}</Content>
    </Layout>
  );
};

export default App;
