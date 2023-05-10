import React from 'react'
import Carousel from 'react-material-ui-carousel';
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";

import dogImg from "../../../../Assets/Images/Homepage/dog.webp";
import NavigationCard from '../../../ordinary/Homepage/NavigationCard';

export default function AnimalSlideCards() {

    const cardsAnimals = ["Роза", "Бібі", "Ріо", false];


    return (
        <Carousel className='carousel-cardsAnimal'
            width='200px'
            fullHeightHover={false}
            navButtonsProps={{
                style: {
                    backgroundColor: '#48A0D1',
                    borderRadius: '50%',
                    opacity: .8
                }
            }}
            NextIcon='&#8680;'
            PrevIcon='&#8678;'
            activeIndicatorIconButtonProps={{
                style: {
                    padding: "5px",
                    backgroundColor: '#48A0D1'
                }
            }}
        >
            {
                cardsAnimals.map((elem, index) => {
                    if(!elem) return <NavigationCard key={index}/> 
                    return <AnimalCard key={index} name={elem} imageSrc={dogImg} />
                })
            }
        </Carousel>
    )
}
