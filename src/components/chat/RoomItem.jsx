import { Badge } from "primereact/badge";
import React, { useEffect } from "react";

function RoomItem({ option }) {
  return (
    <div className="flex flex-column ">
      <div className="flex">
        <img
          src={`http://localhost:5000/uploads/${option.calculatedRoomImage}`}
          className="border-circle mr-2"
          width="56"
          height="56"
        />
        <div className="flex flex-column">
          <p className="font-bold flex-grow-1">{option.calculatedRoomName}</p>
          <p>{option.calculatedRoomNotificationMessage}</p>
        </div>
        {option.calculatedRoomNotificationMessage ? (
          <Badge severity="danger"></Badge>
        ) : null}
      </div>
    </div>
  );
}

export default RoomItem;
