import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(10);

    const countUp=()=>{
       // count++;
        setCount(prev=>prev+1);
        console.log("Up",count)
    }
    const countDown =() =>{
        //count--;
        setCount(prev=>prev-1)
        console.log("Down",count)
    }
    return(
        <>
            <h1>Counter Example</h1>
            <h2>Count={count}</h2>
            <button onClick={countUp}>Up</button>
            <button onClick={countDown}>Down</button>
        </>
    );
}

export default Counter;