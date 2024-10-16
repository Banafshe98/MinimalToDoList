import React, { useRef, useState } from "react";
import Add from "../assets/Add.svg";

export const Addtask = () => {
  const inputRef = useRef(null);

  const Addtask = () => {
    const inputText = inputRef.current.value;

    if(inputText==="") {
      return null;
    }

    const newTask = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodo((prev) => [...prev, newTask]);
    inputRef.current.value = "";
  };
  const [todo, setTodo] = useState([]);

  return (
    <div className="flex flex-nowrap items-center bg-gray-50 rounded-full">
      <input
        ref={inputRef}
        className="text-md bg-transparent h-14 pl-6 pr-2 border-0 outline-none flex-1  placeholder:text-slate-600  focus:outline-double"
        type="text"
        placeholder="Add your task"
      />
      <button
        onClick={() => {
          Addtask;
        }}
        className="flex items-center justify-center border-none rounded-full bg-lime-500 w-28 h-14 text-white text-lg font-medium cursor-pointer"
      >
        <img src={Add}></img>
      </button>
    </div>
  );
};
