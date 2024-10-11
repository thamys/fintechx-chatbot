"use client";
import { Avatar, Badge, Flex, Progress, theme, Typography } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import Image from "next/image";
import FormAccountInformations from "../components/FormAccountInformations";

export default function Profile() {
  const { useToken } = theme;
  const {
    token: { colorText },
  } = useToken();

  return (
    <div className="px-10 mt-20">
      <FormAccountInformations />
    </div>
  );
}
