export default function MessageBubble({ sender, text, isOwn }) {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] my-1 text-sm
      ${isOwn ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}
      >
        <p className="font-semibold">{sender}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
