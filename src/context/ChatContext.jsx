import { createContext, useContext, useState, useEffect } from "react";
import { fakeReply } from "../utils/mockSocket";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const username = localStorage.getItem("username");

  const sendMessage = (text) => {
    const msg = {
      id: crypto.randomUUID(),
      sender: username,
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, msg]);

    fakeReply(msg.text).then((reply) => {
      setMessages((prev) => [...prev, reply]);
    });
  };

  return (
    <ChatContext.Provider value={{ username, messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
