import React ,{useState,useEffect}from 'react'
import './App.css'
export default function App() {
  
   const [state,setState]=useState({
       red:"00",
       blue:"00",
       green:"00",
       start:"Start"
      
   });
   useEffect(()=>{
    var intervalId;
    if(state.start==="Stop")
    {
       intervalId=setInterval(()=>{
         var hex= state.red+state.green+state.blue;
         var dec=hextodec(hex);
         const red=dec.substring(0,2);
         const green=dec.substring(2,4);
         const blue=dec.substring(4)
         setState({
             ...state,
            red:red,
            green:green,
            blue:blue
         });
       },25) 
    }
   
     return ()=>clearInterval(intervalId);
    
   },[state])
   const handleInput=e=>{
       const value=e.target.value;
       
       setState({
           ...state,
          [e.target.name]:value
       });
       
       console.log(value)
   }
   const handleSubmit=e=>{
       e.preventDefault();
       if(state.start==="Start")setState({
        ...state,
       start:"Stop"
    });
    else setState({
        ...state,
       start:"Start"
    });
       var msg="";
     if(isHex(state.red))
     {
         msg+="Red should be between 00 and FF\n";
     }
     if(isHex(state.blue))
     {
         msg+="Blue should be between 00 and FF\n";
     }
     if(isHex(state.green))
     {
         msg+="Green should be between 00 and FF\n";
     }
     if(msg.length!==0)
     {
         alert(msg)
     }
     else{
       
       
      
        
     }  
   }
    return (
        <div style={{backgroundColor:`#${state.red+state.green+state.blue}`,height:"100vh",width:"100vw"}}>
             <div style={{backgroundColor:state.start==="Stop"?'white':'grey'}}>
            <center><h1 style={{backgroundColor:'white'}}>COLOR CYCLE</h1></center>
           
           <form onSubmit={handleSubmit} >
           <center > 
            <input placeholder="Red"  value={state.red} name="red" onChange={handleInput} disabled={state.start==="Stop"?true:false}/>
            <input placeholder="Green" value={state.green} name="green" onChange={handleInput} disabled={state.start==="Stop"?true:false}/>
            <input placeholder="Blue" value={state.blue} name="blue" onChange={handleInput} disabled={state.start==="Stop"?true:false}/>
            </center>
            <center> 
            <button type="submit" name="Submit" value={state.start}>{state.start}</button>
            </center> 
            </form>
            </div>
        </div>
    )
} 
function isHex(x){
   if(x.length!==2)return 1;
   var re=/[0-9A-Fa-f]{2}/g;
   if(re.test(x))
   return 0;
   return 1;
}
function hextodec(x)
{
    
    var n=parseInt(x,16);
    n+=1;

    return n.toString(16).padStart(6,'0');
}