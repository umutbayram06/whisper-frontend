import { ListBox } from "primereact/listbox";
import React, { useEffect, useState } from "react";
import RoomItem from "./RoomItem";

function RoomList({ rooms, selectedRoom, setSelectedRoom }) {
  const roomItemTemplate = (option) => {
    return <RoomItem option={option} />;
  };

  return (
    <div className="flex-grow-1 card mt-2 ">
      <ListBox
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.value)}
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
