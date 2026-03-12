import { useState } from "react";

function MyCourse(){
    // const [course,setCourse]=useState('Python')
    // const [Duration,setDuration]=useState(' 3 months')

    const [Learn,setLearn]=useState({
        course:'Python',
        duration:' 3 months'
    })

    const updateDuration =()=>{
        setLearn((prev)=>{
            let d=document.getElementById('duration')
                return {...prev, duration:d.value}
            })
        }

    return (
        <>
            <h1>My Course name is {Learn.course}</h1>
            <h2>Duration is {Learn.duration}</h2>
            <input type="text" id="duration" placeholder={Learn.duration}/><br />
            <button onClick={updateDuration}>Change Duration</button>
        </>
    )
}

export default MyCourse;