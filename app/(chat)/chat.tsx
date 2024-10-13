"use client";
import { Form, Input, Button, Spin } from "antd";
import UserMessage from "../components/UserMessage";
import IAMessage from "../components/IAMessage";
import BtnRegenerateResponse from "../components/BtnRegenerateResponse";
import Image from "next/image";
import { generateResponse } from "./actions";
import { useState } from "react";
import ChatWelcomeMessages from "../components/ChatWelcomeMessages";

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
  const [isLastMessageUser, setIsLastMessageUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  async function onSendMessage(values: FormFieldsType) {
    setIsLastMessageUser(true);
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
    setIsLastMessageUser(false);
  }

  async function onRegenerateResponse() {
    setIsRegenerating(true);
    const lastMessage = chatMessages[chatMessages.length - 2].message;
    const response = await generateResponse(lastMessage);
    setChatMessages((prev) => [
      ...prev.slice(0, -1),
      { message: response.toString(), isUser: false },
    ]);
    setIsRegenerating(false);
  }

  return (
    <div className="flex flex-grow flex-col max-h-full justify-end">
      <div className="relative h-full max-h-full mb-4 flex-grow overflow-y-scroll justify-end">
        <div
          id="chat-box"
          className="absolute w-full max-h-full bottom-0 flex flex-col justify-center gap-4"
        >
          {chatMessages.length === 0 && <ChatWelcomeMessages />}
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
          {!isLoading && !isLastMessageUser && chatMessages.length > 0 && (
            <BtnRegenerateResponse onClick={onRegenerateResponse} />
          )}
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
