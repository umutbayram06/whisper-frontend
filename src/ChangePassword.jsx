import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useTheme } from "./ThemeContext"; // Tema kontrolü için useTheme hook'u

const ChangePassword = () => {
  const { darkMode } = useTheme(); // Dark Mode durumu

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState(null);

  const handleSubmit = () => {
    // Şifre doğrulama
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    console.log({ code, password, confirmPassword });
    // Backend işlemi buraya eklenebilir
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5", // Dark mode için arka plan
        color: darkMode ? "#ffffff" : "#000000", // Metin rengi
      }}
    >
      <Card
        title="Change Password"
        subTitle="Please enter the code and set your new password"
        className="p-shadow-3"
        style={{
          width: "30rem",
          padding: "1.5rem",
          borderRadius: "8px",
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff", // Dark mode için kart arka planı
          color: darkMode ? "#ffffff" : "#000000", // Dark mode için kart metin rengi
        }}
      >
        <div className="p-fluid">
          {/* Code Input */}
          <div className="p-field">
            <label htmlFor="code" style={{ fontWeight: "bold" }}>
              Code
            </label>
            <InputNumber
              id="code"
              value={code}
              onValueChange={(e) => setCode(e.value)}
              className="p-inputtext-sm"
              placeholder="Enter the code"
              style={{
                width: "100%",
                backgroundColor: darkMode ? "#333333" : "#ffffff", // Input arka planı
                color: darkMode ? "#ffffff" : "#000000",
                borderColor: darkMode ? "#555555" : "#cccccc",
              }}
            />
          </div>

          {/* New Password Input */}
          <div className="p-field" style={{ marginTop: "1rem" }}>
            <label htmlFor="password" style={{ fontWeight: "bold" }}>
              New Password
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              feedback={false}
              className="p-inputtext-sm"
              placeholder="Enter your new password"
              inputStyle={{
                backgroundColor: darkMode ? "#333333" : "#ffffff", // Dark mode input arka planı
                color: darkMode ? "#ffffff" : "#000000",
                borderColor: darkMode ? "#555555" : "#cccccc",
              }}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="p-field" style={{ marginTop: "1rem" }}>
            <label htmlFor="confirmPassword" style={{ fontWeight: "bold" }}>
              Confirm New Password
            </label>
            <Password
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              toggleMask
              feedback={false}
              className="p-inputtext-sm"
              placeholder="Re-enter your new password"
              inputStyle={{
                backgroundColor: darkMode ? "#333333" : "#ffffff", // Dark mode input arka planı
                color: darkMode ? "#ffffff" : "#000000",
                borderColor: darkMode ? "#555555" : "#cccccc",
              }}
            />
          </div>

          {/* Submit Button */}
          <Button
            label="Submit"
            icon="pi pi-check"
            className="p-button-success p-button-rounded"
            onClick={handleSubmit}
            style={{
              width: "100%",
              marginTop: "1.5rem",
              backgroundColor: darkMode ? "#4caf50" : "#007bff", // Dark mode buton rengi
              color: "#ffffff",
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;
