import React, { useRef, useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";

const FileUpload = ({ icon, socket, type, selectedRoom }) => {
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

      const response = await axios.post(
        "http://localhost:5000/fileUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );

      const filename = response.data.filename;
      const fileUrl = `http://localhost:5000/uploads/${filename}`;

      console.log("Upload Successful", response.data);

      socket.emit("send-message", {
        messageData: {
          content: fileUrl,
          type,
        },
        roomID: selectedRoom._id,
      });
    } catch (error) {
      console.error("Upload Failed", error);
    }
  };

  return (
    <div className="p-d-flex p-flex-column p-ai-center ml-1">
      <Button
        className="p-button-rounded p-button-outlined"
        icon={`pi ${icon}`}
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
        accept="image/*,video/*"
      />
    </div>
  );
};

export default FileUpload;
