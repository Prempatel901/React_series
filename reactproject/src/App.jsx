import { useState } from 'react'
import Card from './card.jsx'
import Counter from './counter.jsx'

function App() {

//create state
// manage state
// change state
// sabhi child me state ko sync karwadunga

const [name, setName] = useState('')
  return (
    <>
      <Card title="Card1" name ={name} setName={setName} style= {{"color": "red"}}/>
      <Card title="Card2" name ={name} setName={setName}  style ={{"border-radius":"10px"}}/>
      <p >I am inside Perent Component and value of name is : {name}</p>

      {/* <Counter /> */}


    </>
  )
}

export default App
