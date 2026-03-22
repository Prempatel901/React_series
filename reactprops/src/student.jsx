

import React, { useState } from 'react'

function Student() {
    const [student, setStudent] =useState({
        name: "superman",
        grade: "A",
        city: "Delhi"
    })

    const changCity =() =>{
        setStudent({...student,city: "Mumbai"})
    }


  return (
    <div>
        <h1> Name: {student.name}</h1>
        <p>Grade: {student.grade}</p>
        <p>City: {student.city}</p>
        <button onClick={changCity}> Change City</button>
    </div>
  )
}

export default Student