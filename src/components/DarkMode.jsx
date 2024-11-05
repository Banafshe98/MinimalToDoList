import React, { useContext } from "react";
import { DarkModeContext } from "../usecontext/DarkModeContext"; // Ensure this is imported correctly

const DarkMode = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext); // Use context to get darkMode and setDarkMode

  const ToggleDark = () => {
    setDarkMode(!darkMode); // Toggle dark mode using context
  };

  return (
    <button
      onClick={ToggleDark}
      className="w-24 h-12 absolute right-16 top-10 bg-neutral-800 text-white rounded-3xl dark:bg-neutral-800 dark:text-white font-semibold"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkMode;
