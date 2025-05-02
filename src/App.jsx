import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Display from './components/Display'
import Inputs from './components/Inputs'
import Dropdown from './components/Dropdown'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Display/>
      <Inputs/>
      <Dropdown/>
      <Button/>
    </div>
  )
}

export default App
