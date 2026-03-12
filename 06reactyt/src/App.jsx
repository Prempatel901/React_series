import react from 'react'

function App() {
  const user="vasu"
  const changeUser=()=>{
    user="Aryan"
  }
  return (
    <div>
      <h1>Username is {user} </h1>
      <button onClick={changeUser}>Change User</button>
    </div>
  )
}

export default App
