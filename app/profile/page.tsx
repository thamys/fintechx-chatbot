"use client";
import { Avatar, Badge, Flex, Progress, theme, Typography } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import Image from "next/image";

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
        <Image
          alt="Icon Settings"
          width={32}
          height={32}
          src="/assets/icons/settings.svg"
        />
      ),
    },
    {
      key: "account-security",
      label: (
        <div className="flex flex-col gap-2">
          <Typography.Title level={5} className="!mb-0">
            Account Security
          </Typography.Title>
          <Progress percent={80} strokeColor={colorText} showInfo={false} />
          <Typography.Text type="secondary">Excellent</Typography.Text>
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
        <Image
          alt="Icon Lock"
          width={32}
          height={32}
          src="/assets/icons/lock.svg"
        />
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
        <Image
          alt="Icon Help"
          width={32}
          height={32}
          src="/assets/icons/help.svg"
        />
      ),
    },
    {
      key: "logout",
      label: "Logout",
      icon: (
        <Image
          alt="Icon Logout"
          width={32}
          height={32}
          src="/assets/icons/logout.svg"
        />
      ),
    },
  ];

  return (
    <div className="p-8">
      <Flex className="flex-col" gap={4} justify="center" align="center">
        <Badge
          dot
          size="default"
          status="success"
          offset={[-15, 90]}
          style={{
            inlineSize: "22px",
            blockSize: "22px",
            border: "4px solid #FFFFFF",
            boxShadow: "none",
          }}
        >
          <Avatar size={105} src="/assets/profile.png" />
        </Badge>
        <Typography.Title level={3} className="!mb-0 mt-3">
          Tom Hillson
        </Typography.Title>
        <Typography.Text type="secondary">Tomhill@mail.com</Typography.Text>
      </Flex>
      <nav className="mt-20 px-4 flex flex-col gap-8">
        {items.map((item: MenuItemType) => (
          <div className="flex gap-4 justify-between items-start">
            {item.icon}
            <div className="flex-grow mt-[5px]">
              {typeof item.label === "string" ? (
                <Typography.Title level={5} className="!mb-0">
                  {item.label}
                </Typography.Title>
              ) : (
                item.label
              )}
            </div>
            <>{item.itemIcon}</>
          </div>
        ))}
      </nav>
    </div>
  );
}
