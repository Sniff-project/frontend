import React from 'react'
import CardAnimal from '../ordinary/CardAnimal';

export default function CardsAnimals() {

    const cardsAnimals = ['Роза', 'Бібі', 'Ріо', '?'];

    return (
        <div className='cardsAnimals'>
            {
                cardsAnimals.map((elem, index) => {
                    return <CardAnimal key={index} name={elem}/>
                })
            }
        </div>
    )
}
