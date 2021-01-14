import React ,{useState} from 'react';
import './App.css'

export default function App() {
    
    const [arr,setArr]=useState([]);
    const [arrswap,setArrswap]=useState([]);
    const [completed,setCompleted]=useState([]);
    

   
    
    function genArr(){
       // console.log(100);
        var maximum=99;
        var minimum=10;
        var l=[];
        for(let i=0;i<99;i++){
        var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        l.push(randomnumber);
    
         }
        setArr([...l]);
        setArrswap([])
        setCompleted([])
       
    }
    function Sort()
    {let l=arr.length;
        if(l===0)
        genArr();
        else{
            
            
            let temp=[...arr]; 
            for(let i=0;i<l-1;i++)
            {
                for(let j=0;j<l-i-1;j++)
                {setTimeout(()=>{
                    const b=[]
                    b.push(j)
                    b.push(j+1)
                    if(temp[j]>temp[j+1])
                    {
                        let t=temp[j+1];
                        temp[j+1]=temp[j];
                        temp[j]=t;
                    }
                    setArrswap([...b])
                    
                    setArr([...temp])
                },30)
                    
                    
                }
                setTimeout(()=>{
                     let com=[]
                     for(let k=l;k>=l-i-1;k--)
                     {
                         com.push(k);
                     }
                     setCompleted([...com])
                },30)
            }
            setTimeout(()=>{
                setCompleted([])
                setArrswap([])
           },30)
                
        }
    }
    return (
        <div>
            <center >
            <h1 className="header">Sorting Visualizer</h1>
            <button className="header" onClick={()=>genArr()}>GenerateArray()</button>
            <button className="header" onClick={()=>Sort()}>Sort()</button>
            </center>
            <hr/>

            <div className="arrayContainer">
                <center>
                {arr.map((ele,id)=>(
                    <div className="arrayElement"
                    key={id}
                    style={{height:`${(80/100)*ele}vh`,
                        width:`${(32/100)}vw`,
                        margin:`0 0.2vw`,
                    backgroundColor:arrswap.includes(id)?"green":
                    completed.includes(id)?"red":"white"
                    }}></div>
                ))}
                </center>
            </div>
        </div>
    )
}
