import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { Button } from "primereact/button";
import axios from "axios";

export default function ProfileImageUpload({ setUserImageURL }) {
  const toast = useRef(null);
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
        "http://localhost:5000/profile/image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );

      const filename = response.data.filename;
      const fileURL = `http://localhost:5000/uploads/${filename}`;
      console.log(fileURL);
      setUserImageURL(fileURL);
      console.log("Upload Successful", response.data);
    } catch (error) {
      console.error("Upload Failed", error);
    }
  };

  return (
    <div className="card flex justify-content-center align-items-center ">
      <Toast ref={toast}></Toast>
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
          accept="image/*,video/*"
        />
      </div>
    </div>
  );
}
