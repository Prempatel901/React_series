
import { useState } from 'react'
//import Bye from './bye'
//import hero from './assets/hero.png'
//import './App.css'
//import Card from './Hero.jsx'
import Button from './button.jsx'

function App() {

  const [count, setCount] = useState(0)

  const handleClick =() =>{
    setCount(count+1)
    console.log(count)
  }
  


  return (
      <>
      <Button   counter ={handleClick}
        text ="Click me">
        <h1>{count}</h1>
      </Button>
      {/* <div className='text-red-700 font-bold text-6 text-3xl'>hello prem patel</div>
      <Card name ="prem">
        <h1>I am the best</h1>
        <p>i am developer</p>
        <p>will complete course soon</p>
      </Card> */}
      </>
  )
}

export default App
