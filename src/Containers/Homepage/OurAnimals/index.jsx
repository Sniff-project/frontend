import React from 'react';
import AnimalCards from "@components/smart/Homepage/AnimalCards";
import './style.scss';

export default function OurAnimals() {
    return (

        <section id='ourAnimals'>
            <div className='animals'>
                <h2 className='animals-title'>Наші тваринки</h2>
                <AnimalCards />
            </div>
        </section>

    )
}
