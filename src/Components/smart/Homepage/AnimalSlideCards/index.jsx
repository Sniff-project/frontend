import React from "react";
import Carousel from "react-material-ui-carousel";
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";
import NavigationCard from "@components/ordinary/Homepage/NavigationCard";

export default function AnimalSlideCards({ animals }) {
  const animalCards = animals?.length > 3 ? animals?.slice(0, 4) : animals;
  let fullArray = null;

  if (animalCards?.length > 0) {
    fullArray = [...animalCards, 0];
  }

  return (
    <Carousel
      className="carousel-cardsAnimal"
      width="200px"
      fullHeightHover={false}
      navButtonsProps={{
        style: {
          backgroundColor: "#48A0D1",
          borderRadius: "50%",
          opacity: 0.8,
        },
      }}
      NextIcon="&#8680;"
      PrevIcon="&#8678;"
      activeIndicatorIconButtonProps={{
        style: {
          padding: "5px",
          color: "#48A0D1",
        },
      }}
    >
      {fullArray?.map((animal) => {
        if (!animal) return <NavigationCard key={-1}/>;
        return (
          <AnimalCard
            key={animal.id}
            id={animal.id}
            name={animal.name}
            imageSrc={animal.photo}
          />
        );
      })}
    </Carousel>
  );
}
