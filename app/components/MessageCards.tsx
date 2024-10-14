"use client";
import { Card, theme } from "antd";
import React, { PropsWithChildren } from "react";

const MessageCards: React.FC<PropsWithChildren> = ({ children }) => {
  const { useToken } = theme;
  const {
    token: { colorTextTertiary },
  } = useToken();
  return <Card bordered={false} style={{ color: colorTextTertiary }} className="!rounded-2xl !shadow-none !mx-10">{children}</Card>;
};

export default MessageCards;
