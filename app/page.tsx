"use client";

import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";
import { useEffect, useState } from "react";
import { socket } from "@/lib/socketClient";

export default function Home() {
  const [messages, setMessages] = useState<
    { message: string; isSystemMessage: boolean }[]
  >([]);

  useEffect(() => {
    socket.on(
      "system_response",
      (data: { message: string; isSystemMessage: boolean }) => {
        setMessages((prev) => [...prev, data]);
      },
    );

    return () => {
      socket.off("server_message");
    };
  }, []);

  const handleSendMessage = (message: string) => {
    const data = { message: message, isSystemMessage: false };
    setMessages((prev) => [...prev, data]);
    socket.emit("client_command", data);
  };

  return (
    <div className="flex flex-col justify-between w-full h-[100vh]">
      <div className="flex justify-between items-end w-full pt-10 pb-5">
        {/*Menu Icon*/}
        <div className={"max-w-[5ch] leading-4"}>X X X X X X X X X</div>
        <h1 className={"text-center text-5xl "}>Onmyōji</h1>
        {/* Note Craft Menu Icon */}
        <div className={"max-w-[5ch] leading-4"}>X X X X X X X X X</div>
      </div>

      {/* TODO Make chat scroll on it's own */}
      <div
        className={"flex-1 overflow-y-auto p-2 bg-gray-100 border-2 rounded-lg"}
      >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.message}
            isSystemMessage={msg.isSystemMessage}
          />
        ))}
      </div>
      <div className={"mb-20 mt-5"}>
        <ChatForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
