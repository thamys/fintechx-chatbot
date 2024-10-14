"use client";
import { Button, theme, Typography } from "antd";
import IconCopyFilled from "../components/icons/IconCopyFilled";
import IllustrationReferAFriend from "../components/IllustrationReferAFriend";

export default function Profile() {
  const { useToken } = theme;
  const {
    token: { colorText, colorBgElevated },
  } = useToken();
  return (
    <div className="px-10 py-8 flex flex-col flex-grow h-full gap-10 justify-center items-center">
      <IllustrationReferAFriend className="max-w-full" />
      <div className="w-full text-center px-4">
        <Typography.Title level={3} className="text-center mt-8 !mb-1 !font-semibold">
          Refer A Friend
        </Typography.Title>
        <Typography.Text
          className="text-center !mt-0  !text-[#666666] !text-lg !font-light"
        >
          Share Your Promo Code & Get $3 For Each Friend
        </Typography.Text>
      </div>
      <Button
        style={{
          backgroundColor: colorBgElevated,
          borderColor: colorText,
        }}
        type="text"
        size="large"
        className="!h-16 w-full !flex !justify-between !items-center !border-2 !font-semibold !rounded-2xl mt-8"
        icon={<IconCopyFilled />}
        iconPosition="end"
      >
        BrainAiPartnerMR
      </Button>
    </div>
  );
}
