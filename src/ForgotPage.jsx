import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { useTheme } from "./ThemeContext"; // Tema kontrolü için useTheme hook'u
import { useNavigate } from "react-router-dom"; // useNavigate'i ekleyin

const ForgotPage = () => {
  const { darkMode } = useTheme(); // Dark Mode durumu
  const navigate = useNavigate(); // Yönlendirme için navigate fonksiyonu
  const [email, setEmail] = useState("");

  const handleSend = () => {
    console.log("Email Sent to:", email);
    navigate("/renew"); // /renew rotasına yönlendir
  };

  return (
    <div
      className="forgot-page"
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5", // Dark mode için arka plan
        color: darkMode ? "#ffffff" : "#000000", // Dark mode için metin rengi
      }}
    >
      <Card
        title="Forgot Password"
        className="p-shadow-3"
        style={{
          width: "25rem",
          backgroundColor: darkMode ? "#1e1e1e" : "#fff", // Dark mode için card arka planı
          color: darkMode ? "#ffffff" : "#000000", // Dark mode için card metin rengi
        }}
      >
        <div className="p-fluid">
          {/* Email Field */}
          <div className="p-field" style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                display: "block",
              }}
            >
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

          {/* Send Button */}
          <Button
            label="Send"
            icon="pi pi-send"
            className="p-button-rounded p-button-primary"
            onClick={handleSend} // handleSend fonksiyonunu çağır
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#4caf50" : "#007bff", // Dark mode için buton arka planı
              color: "#ffffff", // Buton metin rengi
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default ForgotPage;
