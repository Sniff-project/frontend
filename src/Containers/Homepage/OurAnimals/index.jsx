import React, {useState, useEffect} from "react";
import AnimalCards from "@components/smart/Homepage/AnimalCards";
import "./style.scss";
import AnimalSlideCard from "../../../Components/smart/Homepage/AnimalSlideCards/AnimalSlideCard";

export default function OurAnimals() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = (event) => {
    setScreenWidth(event.target.innerWidth);
  };

  return (
    <section id="ourAnimals">
      <div className="animals">
        <h2 className="animals-title">Наші тваринки</h2>
        {screenWidth > 619 ? <AnimalCards /> : <AnimalSlideCard />}
      </div>
    </section>
  );
}
