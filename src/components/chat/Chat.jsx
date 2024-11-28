import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { ListBox } from "primereact/listbox";
import { Image } from "primereact/image";
import { Toast } from "primereact/toast";
import CreateGroup from "./CreateGroup";
import RoomList from "./RoomList";
import Messaging from "./Messaging";
import AddPerson from "./AddPerson";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";

/*const socket = io("http://localhost:5000", {
  extraHeaders: {
    Authorization: localStorage.getItem("authToken"),
  },
}); // Your server URL
*/

const token = localStorage.getItem("authToken").split(" ")[1];
const decodedToken = jwtDecode(token);

function Chat() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const toast = useRef(null);

  useEffect(() => {
    const getUserRooms = async function () {
      try {
        const response = await axios.get("http://localhost:5000/rooms", {
          headers: { Authorization: localStorage.getItem("authToken") },
        });

        const { data: userRooms } = response;

        setRooms(
          userRooms.map((room) => ({
            ...room,
            calculatedRoomName:
              room.roomName ||
              room.participants.find(
                (participant) => participant._id != decodedToken.userID
              ).username,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };

    getUserRooms();

    //socket.emit("initialize");
  }, []);
  return (
    <div className="flex flex-grow-1 align-items-stretch">
      <Toast ref={toast} />
      <div className="flex flex-column">
        <div className="w-full">
          <CreateGroup
            toast={toast}
            setRooms={setRooms}
            decodedToken={decodedToken}
          />
        </div>

        <AddPerson
          toast={toast}
          setRooms={setRooms}
          decodedToken={decodedToken}
        />
        <RoomList
          rooms={rooms}
          setRooms={setRooms}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
      </div>

      {selectedRoom ? <Messaging selectedRoom={selectedRoom} /> : null}
    </div>
  );
}

export default Chat;
