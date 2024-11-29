import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useTheme } from "./ThemeContext"; // Tema yönetimi için useTheme hook'unu import ediyoruz

const RegisterPage = () => {
  const { darkMode } = useTheme(); // Tema durumunu alıyoruz

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Registration Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="register-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5", // Dark mode arka planı
        color: darkMode ? "#ffffff" : "#000000", // Dark mode metin rengi
      }}
    >
      <Card
        title="Register for Chat"
        className="p-shadow-3"
        style={{
          width: "25rem",
          backgroundColor: darkMode ? "#1e1e1e" : "#fff", // Dark mode'da kartın arka planı
          color: darkMode ? "#ffffff" : "#000000", // Kartın metin rengi
        }}
      >
        <div className="p-fluid">
          {/* Name Field */}
          <div className="p-field">
            <label htmlFor="name" style={{ fontWeight: "bold" }}>
              Name
            </label>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{
                width: "100%",
                backgroundColor: darkMode ? "#333333" : "#ffffff", // Input arka planı
                color: darkMode ? "#ffffff" : "#000000", // Input metin rengi
                borderColor: darkMode ? "#555555" : "#cccccc", // Input kenarlık rengi
              }}
            />
          </div>

          {/* Email Field */}
          <div className="p-field">
            <label htmlFor="email" style={{ fontWeight: "bold" }}>
              Email
            </label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                backgroundColor: darkMode ? "#333333" : "#ffffff", // Input arka planı
                color: darkMode ? "#ffffff" : "#000000", // Input metin rengi
                borderColor: darkMode ? "#555555" : "#cccccc", // Input kenarlık rengi
              }}
            />
          </div>

          {/* Password Field */}
          <div className="p-field">
            <label htmlFor="password" style={{ fontWeight: "bold" }}>
              Password
            </label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              placeholder="Enter your password"
              style={{
                width: "100%",
                backgroundColor: darkMode ? "#333333" : "#ffffff", // Input arka planı
                color: darkMode ? "#ffffff" : "#000000", // Input metin rengi
                borderColor: darkMode ? "#555555" : "#cccccc", // Input kenarlık rengi
              }}
            />
          </div>

          {/* Register Button */}
          <Button
            label="Register"
            icon="pi pi-user-plus"
            className="p-button-rounded p-button-success"
            onClick={handleRegister}
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#4caf50" : "#007bff", // Buton rengi
              color: "#ffffff", // Buton metin rengi
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
