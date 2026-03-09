import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

let myObj ={
  username: "prem",
  age: 21
}

let newArr = [1,2,3,4,5]

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m-4'>Tailwind Test</h1>
      <Card username="prem" btnText="click me" />
      <Card username= "vasu" btnText="visit me"/>
    </>
  )
}

export default App
