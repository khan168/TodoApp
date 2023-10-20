import React, { useState } from "react";
import "./App.css";

function App() {
  // add usestates to save input and todos
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  // When the component mounts, fetch todos from local storage

  // addTodo Function
  const addTodo = () =>{
    if(input){
      const newtodo = [...todos, input]
      setTodos(newtodo)
      setInput("")
    }
  }

  // Remove Todo Function

  const removeTodo = (index) =>{
    const newtodo = [...todos]
    newtodo.splice(index,1)
    setTodos(newtodo)
  }

  //create a UI with
  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="todoadd">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="add input here" ></input>
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
      {todos.map((todo,index) => (
        <li key={index}>
        
        {todo}
        <button onClick={() => removeTodo(index)}>Delete</button>
        
        </li> 
      ))}


      </ul>

    </div>
  );
}

export default App;
