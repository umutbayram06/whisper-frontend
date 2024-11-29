import React, { createContext, useState, useContext } from "react";

// ThemeContext'i oluştur
const ThemeContext = createContext();

// Tema durumu için custom hook
export const useTheme = () => useContext(ThemeContext);

// Tema sağlayıcısı (Provider) bileşeni
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Tema değiştirme fonksiyonu
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};