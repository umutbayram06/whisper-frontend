import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import Header from "../Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
        

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toast = useRef(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const { username, email, password } = formData;
    try {
      const response = await axios.post("http://localhost:5000/auth/register", {
        username,
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("authToken", `Bearer ${token}`);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.current.show({ severity: 'Error', summary: 'Error', detail: "Failed to register user. Please try again" });
    }
  };

  return (
    <div>
      <Toast severity="Error" className="Error" ref={toast} />
      <Header />

      <div className="register-page flex justify-content-center">
        <Card
          title="Register for Chat"
          className="p-shadow-3"
          style={{ width: "25rem" }}
        >
          <div className="p-fluid">
            <div className="p-field mb-3">
              <label htmlFor="name">Username</label>
              <InputText
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="mt-2"
              />
            </div>

            <div className="p-field mb-3">
              <label htmlFor="name">Email</label>
              <InputText
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2"
              />
            </div>

            <div className="p-field mb-3">
              <label htmlFor="password">Password</label>
              <Password
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                toggleMask
                placeholder="Enter your password"
                className="mt-2"
                feedback={false}
              />
            </div>

            <Button
              label="Register"
              icon="pi pi-user-plus"
              className="p-button-rounded mt-3 "
              onClick={handleSubmit}
            />
            
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
