"use client";
import { Avatar, Badge, Flex, Progress, theme, Typography } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import Image from "next/image";
import Link from "next/link";
import IconSettings from "../components/icons/IconSettings";
import IconLock from "../components/icons/IconLock";
import IconHelp from "../components/icons/IconHelp";
import IconLogout from "../components/icons/IconLogout";

const SettingsLink: React.FC<{ item: MenuItemType }> = ({ item }) => {
  return (
    <>
      {item.icon}
      <div className="flex-grow mt-[5px]">
        {typeof item.label === "string" ? (
          <Typography.Title level={4} className="!mb-0 !font-normal">
            {item.label}
          </Typography.Title>
        ) : (
          item.label
        )}
      </div>
      <>{item.itemIcon}</>
    </>
  );
};

export default function Profile() {
  const { useToken } = theme;
  const {
    token: { colorText },
  } = useToken();

  const items: MenuItemType[] = [
    {
      key: "preferences",
      label: "Preferences",
      itemIcon: (
        <Image
          alt="Icon Chevron"
          width={7}
          height={13}
          src="/assets/icons/chevron.svg"
          className="mt-3"
        />
      ),
      icon: (
        <IconSettings />
      ),
    },
    {
      key: "account-security",
      label: (
        <div className="flex flex-col gap-2">
          <Typography.Title level={4} className="!mb-0 !font-normal">
            Account Security
          </Typography.Title>
          <Progress percent={80} strokeColor={colorText} showInfo={false} />
          <Typography.Text type="secondary" className="!font-normal !text-base" >Excellent</Typography.Text>
        </div>
      ),
      itemIcon: (
        <Image
          alt="Icon Chevron"
          width={7}
          height={13}
          src="/assets/icons/chevron.svg"
          className="mt-3"
        />
      ),
      icon: (
        <IconLock />
      ),
    },
    {
      key: "customer-support",
      label: "Customer Support",
      itemIcon: (
        <Image
          alt="Icon Chevron"
          width={7}
          height={13}
          src="/assets/icons/chevron.svg"
          className="mt-3"
        />
      ),
      icon: (
        <IconHelp />
      ),
    },
    {
      key: "logout",
      label: "Logout",
      icon: (
        <IconLogout />
      ),
    },
  ];

  return (
    <div className="px-8">
      <Flex className="flex-col" gap={4} justify="center" align="center">
        <Badge
          dot
          size="default"
          status="success"
          offset={[-10, 95]}
          style={{
            inlineSize: "22px",
            blockSize: "22px",
            border: "4px solid #FFFFFF",
            boxShadow: "none",
          }}
        >
          <Avatar size={120} src="/assets/profile.png" />
        </Badge>
        <Typography.Title level={2} className="!mb-0 mt-3 !font-semibold">
          Tom Hillson
        </Typography.Title>
        <Typography.Text type="secondary" className="!text-base !font-normal">Tomhill@mail.com</Typography.Text>
      </Flex>
      <nav className="mt-12 flex flex-col gap-2">
        {items.map((item: MenuItemType) =>
          item.key === "preferences" ? (
            <Link
              prefetch
              href={`/${item.key}`}
              key={item.key}
              style={{ color: colorText }}
              className={`flex gap-4 justify-between items-start text-current hover:bg-current !bg-opacity-5 p-4 rounded-lg`}
            >
              <SettingsLink item={item} />
            </Link>
          ) : (
            <div
              key={item.key}
              className="flex gap-4 justify-between items-start p-4"
            >
              <SettingsLink item={item} />
            </div>
          )
        )}
      </nav>
    </div>
  );
}
