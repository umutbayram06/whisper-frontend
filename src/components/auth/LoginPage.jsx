import React, { useEffect, useRef, useState } from "react";
import Header from "../Header.jsx";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Password } from "primereact/password";
import axios from "axios";
import { Toast } from "primereact/toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    const { username, password } = formData;
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("authToken", `Bearer ${token}`);

      navigate("/chat");
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: error.response.data.message,
        detail: "Try Again !",
        life: 3000,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/chat");
    }
  }, [navigate]);

  return (
    <div>
      <Toast ref={toast} />
      <Header />

      <div className="register-page flex justify-content-center">
        <Card
          title="Login for Chat"
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

            {/* Password Field */}
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

            <div className="mb-2">
              Don't have an account ? <Link to="/register">Create Account</Link>
            </div>

            {/* <div className="mb-2">
              Forgot password ?{" "}
              <Link to="/forgot-password">Recover account</Link>
            </div>*/}

            <Button
              label="Login"
              icon="pi pi-sign-in"
              className="p-button-rounded mt-3 "
              onClick={handleSubmit}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
