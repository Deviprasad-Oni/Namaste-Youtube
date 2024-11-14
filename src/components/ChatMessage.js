import React from "react";
import { USER } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img className="h-8" alt="User" src={USER} />
      <span className="font-bold px-4">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
