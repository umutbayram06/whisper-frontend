import React from 'react';


function WHISPER_HEADER() {
  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        fontSize: '32px',
        color: '#333',
        display: 'flex',            // Use flex to center content easily
        justifyContent: 'center',  // Horizontally center the content
        alignItems: 'center',      // Vertically center the content
        padding: '20px',           // Padding to give some space from top/bottom
      }}
    >
      <h1>WHISPER</h1>
      
      
    </div>
  );
}

export default WHISPER_HEADER;