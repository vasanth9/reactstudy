import React,{useState} from 'react'
import './question.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
export default function Question({title,info}) {
    const [showInfo,setShowInfo]=useState(false)
    return (
       <article className='question'>
           <header>
               <h4>{title}</h4>
               <button className="btn" onClick={()=>{setShowInfo(!showInfo)}}>
                   {
                       showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>
                   }
               </button>
           </header>
           {
               showInfo&&<p>{info}</p>
           }
       </article>
    )
}
