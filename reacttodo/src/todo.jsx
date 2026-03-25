import { useState } from "react"
import './App.css'
function Todo() {

    const [newTodo, setNewTodo] = useState('')
    const[todo, setTodo] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(newTodo){
            setTodo([...todo, {text:newTodo, completed:false}])
            setNewTodo('')
        }
    }
    
    const handleDelete =(index) =>{
        const newTodos =[...todo]
        newTodos[index].completed = !newTodos[index].completed
        setTodo(newTodos)
    }

  return (
    <div>
        <h1>Todo App</h1>
        <form  onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add new todo" 
            value={newTodo}
            onChange={(e)=> setNewTodo(e.target.value)}/>
            <button id="search" type="submit">Add Todo</button>
        </form>
        <ul>
            {todo.map((todo,index)=>(
                <li key={index}>
                    <span style={{textDecoration : todo.completed ? "line-through": "none"}}>{todo.text}</span>
                    <button id="delete" onClick={()=>handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo