import React, { createContext, useState, useEffect, useContext } from "react";

// Tema context'i oluştur
const ThemeContext = createContext();

// Tema durumu için custom hook
export const useTheme = () => useContext(ThemeContext);

// Tema sağlayıcısı (Provider) bileşeni
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // body elementine dark-mode sınıfını ekle veya kaldır
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};