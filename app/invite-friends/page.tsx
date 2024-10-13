"use client";
import { Button, Typography } from "antd";
import Image from "next/image";

export default function Profile() {

  return (
    <div className="px-10 py-8 flex flex-col flex-grow h-full gap-10 justify-center items-center">
      <Image
        alt="Invite Friends"
        width={167}
        height={245}
        src="/assets/refer-a-friend-illustration.svg"
      />
      <div className="w-full text-center px-4">
        <Typography.Title level={3} className="text-center mt-8 !mb-0">
          Refer A Friend
        </Typography.Title>
        <Typography.Text
          type="secondary"
          className="text-center !mt-0 !text-lg !font-light"
        >
          Share Your Promo Code & Get $3 For Each Friend
        </Typography.Text>
      </div>
      <Button
        type="primary"
        size="large"
        className="!h-16 w-full !flex !justify-between !items-center !border-2 !border-white !rounded-2xl mt-8"
        icon={
          <Image
            alt="Icon Copu"
            width={24}
            height={24}
            src="/assets/icons/copy.svg"
          />
        }
        iconPosition="end"
      >
        BrainAiPartnerMR
      </Button>
    </div>
  );
}
