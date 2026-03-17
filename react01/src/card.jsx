import Img from './assets/dp.jpg'
import './card.css'

function Card(props){
    return(
        <>
        <div id='user-container' style={props.style}>
            <h2>{props.name}</h2>
            <img id='img' src={props.image} alt="love" />
            <p id='pera'>{props.desc}</p>
        </div>
        </>
    )
}

export default Card