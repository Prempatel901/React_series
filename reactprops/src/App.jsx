import { useState } from 'react'
import Hello from './hello.jsx'
import Counter from './counter.jsx'
import Like from './likebutton.jsx'
import User from './userProfile.jsx'
import Student from './student.jsx'
import InputExample from './inputExample.jsx'
function App() {
  //const [count, setCount] = useState(0)

  const habbits =["Reading","Coding","Travling"]

  return (
    <>
      {/* <Hello name="Vasu" age={21} city="bihar" habbits ={habbits}/> */}
      {/* <Counter /> */}
      {/* <Like /> */}
      {/* <User /> */}
      {/* <Student /> */}
      < InputExample />
    </>
  )
}

export default App
