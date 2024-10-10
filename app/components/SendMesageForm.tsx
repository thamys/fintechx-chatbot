import { Form, Input } from "antd";
import Image from "next/image";
import React from "react";

type FormFieldsType = {
  message: string;
};

const SendMesageForm = () => {
  return (
    <Form className="send-a-message-box !mx-8 !my-6">
      <Form.Item<FormFieldsType> className="!mb-0">
        <Input placeholder="Send a message." className="h-[48px]" suffix={<Image alt="icon send" src="/assets/icons/send.svg" width={23} height={23} /> } />
      </Form.Item>
    </Form>
  );
};

export default SendMesageForm;
