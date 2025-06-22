import { useState } from "react";
import { useChat } from "../context/ChatContext";
import MessageBubble from "../components/MessageBubble";

export default function ChatRoom() {
  const { username, messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100">
      <h1 className="text-xl font-semibold mb-4"> Welcome, {username}! </h1>
      <div className="flex-1 bg-white rounded shadow p-4 overflow-y-auto">
        {/* Messages will appear here */}
      </div>
      <div className="mt-4">{/* Input field will go here */}</div>
    </div>
  );
}
