


function Button(props){
    return(
        <div>
            {props.children}
            <button onClick={props.counter}>{props.text}</button>
            
        </div>
    )
}

export default Button