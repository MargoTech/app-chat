import { createContext, useContext, useState, useEffect } from "react";
import { fakeReply } from "../utils/mockSocket";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messagesByRoom, setMessagesByRoom] = useState(() => {
    try {
      const saved = localStorage.getItem("messagesByRoom");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error("Failed to load messages from localStorage", e);
      return {};
    }
  });

  const username = localStorage.getItem("username");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem("messagesByRoom", JSON.stringify(messagesByRoom));
  }, [messagesByRoom]);

  const sendMessage = (roomId, text) => {
    const msg = {
      id: crypto.randomUUID(),
      sender: username,
      text,
      timestamp: new Date().toISOString(),
    };

    setMessagesByRoom((prev) => ({
      ...prev,
      [roomId]: [...(prev[roomId] || []), msg],
    }));

    setIsTyping(true);

    fakeReply(text).then((reply) => {
      setTimeout(() => {
        setMessagesByRoom((prev) => ({
          ...prev,
          [roomId]: [...(prev[roomId] || []), reply],
        }));
        setIsTyping(false);
      }, 1000);
    });
  };

  return (
    <ChatContext.Provider
      value={{ username, messagesByRoom, sendMessage, isTyping }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
