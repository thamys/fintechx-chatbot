import { Button, theme } from "antd";
import React from "react";
import IconSend from "./icons/IconSend";

const BtnSend: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { useToken } = theme;
  const {
    token: { colorTextTertiary },
  } = useToken();
  return (
    <Button
      type="text"
      style={{
        color: colorTextTertiary,
      }}
      disabled={isLoading}
      className="hover:!bg-transparent active:!bg-transparent hover:opacity-50"
      htmlType="submit"
    >
      <IconSend />
    </Button>
  );
};

export default BtnSend;
