"use client";
import SendMesageForm from "@/app/components/SendMesageForm";
import MessageCards from "./components/MessageCards";
import { theme, Typography } from "antd";
import { Poppins } from "next/font/google";

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
          className="absolute max-h-full bottom-0 flex flex-col gap-4 p-4"
        >
          <Typography.Title level={1} style={{ color: colorTextTertiary }} className="text-center">
            BrainBox
          </Typography.Title>
          {suggestions.map((suggestion, index) => (
            <MessageCards key={index}>
              <p
                style={{ color: colorTextTertiary }}
                className="text-center !mb-0 font-medium"
              >
                {suggestion}
              </p>
            </MessageCards>
          ))}
        </div>
      </div>
      <SendMesageForm />
    </div>
  );
}
