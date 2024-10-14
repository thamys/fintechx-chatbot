import { Typography } from "antd";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const ChatLoading: React.FC<{ isRegenerating: boolean }> = ({
  isRegenerating,
}) => {
  return (
    <div className="flex justify-center py-2">
      <Typography.Text type="secondary" className="text-center animate-bounce">
        <LoadingOutlined className="mr-2" />
        {isRegenerating ? 'Okay! Estou gerando uma nova resposta' : 'Carregando sua resposta...'} 
      </Typography.Text>
    </div>
  );
};

export default ChatLoading;
