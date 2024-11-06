import React, { useState } from "react";
import Check from "../assets/Check.svg";
import DeleteBtn from "./DeleteBtn";

const Task = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  const doneToggle = () => {
    setIsComplete((prev) => {
      return !prev;
    });
  };

  return (
    <div className="flex items-center my-3">
      <div className="flex flex-1 gap-2 items-center cursor-pointer">
        <img
          onClick={doneToggle}
          className={`w-6 h-6 rounded-full ${
            isComplete ? "bg-done" : "hover:bg-hover"
          }`}
          src={Check}
        />
        <li
          className={`text-slate-800 text-lg ${
            isComplete ? "line-through" : ""
          }`}
        >
          {props.text}
        </li>
      </div>
      <DeleteBtn deleteItem={props.deleteItem} id={props.id} />
    </div>
  );
};

export default Task;
