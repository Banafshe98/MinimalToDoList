import React from 'react'

const Todo = ({children}) => {
  return (
    <div className=' bg-orange-200 rounded-md p-10 flex flex-col gap-2'>{children}</div>
  )
}

export default Todo