import React,{useState} from 'react'
import './App.css'
import axios from 'axios';
export default function App() {

   const [query,setQuery]=useState("");
   const [loading,setLoading]=useState(false);
   const [book,setBook]=useState([]);




    const handleInput=e=>{
        setQuery(e.target.value)
    }
    const handleSubmit=e=>{
        e.preventDefault();
        setLoading(true)
        let q=`https://www.googleapis.com/books/v1/volumes?q=${query}`;
        axios.get(q).then(res=>{
            
            if(res.status===200)
            {
                setBook(res.data.items);
                console.log(book)
            }
            else{
                console.log(res);
            }
        });
        setLoading(false)


    }
    return (
        <div>
           <h1> Google Books</h1>
           <div className="form">
               <form onSubmit={handleSubmit}>
                   <input type="text" 
                   className="input"
                   onChange={handleInput}
                   placeholder="Search by Author or Title"
                   value={query}
                   ></input>
                   <button type="submit" 
                   className="submitButton"
                   
                   >Search</button>
               </form>
               
           </div>
           
           {loading?<p>Loading.....</p>:""}
           <div className="book-list">{
                     book.map(
                         item=>{return(
                             <div className="card" key={item.id}>
                                 <h1>{item.volumeInfo.title}</h1>
                                 <img className="part2"
                                 src={item.volumeInfo.imageLinks===undefined?"":
                                 item.volumeInfo.imageLinks.smallThumbnail}
                                 alt={item.volumeInfo.title}
                                 />
                                <div className="overview"> 
                                 <h5 >{item.volumeInfo.description}</h5>
                                 
                                  <a href={item.volumeInfo.previewLink}
                                target="_blank"
                                ><button className="but pre">Preview</button></a>
                                <a href={item.saleInfo.buyLink}
                                target="_blank"
                                ><button className="but buy">Buy</button></a>
                               </div>
                                 </div>)
                         }
                     )}
           </div>
        </div>
    );
}
