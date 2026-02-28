import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/funcs.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id="start">X-Cruncher</h1>
      <h2 className="subtitle" id="start">A New Irrational Constant Calculator</h2>
      <div className="base_btns">
        <button onclick="autoload('https://github.com/x-cruncher/installer/releases/latest')" id="projinfo">See Our Project Info</button>
        <button id="downinst">Download Installer</button>
      </div>
    </>
  )
}

export default App
