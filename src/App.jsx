import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import { ChatProvider } from "./context/ChatContext";
import RoomList from "./components/RoomList";
import JoinPage from "./pages/JoinPage";

export default function App() {
  const username = localStorage.getItem("username");

  return (
    <ChatProvider>
      <div className="flex h-screen">
        <RoomList />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/room/general" replace />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/room/:roomId" element={<ChatRoom />} />
          </Routes>
        </main>
      </div>
    </ChatProvider>
  );
}
