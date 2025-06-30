import { useEffect, useRef, useState } from "react";
import { useChat } from "../context/ChatContext";
import MessageBubble from "../components/MessageBubble";
import { useParams } from "react-router-dom";

export default function ChatRoom() {
  const { username, messagesByRoom, sendMessage, isTyping } = useChat();
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const { roomId } = useParams();

  const messages = messagesByRoom[roomId] || [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(roomId, input);
      setInput("");
    }
  };

  return (
    <div className="h-screen flex flex-col p-4 bg-gray-100">
      <header className="text-xl font-semibold mb-4">
        Room: <span className="font-mono">{roomId}</span> - Welcome, {username}!{" "}
      </header>
      <div className="flex-1 overflow-y-auto px-2">
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            isOwn={msg.sender === username}
            timestamp={msg.timestamp}
          />
        ))}

        {isTyping && (
          <div className="text-gray-500 italic text-sm mt-2">
            🤖 Bot is typing...
          </div>
        )}

        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleSend} className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
