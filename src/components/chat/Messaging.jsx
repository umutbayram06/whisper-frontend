import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "./EmojiPicker";
import TakePhoto from "./TakePhoto";
//import RecordVoice from "./RecordVoice";

function Messaging({
  selectedRoom,
  ownUserId,
  messages,
  setMessages,
  socket,
  decodedToken,
}) {
  const [message, setMessage] = useState("");

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

  return (
    <div className="flex flex-column ml-5 flex-grow-1 h-screen overflow-y-auto ">
      <div className="flex align-items-center">
        <Image
          src={selectedRoom.roomImage}
          alt="Image"
          width="56"
          height="auto"
          preview
          imageClassName="border-circle"
        />
        <p className="ml-2 text-lg ">{selectedRoom.calculatedRoomName}</p>
      </div>

      <div className="flex-grow-1">
        {messages.map((message) => (
          <p
            key={message._id}
            className={`text-xl ${
              message.sender._id == decodedToken.userID ? "text-right" : ""
            }`}
          >
            {message.sender.username}: {message.content}
          </p>
        ))}
      </div>

      <div className="flex ">
        <div className="p-inputgroup flex-1">
          <InputText
            className="flex-grow-1 w-full"
            onKeyDown={handleSendMessageKeyDown} // Attach the event handler
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Type your message"
          ></InputText>
          <EmojiPicker />
          <TakePhoto />
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
