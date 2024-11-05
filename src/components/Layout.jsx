import React, { useContext } from "react";
import DarkMode from "./DarkMode";
import { DarkModeContext } from "../usecontext/DarkModeContext"; // Make sure this is imported correctly

export const Layout = ({ children }) => {
  const [darkMode] = useContext(DarkModeContext); // Use context to get darkMode
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="items-center justify-center p-32 bg-slate-300 flex flex-col dark:bg-black gap-2 px-5 py-1 h-screen w-screen ">
        <DarkMode />
        {children}
      </div>
    </div>
  );
};
