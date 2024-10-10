"use client";
import SendMesageForm from "@/app/components/SendMesageForm";
import MessageCards from "./components/MessageCards";
import { theme, Typography } from "antd";
import { Poppins } from "next/font/google";
import UserMessage from "./components/UserMessage";
import IAMessage from "./components/IAMessage";

const suggestions = [
  "Remembers what user said earlier in the conversation",
  "Allows user to provide. follow-up corrections With Ai",
  "Limited knowledge of world and events after 2021",
  "May occasionally generate incorrect information",
  "May occasionally produce harmful instructions or biased content",
];

export default function Home() {
  const { useToken } = theme;
  const {
    token: { colorTextSecondary, colorTextTertiary },
  } = useToken();
  return (
    <div className="flex flex-grow flex-col max-h-full justify-end">
      <div className="relative h-full max-h-full mb-4 flex-grow overflow-y-scroll justify-end">
        <div
          id="chat-box"
          className="absolute max-h-full bottom-0 flex flex-col gap-4"
        >
          <Typography.Title
            level={1}
            style={{ color: colorTextTertiary }}
            className="text-center"
          >
            BrainBox
          </Typography.Title>
          {suggestions.map((suggestion, index) => (
            <MessageCards key={index}>
              <p
                className="text-center !mb-0 font-medium"
              >
                {suggestion}
              </p>
            </MessageCards>
          ))}
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
        </div>
      </div>
      <SendMesageForm />
    </div>
  );
}
