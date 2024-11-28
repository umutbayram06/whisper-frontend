import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import Header from "../Header.jsx";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Header />
      <div className="forgot-page flex justify-content-center">
        <Card
          title="Recover Account"
          className="p-shadow-3"
          style={{ width: "25rem" }}
        >
          <div className="p-fluid">
            {/* Email Field */}
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2"
              />
            </div>

            {/* Send Button */}
            <Button
              label="Send"
              icon="pi pi-send"
              className="p-button-rounded p-button-primary mt-3"
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
