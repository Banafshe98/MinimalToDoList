import React, { useState } from 'react'

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const ToggleDark = () => {
        setDarkMode(!darkMode)
    }
  return (
    <button onClick={ToggleDark} className='w-24 h-12 absolute right-16 top-10 bg-neutral-800 text-white rounded-3xl dark:bg-neutral-800  dark:text-white font-semibold'>{darkMode ?  "Light" : "Dark"}</button>
  )
}

export default DarkMode