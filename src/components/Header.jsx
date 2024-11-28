import React from "react";

function Header() {
  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        fontSize: "32px",
        color: "white",
        display: "flex", // Use flex to center content easily
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
        padding: "20px", // Padding to give some space from top/bottom
      }}
    >
      <h1>WHISPER</h1>
    </div>
  );
}

export default Header;
