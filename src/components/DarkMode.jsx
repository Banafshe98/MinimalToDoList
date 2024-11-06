import React, { useContext } from "react";
import { DarkModeContext } from "../usecontext/DarkModeContext";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const ToggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={ToggleDark}
      className="w-24 h-12 absolute right-16 top-10 bg-toggle text-white rounded-3xl dark:bg-neutral-800 dark:border-4 font-semibold"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkMode;
