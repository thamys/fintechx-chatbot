import React, { useState } from "react";
import { Tabs } from "antd";
import IconHome from "./icons/IconHome";
import IconApps from "./icons/IconApps";
import IconHistory from "./icons/IconHistory";
import IconUser from "./icons/IconUser";

const items = [
  {
    key: "home",
    label: (
      <IconHome
        className="mt-3 mb-4"
      />
    ),
  },
  {
    key: "apps",
    label: (
      <IconApps
        className="mt-3 mb-4"
      />
    ),
  },
  {
    key: "history",
    label: (
      <IconHistory
        className="mt-3 mb-4"
      />
    ),
  },
  {
    key: "profile",
    label: (
      <IconUser
        className="mt-3 mb-4"
      />
    ),
  },
];

const MenuBottom: React.FC = () => {
  const [current, setCurrent] = useState("profile");

  return (
    <Tabs
      defaultActiveKey={current}
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
