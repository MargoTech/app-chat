import { Link, useParams } from "react-router-dom";

const ROOMS = ["general", "devs", "random"];

export default function RoomList() {
  const { roomId } = useParams();

  return (
    <aside className="w-64 bg-white shadow p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold md-4">Rooms</h2>
      {ROOMS.map((room) => (
        <Link
          key={room}
          to={`/room/${room}`}
          className={`p-2 rounded ${
            roomId === room
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-blue-100"
          }`}
        >
          #{room}
        </Link>
      ))}
    </aside>
  );
}
