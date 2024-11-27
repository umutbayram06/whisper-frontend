import React, { useState } from 'react';
import WHISPER_HEADER from "./Header.jsx";
import { Link } from 'react-router-dom';
const App = () => {
  const [formData, setFormData] = useState({
    EMAIL: '',
    PASSWORD: '',
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`EMAIL: ${formData.email}, PASSWORD: ${formData.password}`);
  };

  return ( <div>
    <WHISPER_HEADER />
   
    <div
   
    style={{
      display: 'flex',
      justifyContent: 'center',    // Horizontally center the form
      alignItems: 'flex-start',    // Align the form to the top
      height: '100vh',             // Full viewport height
      fontFamily: 'Arial, sans-serif',
      paddingTop: '20px',          // Add some space from the top
    }}
  >
    {/* Full-width background container with orange color */}
    <div
      style={{
        background: '#F44336', // Orange background color
        width: '100%',         // Make the background stretch across the full width
        padding: '20px 0',     // Add vertical padding around the form
        display: 'flex',       // Center the form horizontally
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '300px',   // Fixed width for the form
          width: '100%',        // Ensure the form width does not exceed the max width
        }}
      >
        {/* EMAIL Field */}
        <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '8px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
  
        {/* PASSWORD Field */}
        <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label htmlFor="password" style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: '8px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <p>
        Don't have an account? 
        <Link to="/register" style={{ color: 'blue', textDecoration: 'underline' }}>
          Register here
        </Link>
      </p>
      <p>
         
        <Link to="/forgot" style={{ color: 'blue', textDecoration: 'underline' }}>
          Forgot My Password
        </Link>
      </p>
        <button
          type="submit"
          style={{
            padding: '10px 16px',
            backgroundColor: '#0056b3',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  </div></div>
  );
};

export default App;