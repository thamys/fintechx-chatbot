"use client";
import React, { PropsWithChildren } from "react";
import { Layout, Typography } from "antd";
import { Poppins } from "next/font/google";

const { Header, Content } = Layout;

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const App: React.FC<PropsWithChildren> = ({ children }) => {
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
