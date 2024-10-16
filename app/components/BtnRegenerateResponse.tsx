import { Button } from "antd";
import Image from "next/image";
import React from "react";

const BtnRegenerateResponse: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <div className="flex justify-center">
      <Button type="default" onClick={onClick} className="!border !h-12">
        <Image
          alt="regenerate icon"
          src="/assets/icons/generate.svg"
          width={18}
          height={18}
        />
        Regenerate Response
      </Button>
    </div>
  );
};

export default BtnRegenerateResponse;
