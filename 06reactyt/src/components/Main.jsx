import { useState } from "react";

const Main=()=>{
    
    const [user,setUser]=useState("rahul")
    const names=['sonu','monu beta','rohit beta','sahil beta','shailender beta']
    
    const changeUser=()=>{
        const randomIndex= Math.floor(Math.random()*names.length);
        setUser(names[randomIndex])
    }


    return(
        <>
            <h1>hello {user}</h1>
            <button onClick={changeUser}>Change User</button>
        </>
    )
}

export default Main;