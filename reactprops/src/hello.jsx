
import "./App.css"



  function Hello(props){
    return(
        <>
        <h1>Hello,{props.name}</h1>
        <h3>Age: {props.age}</h3>
        <h3>City: {props.city}</h3>

        <ul>
            {props.habbits.map((hobby, index)=>(
                <li key={index}>{hobby}</li>
            ))}
        </ul>
        </>
    )
}


export default Hello