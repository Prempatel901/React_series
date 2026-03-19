import styles from './style.module.css'

// function Hero(){
//  const name = " i am prem "
// function handleClick(){
//     alert("button clicked")

// }

// const handleInput= (e) =>{
//     console.clear()
//     console.log("Value: ", e.target.value)
// }

// const handleMouseOver =() =>console.log("Mouse is over the text")
// const handleDoubleClick =() => console.log("Text Double Clicked")

    
//     return (
//         <div>
//             <p className='bg-yellow-800 font-bold' onMouseOver={handleMouseOver}
//              onDoubleClick={handleDoubleClick} >Lorem ipsum dolor sit amet.</p>
//             <button className={styles.button} onClick={handleClick}>Click me</button>
//             <button className={styles.button} onClick={()=> alert("hello from inline function") }>Say Hello</button>
//             <br />
//             <input type="text" onChange={handleInput} placeholder='Type Something' />
//         </div>
//     )
// }

//------------------------------------------------------------------------------------------------------


// function Hero() {

//     const fruits = ["Apple","Mango","Banana", "Orange","Papaya"]

//     return(
//         <>
//         <h1>Fruits Names</h1>
//         <ul>
//             {fruits.map((fruit,index)=>(
//                 <li>{index} - {fruit}</li>
//             ))}
//         </ul>
//         </>
//     )
// }

//export default Hero




function Card(props){
    return(
        <div>
            <h1>{props.children}</h1>
        </div>
    )
}


export default Card