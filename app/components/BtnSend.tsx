import { Button } from "antd";
import React from "react";
import IconSend from "./icons/IconSend";

const BtnSend: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <Button type="text" disabled={isLoading} className="hover:!bg-transparent active:!bg-transparent hover:opacity-50" htmlType="submit">
      <IconSend/>
    </Button>
  );
};

export default BtnSend;
