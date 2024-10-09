"use client";
import React, { PropsWithChildren } from "react";
import {
  Button,
  ConfigProvider,
  Layout,
  Typography,
} from "antd";
import { Poppins, Urbanist} from "next/font/google";

const { Header, Content, Footer } = Layout;

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const urbanist = Urbanist({
  subsets: ['latin-ext'],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" ],
  style: ['normal', 'italic'],
})

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: urbanist.style.fontFamily,
        },
        components: {
          Typography: {
            fontFamily: poppins.style.fontFamily,
          },
        },
      }}
    >
      <Layout className="!min-h-screen">
        <Header className="!bg-transparent !py-6 flex justify-between align-middle gap-4">
          <Button shape="round" type="primary">
            Voltar
          </Button>
          <Typography.Title level={3}>Health</Typography.Title>
          <Button shape="round" type="primary">
            ...
          </Button>
        </Header>
        <Content className="p-6 min-h-screen flex flex-col flex-grow">{children}</Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
