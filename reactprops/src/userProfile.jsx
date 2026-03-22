
import React, { useState } from 'react'

function userProfile() {
    const [name, setName] =useState("Guest")
    const [age, setAge] = useState(18)


  return (
    <div>
        <h1> Name: {name}</h1>
        <h1> Age: {age}</h1>
        <button onClick={()=> setName("prem patel")}> Change Name </button>
        <button onClick={()=> setAge(age +1)}> Change Age</button>
    </div>
  )
}

export default userProfile