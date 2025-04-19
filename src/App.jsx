import React from 'react'
import { useState } from 'react'
import {Footer} from "./components/footer"
import {Header} from "./components/header"
import {Routes} from "./components/routes"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  function switchMode() {
    setDarkMode((mode) => !mode);
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-grey-200 dark:bg-grey-700 min-h-screen'>
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
