import { useState } from "react"



function Counter(){
    const [score,setScore] =useState(0)
    const [isStyle, setStyle] = useState(false)

    
    
    return(
        <>
        
        <div>
            <h1>{score}</h1>

            <button  onClick={()=> setScore(score+1)}>Click me</button>
        </div>

        <label>
            <input type="checkbox" 
            checked ={isStyle}
            onChange={(e)=>setStyle(e.target.checked)}
            />
            use style
        </label>
        
        </>
    )
}

export default Counter