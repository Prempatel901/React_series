import { useState } from 'react'
import Card from './card'
import dp from './assets/dp.jpg'
import dp1 from './assets/dp1.jpg'
import dp2 from './assets/dp2.jpg'
import './App.css'


function App() {

  return (
  
      <div className='container'>

    <Card name="Prem Patel" desc ="i am a developer" image = {dp} style ={{"border-radius":"10px"}} />
      <Card name="Vasu Dev" desc ="i am a God" image = {dp1} style ={{"border-radius":"10px"}}/>
      <Card name="Son Goku" desc ="i am a Saiyan" image = {dp2} style ={{"border-radius":"10px"}}/>
      </div>
  
  )
}

export default App
