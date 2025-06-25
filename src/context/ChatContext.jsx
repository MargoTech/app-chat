import { createContext, useContext, useState, useEffect } from "react";
import { fakeReply } from "../utils/mockSocket";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const username = localStorage.getItem("username");

  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    const msg = {
      id: crypto.randomUUID(),
      sender: username,
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, msg]);

    setIsTyping(true);

    fakeReply(msg.text).then((reply) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, reply]);
        setIsTyping(false);
      }, 1000);
    });
  };

  return (
    <ChatContext.Provider value={{ username, messages, sendMessage, isTyping }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
