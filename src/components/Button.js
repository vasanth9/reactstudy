import React from 'react'

export default function Button({imp,text,link}) {
    return (
        <div className={`button ${imp==='secondary'?'button___white':''}`}>
            <a href={link}>
                {text}
            </a>
            
        </div>
    )
}
