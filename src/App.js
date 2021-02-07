import React,{useState} from 'react'
import Data from './data/Data.js'
import List from './components/List'
import './App.css'
function App() {
  
  const [data,setData]=useState(Data);

  return (
    <div className="Container">
      <p className="P">{data.length} Birthdays</p>
      {
        data.length===0?(<></>):(<>
          <List people={data} />
          <div className="button__center">
          <button onClick={()=>setData([])}>Clear All</button></div>
          </>)
      }
      
    </div>
  )
}

export default App
