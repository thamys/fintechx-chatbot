"use client";
import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import PageHeader from "../components/PageHeader";

const { Content } = Layout;

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="!min-h-screen flex flex-col flex-grow max-w-screen-lg m-auto">
      <PageHeader title="Health" linkBack="/" />
      <Content className="h-full flex flex-col flex-grow">{children}</Content>
    </Layout>
  );
};

export default App;
