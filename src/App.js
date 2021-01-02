import React, { useState ,useEffect} from 'react';
import './App.css';

export default function App() {

   const [count,setCount]=useState(0);
   const [seconds,setSeconds]=useState('00.00');
   const [minutes,setMinutes]=useState('00');
   const [start,setStart]=useState(false);
   const [split,setSplit]=useState([])
   

   useEffect(() => {
       let intervalId;
       if(start){
      intervalId=setInterval(()=>{
           setCount(count=>count+1);
           var sec=(count/100)
           var min=Math.floor(sec/60)
           sec=sec%60;

           setSeconds(sec.toFixed(2).toString().padStart(5,'0'));
           setMinutes(min.toString().padStart(2,'0'));
      },10);
    }
       return () => {
           clearInterval(intervalId);
       }
   }, [count,seconds,minutes,start])
    

    function handleSplit(){
        
        const add=minutes+":"+seconds;
        if(split[split.length-1]!==add)
        setSplit(split=>[...split,add]);
        
    }
    function handleReset(){
       
        setCount(0);
        setSplit([]);
        setSeconds('00.00');
        setMinutes('00');
        setStart(false)
        
    }


    return(
        <div>
            <h1>Stop Watch</h1>
            <hr/>
            <p className="stopwatch">{minutes}:{seconds}</p>
            <center>
                <button className="Reset" onClick={handleReset}>Reset</button>

                <button  className="Split"onClick={handleSplit}>Split</button>
                
                <button className="Start"onClick={()=>setStart(!start)}>{start?'Pause':'Start'}</button>
                </center>
                <div >
            {split.map(s=><p className="arr">{s}</p>)}</div>
        </div>
    );
}
