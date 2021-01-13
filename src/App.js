import React ,{useState} from 'react';
import './App.css'

export default function App() {
    
    const [arr,setArr]=useState([]);

    // useEffect(()=>{

    // },[arr])
    
    function genArr(){
        console.log(100);
        var maximum=99;
        var minimum=10;
        var l=[];
        for(let i=0;i<20;i++){
        var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        l.push(randomnumber);
    
         }
        setArr([...l]);
        console.log(arr);
    }
    function Sort()
    {let l=arr.length;
        if(l===0)
        genArr();
        else{
            arr.map((val,id)=>console.log(val,id))
            let temp=[...arr]; 
            for(let i=0;i<l-1;i++)
            {
                for(let j=0;j<l-i-1;j++)
                {
                    if(temp[j]>temp[j+1])
                    {
                        let t=temp[j+1];
                        temp[j+1]=temp[j];
                        temp[j]=t;
                    }
                    setArr([...temp])
                    
                }
            }
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
                    style={{height:`${(80/100)*ele}vh`,
                        width:`${(32/10)}vw`}}></div>
                ))}
                </center>
            </div>
        </div>
    )
}
