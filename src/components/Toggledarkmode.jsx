import React from 'react'

const Toggledarkmode = (props) => {
  const [darkMode, setDarkMode] = useState(false);

    const ToggleDrak = () => {
        setDarkMode(!darkMode)
    }

  return (
    <div onClick={setDarkMode} className='rounded-full py-2 px-5 font-light hover:scale-105 transition-all duration-200'>{darkMode ? "light" : "dark"  }</div>
  )
}

export default Toggledarkmode