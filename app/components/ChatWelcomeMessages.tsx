"use client";
import MessageCards from "../components/MessageCards";
import { theme, Typography } from "antd";

const suggestions = [
  "Remembers what user said earlier in the conversation",
  "Allows user to provide. follow-up corrections With Ai",
  "Limited knowledge of world and events after 2021",
  "May occasionally generate incorrect information",
  "May occasionally produce harmful instructions or biased content",
];

const ChatWelcomeMessages = () => {
  const { useToken } = theme;
  const {
    token: { colorTextSecondary },
  } = useToken();
  return (
    <>
      <Typography.Title
        level={1}
        style={{ color: colorTextSecondary }}
        className="text-center"
      >
        BrainBox
      </Typography.Title>
      {suggestions.map((suggestion, index) => (
        <MessageCards key={index}>
          <p className="text-center !mb-0 font-light text-base">{suggestion}</p>
        </MessageCards>
      ))}
    </>
  );
};

export default ChatWelcomeMessages;
