// Main.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './LoginPage.jsx'; 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from './index.jsx';

import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons
import "primeflex/primeflex.css"; // PrimeFlex (optional)

// Main routing component to define all routes
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    
  <React.StrictMode>
    <Main /> {/* Render Main component which contains the Router */}
  </React.StrictMode>
);
