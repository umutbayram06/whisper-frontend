import { Badge } from "primereact/badge";
import React, { useEffect } from "react";

function RoomItem({ option }) {
  return (
    <div className="flex flex-column ">
      <div className="flex">
        <img src="https://placehold.co/50x50" className="border-circle mr-2" />
        <p className="font-bold flex-grow-1">{option.roomName}</p>
      </div>
    </div>
  );
}

export default RoomItem;
