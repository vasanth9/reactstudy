import React ,{useState,useEffect}from 'react';
import './App.css'

export default function Timer() {
    const [count,setCount]=useState(0);
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(25);
    const [hours,setHours]=useState(0);
    const [disable,setDisable]=useState(false);
    const [percentage,setPercentage]=useState(10);
    
    useEffect(
        ()=>{
             let intervalId;
             if(count===0)
             {
                 setDisable(false);
                 setMinutes(25);
                 setHours(0)
                 setSeconds(0)
                 
                 setCount(-1);

             }
             if(count>0 && disable){
             intervalId=setInterval(()=>{
                const x=count-1;
                const sec=x%60;
                const min=Math.floor(x/60)%60;
                const hour=Math.floor(x/3600)
                setCount(x);
                setMinutes(min);
                setHours(hour);
                setSeconds(sec);
                console.log((count/percentage)*100);
             },1000);
            }
            return ()=>clearInterval(intervalId)

        },[count,minutes,hours,seconds,disable,percentage]
    );
   function handleHours(event){
       setHours(event.target.value);
   }
   function handleMinutes(event){
    setMinutes((event.target.value)%60);
}
function handleSeconds(event){
    setSeconds((event.target.value)%60);
}
function handleClick(){
    setDisable(!disable);
    if(!disable)
      {const x=seconds+(minutes*60)+(hours*60*60);
      setPercentage(x);
        setCount(x);}
    
}

function handleReset(){
    setCount(0);
}



    return(
        <div className="main">
            <h1>Timer</h1>
            <hr/>
            <div className={disable?'Show':'Hide'} id="inp">
                <center>
           <span> <input type="number" value={hours} onChange={handleHours} min="0"/>H</span>
           <span> <input type="number" value={minutes} onChange={handleMinutes}  min="0" max="59"/>M</span>
           <span> <input type="number" value={seconds} onChange={handleSeconds}  min="0" max="59"/>S</span>
           </center>
            </div>
            <center><button type="submit" onClick={handleClick}>{disable?'Stop':'Start'}</button>
            <button type="submit" onClick={handleReset}>Reset</button></center>
            <p>{hours.toString().padStart(2,'0')}
            :{minutes.toString().padStart(2,'0')}
            :{seconds.toString().padStart(2,'0')}
            
            </p>
           
            <div className="ProgressBar">
            
                <div className="fill" style={{width:`${(count/percentage)*100}%`}}></div>
            </div>
            
        </div>
    );
}
