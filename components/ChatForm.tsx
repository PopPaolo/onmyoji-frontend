"use client";

import React, { useState } from "react";

const ChatForm = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={"flex gap-2 py-2 px-5 border-2 rounded-full items-center"}
    >
      {/* Media Icon */}
      <div>XX</div>
      <input
        type={"text"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={"Placeholder"}
        className={"flex-1 w-full border-x-1 px-2 my-1 focus:outline-none"}
      />
      {/* Voice Input Icon */}
      <div>XX</div>
      {/*<button*/}
      {/*  type="submit"*/}
      {/*  className={*/}
      {/*    "px-3 py-1.5 rounded-lg text-secondary-light dark:text-secondary-dark bg-system"*/}
      {/*  }*/}
      {/*>*/}
      {/*  Send*/}
      {/*</button>*/}
    </form>
  );
};
export default ChatForm;
