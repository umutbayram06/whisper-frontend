import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const ForgotPage = () => {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    console.log("Email Sent to:", email);
    // Burada backend işlemi veya işlem logic'i eklenebilir
  };

  return (
    <div className="forgot-page">
      <Card title="Forgot Password" className="p-shadow-3" style={{ width: "25rem" }}>
        <div className="p-fluid">
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

          {/* Send Button */}
          <Button
            label="Send"
            icon="pi pi-send"
            className="p-button-rounded p-button-primary"
            onClick={handleSend}
          />
        </div>
      </Card>
    </div>
  );
};

export default ForgotPage;