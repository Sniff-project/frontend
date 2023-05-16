import React from "react";
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";
import NavigationCard from "@components/ordinary/Homepage/NavigationCard";
import dogImg from "@assets/Images/Homepage/dog.webp";
import catImg from "@assets/Icons/petCards/iconCat.svg";

export default function AnimalCards() {
  const cardsAnimals = ["Роза", "Бібі", "Ріо"];

  return (
    <div className="cardsAnimals">
      {cardsAnimals.map((elem, index) => {
        return <AnimalCard key={index} name={elem} imageSrc={dogImg} />;
      })}
      <NavigationCard/>
    </div>
  );
}
