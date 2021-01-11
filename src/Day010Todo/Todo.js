import React,{useState} from 'react'

export default function Todo() {

   const [todos,setTodos]=useState([]);
   const [item,setItem]  =useState("");
   const [uid,setUid]    =useState(0);

  function handleSubmit(event){
      event.preventDefault();
      setTodos([...todos,
    {
        id:uid,
        todo:item,
        isCompleted:false,
    }
    
    ]);
    console.log(todos)
    setUid(x=>x+1)
    setItem("");
  }
   function handleDelete(x){
       //setTodos(todos.filter(to=>to.id!==x.id));
   }
   function handleComplete(){}

    return (
        <div>
           <h1>Todos</h1> 
           <form onSubmit={handleSubmit}>
               <input 
                placeholder="enter Todo"
                value={item}
                onChange={e=>setItem(e.target.value)}
                />
           </form>
           <hr/>
           <ul>
               {
                  todos.map(todo=>(
                      <div>
                      <li key={todo.id}><h3>{todo.todo}</h3></li>
                      <button onClick={handleComplete}>Complete</button>
                      <button onClick={handleDelete(todo)}>Delete</button>
                      <hr/>
                      </div>
                     
                  )) 
               }
           </ul>
        </div>
    )
}
