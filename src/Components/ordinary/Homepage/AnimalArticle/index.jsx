import React from 'react'

export default function AnimalArticle({ elem }) {
    return (
        <article className='animalArticle'>
            <div className='animalArticle-circle'>
                <img alt='' src={elem.img} />
            </div>
            <div className='animalArticle-info'>            
                <h3 className='animalArticle-title'>{elem.title}</h3>
                <p className='animalArticle-text'>{elem.text}</p>
            </div>
        </article>
    )
}
