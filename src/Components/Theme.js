import React, { useState } from 'react'
import './Theme.css'

const Theme = () => {
    const [themechange, setThemechange] = useState(false);

    const ThemeSwitch = () => {
        setThemechange((themechange) => (!themechange))
    }

  return (
    <div className={`change-theme ${themechange ? 'dark' : 'white'}`}>
        <h1>Theme Change</h1>
        <button className='theme-button' onClick={ThemeSwitch}>Switch Theme</button>
    </div>
  )
}

export default Theme