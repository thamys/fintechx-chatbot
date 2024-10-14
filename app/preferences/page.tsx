"use client";
import { Typography } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import Link from "next/link";
import IconUserFilled from "../components/icons/IconUserFilled";
import IconPasswordFilled from "../components/icons/IconPasswordFilled";
import IconWalletFilled from "../components/icons/IconWalletFilled";
import IconPencilFilled from "../components/icons/IconPencilFilled";

export default function Profile() {

  const items: MenuItemType[] = [
    {
      key: "account-information",
      label: (
        <Link
          prefetch
          href="/account-informations"
          className="flex flex-col gap-1 hover:bg-trasparent 5 p-4 rounded-lg"
        >
          <Typography.Title level={5} className="!mb-0">
            Account Information
          </Typography.Title>
          <Typography.Text type="secondary">
            Change your Account information
          </Typography.Text>
        </Link>
      ),
      icon: <IconUserFilled />,
    },
    {
      key: "password",
      label: (
        <div className="flex flex-col gap-1">
          <Typography.Title level={5} className="!mb-0">
            Password
          </Typography.Title>
          <Typography.Text type="secondary">
            Change your Password
          </Typography.Text>
        </div>
      ),
      icon: <IconPasswordFilled />,
    },
    {
      key: "payment-methods",
      label: (
        <div className="flex flex-col gap-1">
          <Typography.Title level={5} className="!mb-0">
            Payment Methods
          </Typography.Title>
          <Typography.Text type="secondary">
            Add Your Credit / Credit Cards
          </Typography.Text>
        </div>
      ),
      icon: <IconWalletFilled />,
    },
    {
      key: "invite-friends",
      label: (
        <Link prefetch href="/invite-friends" className="flex flex-col gap-1">
          <Typography.Title level={5} className="!mb-0">
            Invite Your Friends
          </Typography.Title>
          <Typography.Text type="secondary">
            Get $3 For Each Invitation!
          </Typography.Text>
        </Link>
      ),
      icon: <IconPencilFilled />,
    },
  ];

  return (
    <div className="px-8">
      <nav className="mt-6 flex flex-col gap-6">
        {items.map((item: MenuItemType) => (
          <div

            key={item.key}
            className="customLink flex gap-6 justify-between items-center p-4 rounded-lg"
          >
            {item.icon}
            <div className="flex-grow">{item.label}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}
