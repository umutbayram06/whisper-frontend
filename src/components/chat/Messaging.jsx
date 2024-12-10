import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "./EmojiPicker";
import MessageItem from "./MessageItem";
import FileUpload from "../chat/FileUpload";
import RoomDetails from "./RoomDetails";

//import RecordVoice from "./RecordVoice";

function Messaging({
  selectedRoom,
  messages,
  socket,
  decodedToken,
  setRooms,
  setSelectedRoom,
}) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const sendTextMessage = () => {
    socket.emit("send-message", {
      messageData: {
        content: message,
        type: "text",
      },
      roomID: selectedRoom._id,
    });
  };

  const handleSendMessageKeyDown = (e) => {
    if (e.key == "Enter") {
      sendTextMessage();
      setMessage("");
    }
  };

  const handleSendMessageClick = (e) => {
    sendTextMessage();
    setMessage("");
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.sender._id == decodedToken.userID) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-column ml-5 flex-grow-1 ">
      <div className="flex align-items-center">
        <Image
          src={`http://localhost:5000/uploads/${selectedRoom.calculatedRoomImage}`}
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
        <p className="ml-2 text-lg flex-grow-1">
          {selectedRoom.calculatedRoomName}
        </p>
        <RoomDetails
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          setRooms={setRooms}
        />
      </div>

      <div className="flex-grow-1 overflow-y-auto max-h-full px-5">
        {messages.map((message) => (
          <MessageItem
            key={message._id}
            message={message}
            decodedToken={decodedToken}
          />
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="flex mt-2">
        <div className="p-inputgroup flex-1">
          <EmojiPicker setMessage={setMessage} />
          <InputText
            className="flex-grow-1 w-full"
            onKeyDown={handleSendMessageKeyDown}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Type your message"
          ></InputText>

          <FileUpload
            icon="pi-camera"
            socket={socket}
            type="image"
            selectedRoom={selectedRoom}
          />
          <FileUpload
            icon="pi-video"
            socket={socket}
            type="video"
            selectedRoom={selectedRoom}
          />
          {/* <RecordVoice />*/}
        </div>
        <Button
          icon="pi pi-send"
          rounded
          aria-label="Filter"
          className="ml-2 "
          onClick={handleSendMessageClick}
        />
      </div>
    </div>
  );
}

export default Messaging;
