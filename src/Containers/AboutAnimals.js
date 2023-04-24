import React from 'react';
import AnimalsInformation from '../Components/smart/AnimalsInformation/AnimalsInformation';

export default function AboutAnimals() {
    return (
        <section id='aboutAnimals'>
            <div className='aboutAnimals'>
                <h2 className='aboutAnimals-title'>Трішки інформації про наших тваринок</h2>
                <AnimalsInformation />
            </div>
        </section>
    )
}
