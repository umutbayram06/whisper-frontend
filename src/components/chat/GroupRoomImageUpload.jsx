import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import axios from "axios";

export default function GroupRoomImageUpload({
  selectedRoom,
  setRooms,
  setSelectedRoom,
}) {
  const fileInputRef = useRef(null);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      await sendFile(file);
    }
  };

  const sendFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.patch(
        `http://localhost:5000/rooms/${selectedRoom._id}/roomImage`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );

      console.log(response);

      const filename = response.data.filename;

      setRooms((prevRooms) => {
        return prevRooms.map((room) => {
          if (room._id == selectedRoom._id) {
            return { ...room, calculatedRoomImage: filename };
          } else {
            return room;
          }
        });
      });

      setSelectedRoom((prevSelectedRoom) => ({
        ...prevSelectedRoom,
        calculatedRoomImage: filename,
      }));
    } catch (error) {
      console.error("Upload Failed", error);
    }
  };

  return (
    <div className="card flex justify-content-center align-items-center mt-2 ">
      <div className="p-d-flex p-flex-column p-ai-center ml-1">
        <Button
          className="p-button-rounded p-button-outlined"
          label="Change Image"
          onClick={() => fileInputRef.current.click()}
          rounded
          text
        />

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
          accept="image/*"
        />
      </div>
    </div>
  );
}
