// index.jsx (Entry point)
import React from 'react';





// Import global CSS

// Main.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './LoginPage.jsx'; // The home page
import RegisterPage from './RegisterPage.jsx'; // Your lnogi page component (create this if it doesn't exist)
import ForgotPage from './ForgotPage.jsx';

// Main routing component to define all routes
const Main = () => { 
 
  return (
    <Router>
      <Routes>
        {/* Define the routes here */}
        <Route path="/" element={<App />} />         {/* App is the homepage */}
        <Route path="/register" element={<RegisterPage />} /> {/* Register page route */}
        <Route path="/forgot" element={<ForgotPage />} /> {/* Register page route */}
      </Routes>
    </Router>
  );
};

export default Main;