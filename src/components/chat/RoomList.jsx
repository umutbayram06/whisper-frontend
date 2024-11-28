import { ListBox } from "primereact/listbox";
import React, { useEffect, useState } from "react";
import { Badge } from "primereact/badge";
import RoomItem from "./RoomItem";
import axios from "axios";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const roomItemTemplate = (option) => {
    return <RoomItem option={option} />;
  };

  useEffect(() => {
    const getUserRooms = async function () {
      try {
        const response = await axios.get("http://localhost:5000/rooms", {
          headers: { Authorization: localStorage.getItem("authToken") },
        });

        const { data: userRooms } = response;

        console.log(userRooms);
        setRooms(userRooms);
      } catch (error) {
        console.log(error);
        return null;
      }
    };

    getUserRooms();
  }, []);

  return (
    <div className="flex-grow-1 card mt-2 ">
      <ListBox
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.value)}
        filter
        filterBy="roomName"
        filterPlaceholder="Seach in contact list"
        focusOnHover={false}
        options={rooms}
        optionLabel="roomName"
        itemTemplate={roomItemTemplate}
        className="w-full no-text-selection h-full"
      />
    </div>
  );
}

export default RoomList;
