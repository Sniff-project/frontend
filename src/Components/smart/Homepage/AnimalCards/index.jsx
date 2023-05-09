import React from "react";
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";
import dogImg from "../../../../Assets/Images/Homepage/dog.webp";
import NavigationCard from "../../../ordinary/Homepage/NavigationCard";

export default function AnimalCards() {
  const cardsAnimals = ["Роза", "Бібі", "Ріо"];

  return (
    <div className="cardsAnimals">
      {cardsAnimals.map((elem, index) => {
        return <AnimalCard key={index} name={elem} imageSrc={dogImg} />;
      })}
      <NavigationCard />
    </div>
  );
}
