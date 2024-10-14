import React, { useEffect, useRef } from "react";
import ChatWelcomeMessages from "./ChatWelcomeMessages";
import UserMessage from "./UserMessage";
import IAMessage from "./IAMessage";
import { InputRef } from "antd";

type ChatMessageType = {
  isUser: boolean;
  message: string;
};

const ChatMessages: React.FC<{
  chatMessages: ChatMessageType[];
  inputRef: React.RefObject<InputRef>;
}> = ({ chatMessages, inputRef }) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollToLastMessage = () => {
    const lastMessage = chatBoxRef.current?.lastElementChild;
    lastMessage?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToLastMessage();
    inputRef.current?.focus();
  }, [chatMessages, inputRef]);

  return (
    <div
      ref={chatBoxRef}
      id="chat-box"
      style={{ height: "300px" }}
      className="absolute scroll-smooth w-full bottom-0 flex flex-col justify-end gap-4"
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
    </div>
  );
};

export default ChatMessages;
