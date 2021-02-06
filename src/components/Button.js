import React from 'react'
import './Button.css'
export default function Button({imp,text,link}) {
    return (
        <div className={`button ${imp==='secondary'?'button___white':''}`}>
            <a href={link}>
                {text}
            </a>
            
        </div>
    )
}
