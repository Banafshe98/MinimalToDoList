import React, { useContext } from "react";
import Add from "../assets/Add.svg";
import { DarkModeContext } from "../usecontext/DarkModeContext";


export const Addtask = ({ inputText, handleChange, addItem }) => {
  const [darkMode , setDarkMode] = useContext(DarkModeContext);

  return (
    <form className="flex flex-nowrap items-center bg-input dark:bg-neutral-200 rounded-full">
       <input
        className="text-md font-bold bg-transparent h-14 pl-6 pr-2 border-0 outline-none flex-1 hover:scale-x-105 placeholder:text-slate-400 focus:outline-none focus:ring-0 focus:border-0"
        type="text"
        placeholder="Add your task"
        value={inputText}
        onChange={handleChange}
      />
      <button
        onClick={addItem}
        className="flex items-center justify-center border-none rounded-full w-28 h-14 bg-add hover:scale-105 dark:bg-custom-green text-white text-lg font-medium cursor-pointer"
      >
        <img src={Add} alt="Add" />
      </button>
    </form>
  );
};
