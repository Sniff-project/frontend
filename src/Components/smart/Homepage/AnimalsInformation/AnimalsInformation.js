import React from 'react';
import { infoArray } from './infoData';
import AnimalArticle from './AnimalArticle';

export default function AnimalsInformation() {

    const informations = infoArray;

    return (
        <div className='animalArticle-container'>
            {informations.map((elem, index) => {
                return <AnimalArticle key={index} elem={elem}/>
            })}
        </div>
    )
}
