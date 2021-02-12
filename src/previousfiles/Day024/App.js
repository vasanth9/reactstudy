import React,{useState} from 'react'
import data from './data/data'
import SingleQuestion from './Components/Question'
import './App.css'
export default function App() {
  const [questions,setQuestions]=useState(data);
  return (
   <main>
     <div className='container'>
       <h3>Questions and Answers about Login</h3>
       <section className='info'>
         {questions.map((question)=>{
           return (<SingleQuestion key={question.id} {...question}/>)
         })}
       </section>

     </div>

   </main>
  )
}
