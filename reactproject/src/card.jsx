

function Card({setName, title,name}){
    return(
        <div>
           
            
           <input  type="text" onChange={(e)=> setName(e.target.value)} />
           <p >Name state variable ki value inside {title} :  {name}</p>
        </div>
    )
}

export default Card 