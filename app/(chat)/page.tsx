"use client";
import { theme, Form, Input, Button, Spin } from "antd";
import UserMessage from "../components/UserMessage";
import IAMessage from "../components/IAMessage";
import BtnRegenerateResponse from "../components/BtnRegenerateResponse";
import Image from "next/image";
import { generateResponse } from "./actions";
import { useState } from "react";

type FormFieldsType = {
  message: string;
};

type ChatMessageType = {
  message: string;
  isUser: boolean;
};

export default function Home() {
  const [form] = Form.useForm();
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  async function onSendMessage(values: FormFieldsType) {
    setIsLoading(true);
    const message = values.message;
    setChatMessages((prev) => [...prev, { message, isUser: true }]);
    form.resetFields();
    const response = await generateResponse(message);
    setChatMessages((prev) => [
      ...prev,
      { message: response.toString(), isUser: false },
    ]);
    setIsLoading(false);
  }

  return (
    <div className="flex flex-grow flex-col max-h-full justify-end">
      <div className="relative h-full max-h-full mb-4 flex-grow overflow-y-scroll justify-end">
        <div
          id="chat-box"
          className="absolute max-h-full bottom-0 flex flex-col gap-4"
        >
          {chatMessages.map((chatMessage, index) =>
            chatMessage.isUser ? (
              <UserMessage key={index}>
                <p>{chatMessage.message}</p>
              </UserMessage>
            ) : (
              <IAMessage key={index}>
                <p>{chatMessage.message}</p>
              </IAMessage>
            )
          )}
          <BtnRegenerateResponse />
        </div>
      </div>
      <Form
        disabled={isLoading || isRegenerating}
        form={form}
        onFinish={onSendMessage}
        className="send-a-message-box !mx-8 !my-6"
      >
        <Form.Item<FormFieldsType>
          name="message"
          rules={[{ required: true }]}
          className="!mb-0"
        >
          <Input
            disabled={isLoading || isRegenerating}
            placeholder="Send a message."
            className="h-[48px] !pr-0"
            suffix={
              <Button type="text" htmlType="submit">
                {isLoading || isRegenerating ? (
                  <Spin size="small" />
                ) : (
                  <Image
                    alt="icon send"
                    src="/assets/icons/send.svg"
                    width={23}
                    height={23}
                  />
                )}
              </Button>
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
}
