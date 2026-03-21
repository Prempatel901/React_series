import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

//   const handleClick =()=>{
//     alert(" i am clicked")
//   }

// const mouseDown =(e)=>{
//   e= alert("tum mouse ke uper chle gye")
// }


const handleInput = (e)=>{
  //console.log("input me value change hui hai")
  console.log("value till now : ", e.target.value)
  
}

function handleSubmit(e){
  e.preventDefault();
  // i am writing my custom behaviour down
  alert("form submit kar du kya??")
}

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button type='submit'>Submit</button>
        </form>
      {/* <p onMouseOver={mouseDown} style={{border:"1px solid black"}}>i am a programmmer</p>
        <button onClick={handleClick}> 
          Click me
        </button> */}
      </div>
    </>
  )
}

export default App
