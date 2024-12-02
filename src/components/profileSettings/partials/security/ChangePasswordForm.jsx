import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($newPassword: String!, $currentPassword: String!) {
    changePassword(newPassword: $newPassword, currentPassword: $currentPassword)
  }
`;

function ChangePasswordForm({ setVisible }) {
  const toast = useRef(null);
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const [changePassword] = useMutation(CHANGE_PASSWORD, {
    onCompleted: () => {
      toast.current.show({
        severity: "success",
        summary: "Successful !",
        detail: "You have successfully changed your password !",
        life: 3000,
      });

      setCurrentPasswordInput("");
      setNewPasswordInput("");
      setConfirmPasswordInput("");
    },
    onError: (error) => {
      toast.current.show({
        severity: "error",
        summary: "Failed !",
        detail: error.message,
        life: 3000,
      });
    },
  });

  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </>
  );
  return (
    <div className="flex flex-column justify-content-center">
      <Toast ref={toast} />
      <div className="mt-3">
        <FloatLabel>
          <InputText
            type="password"
            id="currentPassword"
            value={currentPasswordInput}
            onChange={(e) => setCurrentPasswordInput(e.target.value)}
            inputClassName="w-full"
            className="w-full"
          />
          <label htmlFor="currentPassword" className="font-bold block mb-2">
            Current password
          </label>
        </FloatLabel>
      </div>

      <div className="mt-5">
        <FloatLabel>
          <Password
            id="newPassword"
            value={newPasswordInput}
            onChange={(e) => setNewPasswordInput(e.target.value)}
            header={header}
            footer={footer}
            inputClassName="w-full"
            className="w-full"
            invalid={
              newPasswordInput && currentPasswordInput === newPasswordInput
            }
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
          !currentPasswordInput ||
          !newPasswordInput ||
          !confirmPasswordInput ||
          newPasswordInput !== confirmPasswordInput
        }
        onClick={() => {
          changePassword({
            variables: {
              currentPassword: currentPasswordInput,
              newPassword: newPasswordInput,
            },
          });
        }}
      />
    </div>
  );
}

export default ChangePasswordForm;
