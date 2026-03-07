import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App</h1>
//     </div>
//   )
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

const anotheruser = " rohit"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},'Click me to visit google',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App /> 
  // </StrictMode>
  reactElement
)
