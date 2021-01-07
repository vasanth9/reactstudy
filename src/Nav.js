import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
    return (
       <nav>
           <ul>
               <Link to='/'>
               <h1>HomePage</h1>
               </Link>
           </ul>
       </nav>
    )
}
