import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function RoomList() {
  const [rooms, setRooms] = useState(() => {
    return JSON.parse(localStorage.getItem("rooms")) || ["general", "random"];
  });
  const [newRoom, setNewRoom] = useState("");
  const navigate = useNavigate();

  const handleAddRoom = () => {
    const room = newRoom.trim();
    if (room && !rooms.includes(room)) {
      const updated = [...rooms, room];
      setRooms(updated);
      localStorage.setItem("rooms", JSON.stringify(updated));
      navigate(`/room/${room}`);
    }
    setNewRoom("");
  };

  return (
    <aside className="w-64 bg-white shadow p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold md-4">Rooms</h2>
      <ul className="flex-1 overflow-y-auto space-y-1 mb-4">
        {rooms.map((room) => (
          <li key={room}>
            <Link
              to={`/room/${room}`}
              className="block p-2 rounded hover:bg-gray-300"
            >
              {room}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <input
          type="text"
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
          placeholder="New room name"
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={handleAddRoom}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Room
        </button>
      </div>
    </aside>
  );
}
