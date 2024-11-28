import { Badge } from "primereact/badge";
import React, { useEffect } from "react";

function RoomItem({ option, decodedToken }) {
  return (
    <div className="flex flex-column ">
      <div className="flex">
        <img
          src={option.roomImage}
          className="border-circle mr-2"
          width="56"
          height="auto"
        />
        <p className="font-bold flex-grow-1">{option.calculatedRoomName}</p>
      </div>
    </div>
  );
}

export default RoomItem;
