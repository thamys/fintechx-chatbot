import { Button } from "antd";
import Image from "next/image";
import React, { PropsWithChildren } from "react";

const UserMessage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full flex gap-4 justify-between items-center mt-2 py-4 px-8">
      <Image
        className="rounded-lg flex-shrink-0"
        alt="user picture"
        src="/assets/profile.png"
        width={37}
        height={37}
      />
      <div className="flex-grow">{children}</div>
      <Button type="link" className="!px-0 flex-shrink-0">
        <Image
          alt="edit icon"
          src="/assets/icons/edit.svg"
          width={18}
          height={18}
        />
      </Button>
    </div>
  );
};

export default UserMessage;
