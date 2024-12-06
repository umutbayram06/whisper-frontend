import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import axios from "axios";

function ChangeUsernameForm({ setVisible, toast }) {
  const [newUsernameInput, setNewUsernameInput] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.patch(
        "http://localhost:5000/auth/change-username",
        { newUsername: newUsernameInput },
        { headers: { Authorization: localStorage.getItem("authToken") } }
      );
      setVisible(false);
      toast.current.show({
        severity: "success",
        summary: "Username Successfully Updated !",
        detail: null,
        life: 3000,
        closable: false,
      });
    } catch (error) {
      console.log(error);
      toast.current.show({
        severity: "error",
        summary: error.response.data.message,
        detail: null,
        life: 3000,
        closable: false,
      });
    }
  };

  return (
    <div className="flex flex-column justify-content-center">
      <div className="mt-5">
        <FloatLabel>
          <InputText
            id="newUsername"
            value={newUsernameInput}
            onChange={(e) => setNewUsernameInput(e.target.value)}
            inputClassName="w-full"
            className="w-full"
          />
          <label htmlFor="newUsername" className="font-bold block mb-2">
            New username
          </label>
        </FloatLabel>
      </div>

      <Button
        label="Change username"
        className="mt-3"
        severity="danger"
        disabled={!newUsernameInput}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default ChangeUsernameForm;
