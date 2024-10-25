import React from "react";
import AddBtn from "./AddBtn";

export const Addtask = ({ inputText, handleChange, addItem }) => {
  return (
    <div className="flex flex-nowrap items-center bg-gray-50 rounded-full">
      <input
        className="text-md font-bold bg-transparent h-14 pl-6 pr-2 border-0 outline-none flex-1 placeholder:text-slate-400 focus:outline-double"
        type="text"
        placeholder="Add your task"
        value={inputText}
        onChange={handleChange}
      />
      <AddBtn addItem={addItem} /> {/* Pass addItem to AddBtn */}
    </div>
  );
};
