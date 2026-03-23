import { useRef } from "react"

function Uncontroller() {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("Name: ",nameRef.current.value)
        console.log("Email: ", emailRef.current.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Uncontrolled Form</h1>
            <input type="text" placeholder='Name' ref={nameRef}/>
            <br />
            <input type="text" placeholder='Email'  ref={emailRef}/>
            <br />
            <button type='submit'> Submit</button>
        </form>
    </div>
  )
}

export default Uncontroller