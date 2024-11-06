import React, { useContext } from "react";
import DarkMode from "./DarkMode";
import { DarkModeContext } from "../usecontext/DarkModeContext";

export const Layout = ({ children }) => {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="items-center justify-center p-32 bg-layout flex flex-col dark:bg-custom-brown gap-2 px-5 py-1 h-screen w-screen ">
        <DarkMode />
        {children}
      </div>
    </div>
  );
};
