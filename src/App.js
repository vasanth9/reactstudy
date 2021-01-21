import React,{useState}from 'react'
import axios from "axios";


export default function App() {
    const [query,setQuery]=useState("");
    const [bookList,setBookList]=useState([]);
    const handleChange=e=>{
        setQuery(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        let q=`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCND1fH_rCJvziOLdt5WG3GkHl6lDEXRf0`
        axios.get(q).then(res=>{
            
            if(res.status===200)
            {
              
                console.log(res.data.items)
                setBookList(res.data.items)

            }
        })
    }
    return (
        <div>
           BookDeal
           <form onSubmit={handleSubmit}>
           <input type="text" onChange={handleChange} value={query} placeholder="Author, title Search" />
           <button type="submit">Search</button>
           </form>
           <p>{query}</p>
           <ul>{
                bookList.map(item=>{return(<><li><img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title}/>{item.volumeInfo.title}</li></>)})
               }
             
               </ul>
        </div>
    )
}
