"use client";
import { Form, Input, InputRef } from "antd";
import BtnRegenerateResponse from "../components/BtnRegenerateResponse";
import { generateResponse } from "./actions";
import { useRef, useState } from "react";
import BtnSend from "../components/BtnSend";
import ChatLoading from "../components/ChatLoading";
import ChatMessages from "../components/ChatMessages";

type FormFieldsType = {
  message: string;
};

type ChatMessageType = {
  message: string;
  isUser: boolean;
};

export default function Chat() {
  const [form] = Form.useForm();
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);
  const [isLastMessageUser, setIsLastMessageUser] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const InputRef = useRef<InputRef>(null);

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
        <ChatMessages
          chatMessages={chatMessages}
        />
      </div>
      {!isLoading &&
        !isRegenerating &&
        !isLastMessageUser &&
        chatMessages.length > 0 && (
          <BtnRegenerateResponse onClick={onRegenerateResponse} />
        )}
      {(isLoading || isRegenerating) && (
        <ChatLoading isRegenerating={isRegenerating} />
      )}
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
            autoFocus
            ref={InputRef}
            disabled={isLoading || isRegenerating}
            placeholder="Send a message."
            className="h-[48px] !pr-0"
            suffix={<BtnSend isLoading={isLoading || isRegenerating} />}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
