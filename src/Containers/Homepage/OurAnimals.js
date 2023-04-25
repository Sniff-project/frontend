import React from 'react';
import CardsAnimals from '../../Components/smart/Homepage/CardsAnimals';

export default function OurAnimals() {
    return (

        <section id='ourAnimals'>
            <div className='animals'>
                <h2 className='animals-title'>Наші тваринки</h2>
                <CardsAnimals />
            </div>
        </section>

    )
}
