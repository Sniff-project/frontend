import React from 'react';
import dog from '../../../../Assets/Images/Homepage/dog.jpg';

export default function CardAnimal({name}) {
  return (
    <div className='cardAnimal'>
        <img alt='' src={dog}/>
        <div className='animalName'>
            {name}
        </div>
    </div>
  )
}
