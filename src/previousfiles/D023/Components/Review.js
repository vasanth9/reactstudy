import React,{useState} from 'react'
import people from '../data/Data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'
import './Review.css'
function Review() {

    const [index,setIndex]=useState(0);
    const {name,job,image,text}=people[index];

   const prevPerson = () =>{
       let i=index;
      i--;
      if(i<0)i=people.length-1;
      setIndex(i);
   }
   const nextPerson =()=>{
    let i=index;
    i++; 
    if(i>=people.length)i=0;
    setIndex(i);
   }

   const randPerson =()=>{
       let i=Math.floor(Math.random()*(people.length));
       if(i===index)
       {
           i=(i+1)%(people.length);
       }
       setIndex(i);

       
}

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon"><FaQuoteRight/></span>
            </div>
            <h4 className="author">{name}</h4>
            <p className='job'>{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
                <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
            </div>
            <button className="random-btn" onClick={randPerson}>surprise me</button>
        </article>
    )
}
export default Review;