import axios from "axios";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

function AddPerson({ toast }) {
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
      toast.current.show({
        severity: "success",
        summary: "Room Created",
        life: 3000,
      });
    } catch (error) {
      console.log(error);
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
