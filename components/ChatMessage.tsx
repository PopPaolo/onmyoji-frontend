import React from "react";

interface ChatMessageProps {
  message: string;
  isSystemMessage: boolean;
}

const ChatMessage = ({ message, isSystemMessage }: ChatMessageProps) => {
  return (
    <div
      className={`flex flex-row ${isSystemMessage ? "justify-start" : "justify-end"} mb-3`}
    >
      <div
        className={`flex flex-col ${isSystemMessage ? "items-start" : "items-end"}`}
      >
        <p className={"text-xs text-gray-500 px-1"}>
          {isSystemMessage ? "system" : "user"}
        </p>
        <div
          className={`max-w-xs px-4 py-2 rounded-lg ${
            isSystemMessage
              ? "bg-system"
              : "bg-secondary-light dark:bg-secondary-dark"
          }`}
        >
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
export default ChatMessage;
