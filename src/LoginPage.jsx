import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Tema kontrolü için useTheme hook'u
import "./darkmode.css";

// Logo ve görseller
import WhisperLogo from "./a_chat_application_named__WHISPER__s_logo__slogan_in__CHAT_ONLINE_-removebg-preview.png";
import ChatBalloon from "./chat_balloon.png";
import People from "./people.png";

const App = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Dark Mode ve toggle fonksiyonu

  // Form verilerini tutan state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Form elemanlarında değişiklikleri yönetmek için handleChange fonksiyonu
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    console.log("Form Data Submitted:", formData); // Form verilerini konsola yazdırır
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5", // Arka plan
        color: darkMode ? "#ffffff" : "#000000", // Metin rengi
        position: "relative",
      }}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px",
          backgroundColor: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#000000" : "#ffffff",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Sol Taraf Resimler */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={ChatBalloon}
          alt="Chat Balloon"
          style={{
            width: "300px",
            height: "300px",
            marginBottom: "30px",
            filter: darkMode ? "brightness(0.8)" : "none",
          }}
        />
        <img
          src={People}
          alt="People"
          style={{
            width: "300px",
            height: "300px",
            filter: darkMode ? "brightness(0.8)" : "none",
          }}
        />
      </div>

      {/* Form Bölümü */}
      <div
        style={{
          width: "300px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: darkMode ? "#1e1e1e" : "#fff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={WhisperLogo}
            alt="Whisper Logo"
            style={{
              maxWidth: "100%",
              height: "auto",
              filter: darkMode ? "invert(1)" : "none",
            }}
          />
        </div>

        {/* EMAIL Alanı */}
        <div className="p-field" style={{ marginBottom: "20px" }}>
          <label
            htmlFor="email"
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              display: "block",
            }}
          >
            EMAIL
          </label>
          <InputText
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#333333" : "#ffffff", // Input arka planı
              color: darkMode ? "#ffffff" : "#000000", // Input metin rengi
              borderColor: darkMode ? "#555555" : "#cccccc", // Input kenarlık rengi
            }}
          />
        </div>

        {/* PASSWORD Alanı */}
        <div className="p-field" style={{ marginBottom: "20px" }}>
          <label
            htmlFor="password"
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              display: "block",
            }}
          >
            PASSWORD
          </label>
          <Password
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            toggleMask
            feedback={false}
            placeholder="Enter your password"
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#000000" : "#ffffff", // Dark mode için siyah arka plan
              color: darkMode ? "#ffffff" : "#000000", // Dark mode için yazı rengi
              borderColor: darkMode ? "#555555" : "#cccccc", // Dark mode için kenarlık
            }}
          />
        </div>

        {/* Linkler */}
        <p>
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: darkMode ? "#4caf50" : "blue",
              textDecoration: "underline",
            }}
          >
            Register here
          </Link>
        </p>
        <p>
          <Link
            to="/forgot"
            style={{
              color: darkMode ? "#4caf50" : "blue",
              textDecoration: "underline",
            }}
          >
            Forgot My Password
          </Link>
        </p>

        {/* Submit Butonu */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            label="Submit"
            icon="pi pi-check"
            className="p-button-primary"
            style={{
              backgroundColor: darkMode ? "#4caf50" : "#007bff", // Dark mode için buton rengi
              color: "#ffffff",
            }}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
