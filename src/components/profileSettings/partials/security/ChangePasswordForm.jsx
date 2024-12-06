import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import axios from "axios";

function ChangePasswordForm({ setVisible, toast }) {
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.patch(
        "http://localhost:5000/auth/change-password",
        { newPassword: newPasswordInput },
        { headers: { Authorization: localStorage.getItem("authToken") } }
      );
      setVisible(false);
      toast.current.show({
        severity: "success",
        summary: "Password Successfully Updated !",
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
          <Password
            id="newPassword"
            value={newPasswordInput}
            onChange={(e) => setNewPasswordInput(e.target.value)}
            inputClassName="w-full"
            className="w-full"
            feedback={false}
          />
          <label htmlFor="newPassword" className="font-bold block mb-2">
            New password
          </label>
        </FloatLabel>
      </div>

      <div className="mt-5">
        <FloatLabel>
          <InputText
            type="password"
            id="confirmPassword"
            value={confirmPasswordInput}
            onChange={(e) => setConfirmPasswordInput(e.target.value)}
            inputClassName="w-full"
            className="w-full"
            invalid={newPasswordInput !== confirmPasswordInput}
          />
          <label htmlFor="confirmPassword" className="font-bold block mb-2">
            Confirm password
          </label>
        </FloatLabel>
      </div>

      <Button
        label="Change password"
        className="mt-3"
        severity="danger"
        disabled={
          !newPasswordInput ||
          !confirmPasswordInput ||
          newPasswordInput !== confirmPasswordInput
        }
        onClick={handleSubmit}
      />
    </div>
  );
}

export default ChangePasswordForm;
