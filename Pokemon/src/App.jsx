import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomPokemon from './RandomPokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <RandomPokemon />
      </div>
    </>
  )
}

export default App
