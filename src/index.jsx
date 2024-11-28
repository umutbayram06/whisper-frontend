import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/auth/LoginPage.jsx";
import RegisterPage from "./components/auth/RegisterPage.jsx";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage.jsx";
import Chat from "./components/chat/Chat.jsx";

// Main routing component to define all routes
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />{" "}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />{" "}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default Main;
