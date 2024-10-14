"use client";
import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import { Poppins } from "next/font/google";
import PageHeader from "../components/PageHeader";

const { Content } = Layout;

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="!min-h-screen flex flex-col flex-grow">
      <PageHeader title="Health" linkBack="/" />
      <Content className="h-full flex flex-col flex-grow">{children}</Content>
    </Layout>
  );
};

export default App;
