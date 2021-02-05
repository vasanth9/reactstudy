import React,{useState} from 'react';
import './App.css';

export default function App() {

//states
const [todos,setTodos]=useState([]);


const toggleComplete=index=>{
  var newTodos=[...todos]
  newTodos[index].isComplete=!(newTodos[index].isComplete)
  setTodos(newTodos);
}

const addTodo=(text)=>{
  
 const newTodos=[...todos,{todo:text,isComplete:false}];
 setTodos(newTodos);
 
}

const handleClear=e=>{
e.preventDefault();
setTodos(todos.filter(todo=>todo.isComplete!==true))
}
  return (
    <div>
      <h1 className="head">To-Do`s</h1>
      <h4 className="head">Pending Tasks({todos.filter(x=>x.isComplete!==true).length})</h4>
    <hr/>
  <TodoForm addTodo={addTodo}/>
    <hr/>
    <div className="todolist">
      {todos.map((todo,index)=>(
        <Todo 
        key={index}
        index={index}
        todo={todo}
        toggleComplete={toggleComplete}
        /> 
      ))}
    </div>
    <center><button onClick={handleClear}>Clear Completed</button></center>
    </div>
  );
}

//Todo display

function Todo({todo,index,toggleComplete}){
 
  return(
    <div className="todo"
    onClick={()=>toggleComplete(index)}
    style={{textDecoration:todo.isComplete?'line-through':''}}
    >{todo.todo}</div>
  );


}

// Add Todo

function TodoForm({addTodo}){
const [text,setText]=useState("");

const handleSubmit=e=>{
  e.preventDefault();
  addTodo(text);
  console.log(text);
  setText("");
}
return(
  <div>
    <center>
    <form onSubmit={handleSubmit}>
      
    <input
    className="TodoInput"
    value={text}
    onChange={(e)=>setText(e.target.value)}
    placeholder="enter the Todo"
    />
   </form>
   </center>
  </div>
);
}