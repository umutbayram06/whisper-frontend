import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";

const ThemeSwitcher = ({ currentTheme, setCurrentTheme, themes }) => {
  return (
    <div>
      Theme:
      <Dropdown
        value={currentTheme}
        onChange={(e) => {
          setCurrentTheme(e.value);
          localStorage.setItem("themeIndex", themes.indexOf(e.value));
        }}
        options={themes}
        optionLabel="name"
        placeholder="Select a theme"
        className="w-full md:w-14rem ml-2"
        checkmark={true}
        highlightOnSelect={false}
      />
    </div>
  );
};

export default ThemeSwitcher;
