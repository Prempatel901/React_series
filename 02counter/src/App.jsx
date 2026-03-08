import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(15)


  const addValue = ()=>{
    if(counter != 20){
    setCounter(counter+1)
    }
    //console.log("clicked", counter)
  }

  const removeValue = ()=>{

     if(counter != 0){
    setCounter(counter-1)
    }
    //console.log("clicked", counter)
  }

  return (
    <>
      <h1>i am the best</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
