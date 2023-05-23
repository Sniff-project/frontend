import React from "react";
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";
import NavigationCard from "@components/ordinary/Homepage/NavigationCard";

export default function AnimalCards({animals}) {

  const animalCards = animals?.length > 3 ?  animals?.slice(0, 4) : animals;

  return (
    <div className="cardsAnimals">
      {animalCards?.map((animal) => {
        {console.log(animal)}
        return <AnimalCard id={animal.id} key={animal.id} name={animal.name} imageSrc={animal.photo} />;
      })}
      <NavigationCard/>
    </div>
  );
}
