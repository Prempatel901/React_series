import { useState,useEffect} from "react";

function ContactForm(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState(''); 

    const handleSubmit=(e)=>{
        e.preventDefault();
        //write form validation login

        document.getElementByTagName('form')[0].submit();
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlfor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="field">
                <label htmlfor="email">Email</label>
                <input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="field">
                <input type="submit" value={submit}/>
            </div>
        </form>
    )
}

function Demo(){

}



//-------------Example 4---------------

function Student(props){
    return <li>{props.name}</li>
}

function Demo4(){
    const student=['Arun','Rohan','Nitin','Dipti','Prakash']
    return(
        <>
        <h1>Students List</h1>
        <ul>
            {student.map((n)=><Student name={n} />)}
        </ul>
        </>
    )
}



//----------------Example 3


function LoginSuccess(){
    return(
        <h1>Thank you for coming back</h1>
    );

}

function LoginFail(){

    return(
        <h1>Login Failed</h1>
    );
}

function Login(props){
    const [username,setUsername]=useState("mysirg")
    const [password,setPasswod]=useState("1234");
    return username==props.username && password==props.password?<LoginSuccess />:<LoginFail />
}


function Demo3(){

    return (
        <Login username="mysirg" password="1234d"  />
    )
}




//------------------Example 2

function F1(props){
    return(
        <h1 style={{color:props.color}}>{props.text}</h1>
    );
}


function Demo2(){
    const [textColor,setTextColor]=useState('green');
    const [text,setText]=useState("i like red color")
    useEffect(()=>{
        let msg=`I like ${textColor} color`;
        setText(msg)
    });
    return(
        <div>
            <F1  text={text} color={textColor} />
            <button onClick={()=>setTextColor("red")}>Red</button>
            <button onClick={()=>setTextColor("purple")}>Purple</button>
            <button onClick={()=>setTextColor("blue")}>Blue</button><br />

            <input type="text" id="colorName" value={textColor}  onChange={(e)=>setTextColor(e.target.value)}/>
            

        </div>
    )
}


//-------------------Example 1

function Demo1(){
    const[i,setI]=useState(0);
    const[day,setDay]=useState("Sun");
    const days=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saterday'];

    useEffect(()=>{
        console.log("hello");
    },[i]);
     return (
        <>
            <h1>Demo</h1>
            <h2>{i}-{day}</h2>
            <button onClick={()=>setDay(days[i%7])}>Change Days</button>
            <button onClick={()=>setI(i+1)}>Change i</button>
        </>
     )
}

export default F1;
