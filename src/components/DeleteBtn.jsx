import React from 'react'
import Delete from "../assets/Delete.svg";


const DeleteBtn = ( {deleteItem , id} ) => {
  return (
    <img
        onClick={() =>{
          deleteItem(id)
        }
        }
        className="cursor-pointer rounded-full hover:bg-delete"
        src={Delete}
      ></img>
  )
}

export default DeleteBtn