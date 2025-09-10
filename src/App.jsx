import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { motion } from 'framer-motion'

function WelcomeText() {
  const content = "Turn the Night up."

  return (
    <h1 className='welcome'>
      {
        content.split(' ').map((text, i) => {
          return (
            <motion.span key={i}
              initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}

            >
              {text}{" "}
            </motion.span>
          )
        })
      }
    </h1>
  )
}

function App() {
  return (
    <div className="container">
      <WelcomeText />
    </div>
  )
}

export default App
