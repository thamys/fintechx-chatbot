"use client";
import { theme, Form, Input  } from "antd";
import UserMessage from "../components/UserMessage";
import IAMessage from "../components/IAMessage";
import BtnRegenerateResponse from "../components/BtnRegenerateResponse";
import Image from "next/image";

type FormFieldsType = {
  message: string;
};

export default function Home() {
  return (
    <div className="flex flex-grow flex-col max-h-full justify-end">
      <div className="relative h-full max-h-full mb-4 flex-grow overflow-y-scroll justify-end">
        <div
          id="chat-box"
          className="absolute max-h-full bottom-0 flex flex-col gap-4"
        >
          
          <UserMessage>
            <p>Natural Foods for Cancer patience</p>
          </UserMessage>
          <IAMessage>
            <p>
              A diet rich in natural foods can be beneficial for cancer
              patients. Here are some natural foods that you may consider:
              <br/>
              Leafy green vegetables - spinach, kale, collard greens, and others are
              packed with vitamins, minerals, and antioxidants that can help to
              boost the immune system and fight cancer.
            </p>
          </IAMessage>
          <BtnRegenerateResponse />
        </div>
      </div>
      <Form className="send-a-message-box !mx-8 !my-6">
      <Form.Item<FormFieldsType> className="!mb-0">
        <Input placeholder="Send a message." className="h-[48px]" suffix={<Image alt="icon send" src="/assets/icons/send.svg" width={23} height={23} /> } />
      </Form.Item>
    </Form>
    </div>
  );
}
