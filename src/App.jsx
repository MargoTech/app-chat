import { Routes, Route, Navigate, Router } from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import { ChatProvider } from "./context/ChatContext";
import RoomList from "./components/RoomList";

export default function App() {
  const username = localStorage.getItem("username");

  return (
    <Router>
      <ChatProvider>
        <div className="flex h-screen">
          <RoomList />
          <main>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/chat"
                element={username ? <ChatRoom /> : <Navigate to="/" />}
              />
            </Routes>
          </main>
        </div>
      </ChatProvider>
    </Router>
  );
}
