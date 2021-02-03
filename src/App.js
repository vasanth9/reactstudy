import React ,{useState}from 'react'
import './App.css'
export default function App() {
  
   const [state,setState]=useState({
       red:"00",
       blue:"00",
       green:"00",
      
   })
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
       var hex= state.red+state.green+state.blue;
       var dec=hextodec(hex);
         //startAnimation();
     }  
   }
    return (
        <div style={{backgroundColor:`#${state.red+state.green+state.blue}`,height:"100vh",width:"100vw"}}>
            <center><h1 style={{backgroundColor:'white'}}>COLOR CYCLE</h1></center>
           <form onSubmit={handleSubmit}>
           <center> 
            <input placeholder="Red"  value={state.red} name="red" onChange={handleInput} />
            <input placeholder="Green" value={state.green} name="green" onChange={handleInput}/>
            <input placeholder="Blue" value={state.blue} name="blue" onChange={handleInput}/>
            </center>
            <center> 
            <button type="submit" name="Submit" value="Submit">Submit</button>
            </center> 
            </form>
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
{let sum=0;
    for(let i=0;i<6;i++)
    {var z=x[5-i];
        let p=Math.pow(16,i);
        if(z==='number')
        { 
           sum=sum+(p*(z-'0')) 
        }
        else{
           
        }
    }
}