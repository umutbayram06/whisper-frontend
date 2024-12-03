import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage.jsx";
import RegisterPage from "./components/auth/RegisterPage.jsx";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage.jsx";
import Chat from "./components/chat/Chat.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { Toast } from "primereact/toast";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />{" "}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />{" "}
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
