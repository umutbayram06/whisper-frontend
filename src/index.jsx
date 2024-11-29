import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' import edilmeli
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';  // ThemeContext'i import et
import App from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgotPage from './ForgotPage';

// Main routing component
const Main = () => {
  return (
    <ThemeProvider> {/* Tema sağlama işlemi */}
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Main;