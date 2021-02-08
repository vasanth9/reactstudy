import React from 'react'
import './List.css'
function List({people}) {
    return (
        <div>
            {
                people.map((people)=>{
                    const {id,name,age,image}=people;
                    return(
                        <article key={id} className='person'>
                            <img src={image} alt={name}/>
                            <div>
                                <h4>{name}</h4>
                                <p>{age}</p>
                            </div>
                        </article>
                    );
                })
            }
        </div>
    )
}
export default List;