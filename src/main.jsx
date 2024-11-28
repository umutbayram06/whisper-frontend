// Main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./index.jsx";

import "primereact/resources/primereact.min.css"; // Core PrimeReact CSS
import "primeicons/primeicons.css"; // PrimeIcons
import "primeflex/primeflex.css"; // PrimeFlex (optional)
import "primereact/resources/themes/md-dark-deeppurple/theme.css";

// Main routing component to define all routes

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
