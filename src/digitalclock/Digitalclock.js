import React ,{useState,useEffect}from 'react';
import './DigiApp.css'

export default function Digitalclock() {
    
    const [hours,setHours]=useState("00");
    const [minutes,setMinutes]=useState("00");
    const [seconds,setSeconds]=useState("00");
    const [date,setDate]=useState("date");
    
    useEffect(
()=>{
    const intervalId= setInterval(()=>{
    let d=new Date();
    var h=d.getHours();
    var m=d.getMinutes().toString();
    var s=d.getSeconds().toString();
    h=(h%12)||12;
    h=h.toString();
    var z=d.getDate().toString().padStart(2,'0')+" / "
    +(d.getMonth()+1).toString().padStart(2,'0')+" / "+d.getFullYear();
    setDate(z);
    setHours(h.padStart(2,'0'));
    setMinutes(m.padStart(2,'0'));
    setSeconds(s.padStart(2,'0'));
    

    return () => clearInterval(intervalId); 
    },1000);
},[seconds,minutes,hours,date]);
   
    return (
        <div id="bg" >
            <h1 id="header">Digital Clock</h1>
            <hr/>
            <h1 id="header" className="date">{date}</h1>
           <h1 id="header" className="glow">{hours}
           :{minutes}
           :{seconds}</h1>
           
        </div>
    )
}
