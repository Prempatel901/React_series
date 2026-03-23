import React, { useState } from 'react'

function BasicValidation() {

    const [name, setName] =useState('')
    const [email,setEmail] =useState("")
    const [error, setError] =useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log()
        
        if(!name || !email){
            setError("Please fill all fields!")
        }else{
            setError("")
            console.log("Form Submitted : ", {name , email})
            alert("Form Submitted Successfully! ")
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Basic Validation form</h1>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
            <br />
            <input type="text" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br />

                {error && <p style={{color: "red"}}>{error}</p>}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default BasicValidation