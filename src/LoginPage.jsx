import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

// Resim dosyasını import et
import WhisperLogo from "./a_chat_application_named__WHISPER__s_logo__slogan_in__CHAT_ONLINE_-removebg-preview.png";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State değişikliği yönetimi
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={WhisperLogo}
            alt="Whisper Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* EMAIL Field */}
        <div className="p-field" style={{ marginBottom: "20px" }}>
          <label htmlFor="email" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
            EMAIL
          </label>
          <InputText
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{ width: "100%" }}
          />
        </div>

        {/* PASSWORD Field */}
        <div className="p-field" style={{ marginBottom: "20px" }}>
          <label htmlFor="password" style={{ fontWeight: "bold", marginBottom: "8px", display: "block" }}>
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
            style={{ width: "100%" }}
          />
        </div>

        {/* Links */}
        <p>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "blue", textDecoration: "underline" }}>
            Register here
          </Link>
        </p>
        <p>
          <Link to="/forgot" style={{ color: "blue", textDecoration: "underline" }}>
            Forgot My Password
          </Link>
        </p>

        {/* Submit Button */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            label="Submit"
            icon="pi pi-check"
            className="p-button-primary"
            onClick={() => console.log(formData)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
