import React, { useEffect, useRef } from "react";
import ChatWelcomeMessages from "./ChatWelcomeMessages";
import UserMessage from "./UserMessage";
import IAMessage from "./IAMessage";

type ChatMessageType = {
  isUser: boolean;
  message: string;
};

const ChatMessages: React.FC<{
  chatMessages: ChatMessageType[];
}> = ({ chatMessages }) => {
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const scrollToLastMessage = () => {
    const lastMessage = chatBoxRef.current?.lastElementChild;
    lastMessage?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [chatMessages]);

  return (
    <div
      ref={chatBoxRef}
      id="chat-box"
      style={{ height: "300px" }}
      className="absolute scroll-smooth w-full bottom-0 flex flex-col justify-center gap-4"
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
