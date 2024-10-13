"use client";
import { Typography } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  const items: MenuItemType[] = [
    {
      key: "account-information",
      label: (
        <Link
          prefetch
          href="/account-informations"
          className="flex flex-col gap-1"
        >
          <Typography.Title level={5} className="!mb-0">
            Account Information
          </Typography.Title>
          <Typography.Text type="secondary">
            Change your Account information
          </Typography.Text>
        </Link>
      ),
      icon: (
        <Image
          alt="Icon Settings"
          width={32}
          height={32}
          src="/assets/icons/settings.svg"
        />
      ),
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
      icon: (
        <Image
          alt="Icon Lock"
          width={32}
          height={32}
          src="/assets/icons/lock.svg"
        />
      ),
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
      icon: (
        <Image
          alt="Icon Settings"
          width={32}
          height={32}
          src="/assets/icons/settings.svg"
        />
      ),
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
      icon: (
        <Image
          alt="Icon Lock"
          width={32}
          height={32}
          src="/assets/icons/lock.svg"
        />
      ),
    },
  ];

  return (
    <div className="px-10 py-8">
      <nav className="mt-6 flex flex-col gap-12">
        {items.map((item: MenuItemType) => (
          <div
            key={item.key}
            className="flex gap-6 justify-between items-center"
          >
            {item.icon}
            <div className="flex-grow">{item.label}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}
