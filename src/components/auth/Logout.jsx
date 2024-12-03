import { Button } from "primereact/button";
import React from "react";

import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <Button label="Logout" onClick={handleClick} className="mt-2"></Button>
  );
}

export default Logout;
