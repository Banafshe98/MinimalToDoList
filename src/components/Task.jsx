import React, { useState } from "react";
import Check from "../assets/Check.svg";
import DeleteBtn from "./DeleteBtn";
import {CSS} from '@dnd-kit/utilities';
import { useSortable } from "@dnd-kit/sortable";

const Task = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  const doneToggle = () => {
    setIsComplete((prev) => {
      return !prev;
    });
  }; 

    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({id: props.id});


    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style} className="flex items-center my-3 py-1 px-3 rounded-md bg-neutral-200">
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
