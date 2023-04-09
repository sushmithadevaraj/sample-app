import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Starter from './Starter/usestate'
import Final from './Final/usestatearray'
import usetateobject from './Starter/usestateobject'
import UseStateGotcha from './Starter/UseStateGotcha'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>advanced react</h2>
      <Starter />
      <Final />
      <usetateobject />
      <UseStateGotcha />
          </div>
  )
}

export default App
