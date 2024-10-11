import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Badge, Flex, Menu, Tabs } from "antd";
import Image from "next/image";
import { MenuItemType } from "antd/es/menu/interface";
import Link from "next/link";
import { TabsType } from "antd/es/tabs";

const items = [
  {
    key: "home",
    label: (
      <Image
        alt="Icon Home"
        width={28}
        height={28}
        src="/assets/icons/home.svg"
        className="mt-3 pb-4"
      />
    ),
  },
  {
    key: "apps",
    label: (
      <Image
        alt="Icon Apps"
        width={28}
        height={28}
        src="/assets/icons/apps.svg"
        className="mt-3 pb-4"
      />
    ),
  },
  {
    key: "history",
    label: (
      <Image
        alt="Icon History"
        width={28}
        height={28}
        src="/assets/icons/history.svg"
        className="mt-3 pb-4"
      />
    ),
  },
  {
    key: "profile",
    label: (
      <Image
        alt="Icon User"
        width={28}
        height={28}
        src="/assets/icons/user.svg"
        className="mt-3 pb-4"
      />
    ),
  },
];

const MenuBottom: React.FC = () => {
  const [current, setCurrent] = useState("profile");

  return (
    <Tabs
      defaultActiveKey="profile"
      tabPosition="top"
      size="large"
      type="card"
      centered
      indicator={{ size: (origin) => origin - 20, align: "center" }}
      tabBarGutter={32}
      items={items}
      onChange={(key) => setCurrent(key)}
      className="!fixed !w-screen border-t bottom-0 px-8 left-0"
    />
  );
};

export default MenuBottom;
