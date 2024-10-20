import React from 'react'
import Check from "../assets/Check.svg"
import Delete from "../assets/Delete.svg"



const Task = (props) => {
  return (
    <div className="flex items-center my-3">
        <div className="flex flex-1 gap-1 items-center cursor-pointer">
          <img src={Check}></img>
          <li>{props.task}</li>
        </div>
        <img className='cursor-pointer' src={Delete}></img>
    </div> 
  )
}

export default Task