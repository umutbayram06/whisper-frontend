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
import ProfileSettings from "../profileSettings/ProfileSettings";
import Logout from "../auth/Logout";
import { useLocation } from "react-router-dom";

function Chat() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const toast = useRef(null);
  const [socket, setSocket] = useState(null);
  const [userImageURL, setUserImageURL] = useState(
    "http://localhost:5000/uploads/defaultUserImage.png"
  );

  const token = localStorage.getItem("authToken")?.split(" ")[1];
  const decodedToken = jwtDecode(token);

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
    const getUserImage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/profile/image",
          {
            headers: { Authorization: localStorage.getItem("authToken") },
          }
        );

        const { profileImage } = response.data;
        setUserImageURL(`http://localhost:5000/uploads/${profileImage}`);
      } catch (error) {
        console.log(error);
      }
    };

    getUserRooms();
    getUserImage();

    const socket = io("http://localhost:5000", {
      extraHeaders: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    setSocket(socket);

    const onReceiveMessage = ({ message: newMessage }) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on("receive-message", onReceiveMessage);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchRoomMessages = async () => {
      if (selectedRoom != null) {
        try {
          const response = await axios.get(
            `http://localhost:5000/rooms/${selectedRoom._id}/messages`,
            {
              headers: {
                Authorization: localStorage.getItem("authToken"),
              },
            }
          );

          const roomMessages = response.data.messages;
          setMessages(roomMessages);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchRoomMessages();
  }, [selectedRoom]);

  return (
    <div className="flex flex-grow-1 align-items-stretch">
      <Toast ref={toast} />
      <div className="flex flex-column">
        <div className="flex align-items-center my-2 gap-2">
          <Image
            src={userImageURL}
            alt="Image"
            width="56"
            height="auto"
            preview
            imageClassName="border-circle"
            pt={{
              button: {
                className: "border-circle",
              },
            }}
          />
          <ProfileSettings
            userImageURL={userImageURL}
            setUserImageURL={setUserImageURL}
          />
        </div>
        <div className="w-full">
          <CreateGroup
            toast={toast}
            setRooms={setRooms}
            decodedToken={decodedToken}
            socket={socket}
          />
        </div>

        <AddPerson
          toast={toast}
          setRooms={setRooms}
          decodedToken={decodedToken}
          socket={socket}
        />
        <RoomList
          rooms={rooms}
          setRooms={setRooms}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
        <Logout />
      </div>

      {selectedRoom ? (
        <Messaging
          selectedRoom={selectedRoom}
          socket={socket}
          messages={messages}
          decodedToken={decodedToken}
        />
      ) : null}
    </div>
  );
}

export default Chat;
