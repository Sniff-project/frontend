import React from 'react';
import AnimalsInfo from "@components/smart/Homepage/AnimalsInfo";
import './style.scss';

export default function AboutAnimals() {
    return (
        <section id='aboutAnimals'>
            <div className='aboutAnimals'>
                <h2 className='aboutAnimals-title'>Трішки інформації про наших тваринок</h2>
                <AnimalsInfo />
            </div>
        </section>
    )
}
