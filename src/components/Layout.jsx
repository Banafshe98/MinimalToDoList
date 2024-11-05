import React, { createContext, useState } from "react";
import DarkMode from "./DarkMode";

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="items-center justify-center p-32 bg-slate-300 flex flex-col gap-2 px-5 py-1 h-screen w-screen ">
        <DarkMode />
        {children}
      </div>
    </div>
  );
};

