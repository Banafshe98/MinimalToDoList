import React from "react";
import Calendar from "../assets/Calendar.svg";
import { Addtask } from "./Addtask";
import Task from "./Task";

const Todo = ({ children }) => {
  return (
    <div className="bg-yellow-50 rounded-md p-10 flex flex-col gap-1 mb-1">
      <div className="flex flex-row items-center justify-center gap-1">
        <img src={Calendar}></img>
        <p className="text-lg font-bold">To Do list</p>
      </div>
      <div className="flex flex-col gap-3">
        <Addtask />
      </div>
    </div>
  );
};

export default Todo;
