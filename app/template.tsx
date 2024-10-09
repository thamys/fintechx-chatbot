"use client";
import React, { PropsWithChildren } from "react";
import { Button, ConfigProvider, Layout, Typography } from "antd";
import { Poppins, Urbanist } from "next/font/google";
import Image from "next/image";

const { Header, Content } = Layout;

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const urbanist = Urbanist({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: urbanist.style.fontFamily,
          colorBgBase: "#FFFFFF",
          colorBgContainer: "#FFFFFF",
          colorBgLayout: "#FFFFFF",
        },
        components: {
          Typography: {
            fontFamily: poppins.style.fontFamily,
            fontWeightStrong: 500,
          },
          Button: {
            defaultBg: "rgba(255, 255, 255, 0.67) !important",
            defaultBorderColor: "transparent",
            defaultShadow: "5.92px 11.84px 23.68px 0px rgba(211, 209, 216, 0.3)",
          },
          Input: {
            borderRadius: 7,
            colorBorder: "#E1E1E1",
            fontSize: 16,
          }
        },
      }}
    >
      <Layout className="!min-h-screen">
        <Header className="!bg-transparent !py-10 !px-10 flex justify-between align-middle gap-4">
          <Button shape="default" type="default">
            <Image
              alt="arrow left icon"
              src="/assets/icons/arrow-left.svg"
              width={8}
              height={14}
            />
          </Button>
          <Typography.Title level={3}>Health</Typography.Title>
          <Button shape="default" type="link" className="!px-0">
            <Image
              alt="three-dots icon"
              src="/assets/icons/three-dots.svg"
              width={32}
              height={4}
            />
          </Button>
        </Header>
        <Content className="p-6 min-h-screen flex flex-col flex-grow">
          {children}
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
