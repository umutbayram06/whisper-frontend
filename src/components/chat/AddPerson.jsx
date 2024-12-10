import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

function AddPerson({ toast, setRooms, decodedToken, socket }) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/rooms",
        {
          participantUsernames: [username],
          roomType: "private",
        },
        {
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );

      const newRoom = response.data.newRoom;
      setRooms((prevRooms) => [
        ...prevRooms,
        {
          ...newRoom,
          calculatedRoomName:
            newRoom.roomName ||
            newRoom.participants.find(
              (participant) => participant._id != decodedToken.userID
            ).username,
          calculatedRoomImage:
            newRoom.roomType == "group"
              ? newRoom.roomImage
              : newRoom.participants.find(
                  (participant) => participant._id != decodedToken.userID
                ).profileImage,
        },
      ]);

      socket.emit("join-specific-room", { roomID: newRoom._id });

      toast.current.show({
        severity: "success",
        summary: "Room Created",
        life: 3000,
      });
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: error.response.data.message,
        life: 3000,
      });
    }
  };

  return (
    <div className="flex mt-2">
      <InputText
        id="username-add-person"
        placeholder="Username"
        onChange={handleChange}
        value={username}
      />
      <Button
        label="Add Person"
        className="ml-2"
        icon="pi pi-user-plus"
        onClick={handleSubmit}
        disabled={username == ""}
      />
    </div>
  );
}

export default AddPerson;
