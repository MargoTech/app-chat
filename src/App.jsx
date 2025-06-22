import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import { ChatProvider } from "./context/ChatContext";

export default function App() {
  const username = localStorage.getItem("username");

  return (
    <ChatProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat"
          element={username ? <ChatRoom /> : <Navigate to="/" />}
        />
      </Routes>
    </ChatProvider>
  );
}
