import React from "react";
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";
import NavigationCard from "@components/ordinary/Homepage/NavigationCard";
import catImg from "@assets/Icons/petCards/iconCat.svg";


export default function AnimalCards({ animals }) {
  const animalCards = animals?.length > 3 ? animals?.slice(0, 3) : animals;

  return (
    <div className="cardsAnimals">
      {animalCards?.map((animal) => {
        return (
          <AnimalCard
            className={!animal.photo ? "cardAnimal__imgCat" : ""}
            id={animal.id}
            hasPhoto={!animal.photo ? false : true}
            key={animal.id}
            name={animal.name}
            imageSrc={!animal.photo ? catImg : animal.photo}
          />
        );
      })}
      <NavigationCard />
    </div>
  );
}
