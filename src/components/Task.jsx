import React, { useState } from 'react'
import Check from "../assets/Check.svg"
import Delete from "../assets/Delete.svg"



const Task = (props) => {
  const [isComplete, setIsComplete] = useState(false)
  const doneToggle = () => {
    setIsComplete((prev) => {
      return !prev;
    });
  };
  
  return (
    <div className="flex items-center my-3">
        <div className="flex flex-1 gap-2 items-center cursor-pointer">
          <img onClick={doneToggle} className={`w-6 h-6 rounded-full ${isComplete ? "bg-lime-400" : "hover:bg-lime-200"}`} src={Check}></img>
          <li  className={`text-slate-800 text-lg ${isComplete ? "line-through" : "" }`} > {props.task} </li>
        </div>
        <img className='cursor-pointer rounded-full hover:bg-red-400' src={Delete}></img>
    </div> 
  )
}

export default Task