export default function MessageBubble({ sender, text, isOwn, timestamp }) {
  const time = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] my-1 text-sm
      ${isOwn ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}
      >
        <p className="font-semibold">{sender}</p>
        <p>{text}</p>
        <span
          className={`block text-[10px] mt-1 ${
            isOwn ? "text-blue-100" : "text-gray-500"
          }`}
        >
          {time}
        </span>
      </div>
    </div>
  );
}
