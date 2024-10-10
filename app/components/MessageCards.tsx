"use client";
import { Card, theme } from "antd";
import React, { PropsWithChildren } from "react";

const MessageCards: React.FC<PropsWithChildren> = ({ children }) => {
  return <Card bordered={false} className="!rounded-2xl">{children}</Card>;
};

export default MessageCards;
