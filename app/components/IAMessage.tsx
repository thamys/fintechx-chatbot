import { Button, theme } from "antd";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const IAMessage: React.FC<PropsWithChildren> = ({ children }) => {
  const { useToken } = theme;
  const {
    token: { colorTextTertiary, colorBgElevated },
  } = useToken();
  return (
    <div style={{ backgroundColor: colorBgElevated }} className="w-full flex flex-col gap-4 mt-2 py-4 px-8">
      <div
        className="flex gap-4 mb-2 justify-between items-center"
      >
        <Image
          className="rounded-lg flex-shrink-0"
          alt="user picture"
          src="/assets/logo-inverted.svg"
          width={37}
          height={37}
        />
        <div className="flex flex-shrink-0 items-center gap-2">
          <Button type="link" className="!px-0">
            <Image
              alt="copy icon"
              src="/assets/icons/copy.svg"
              width={18}
              height={18}
            />
          </Button>
          <Button type="link" className="!px-0">
            <Image
              alt="share icon"
              src="/assets/icons/share.svg"
              width={18}
              height={18}
            />
          </Button>
        </div>
      </div>
      <div className="flex-grow" style={{ color: colorTextTertiary }}>
        {children}
      </div>
    </div>
  );
};

export default IAMessage;
