import { useState } from 'react'
import Bye from './bye'
import hero from './assets/hero.png'
import './App.css'
import Hello from './Hello'

function App() {


  return (
      <>
      <div className='text-red-700 font-bold text-6 text-3xl'>hello prem patel</div>
      <Hello />
      <img src={hero} />
      <Bye />

      </>
  )
}

export default App
