import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const RegisterPage = () => {
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
    <div className="register-page">
      <Card title="Register for Chat" className="p-shadow-3" style={{ width: "25rem" }}>
        <div className="p-fluid">
          {/* Name Field */}
          <div className="p-field">
            <label htmlFor="name">Name</label>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="p-field">
            <label htmlFor="email">Email</label>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="p-field">
            <label htmlFor="password">Password</label>
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              placeholder="Enter your password"
            />
          </div>

          {/* Register Button */}
          <Button
            label="Register"
            icon="pi pi-user-plus"
            className="p-button-rounded p-button-success"
            onClick={handleRegister}
          />
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;