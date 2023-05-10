import React, {useState, useEffect} from "react";
import AnimalCards from "@components/smart/Homepage/AnimalCards";
import AnimalSlideCards from "@components/smart/Homepage/AnimalSlideCards";
import "./style.scss";

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
        {screenWidth > 619 ? <AnimalCards /> : <AnimalSlideCards />}
      </div>
    </section>
  );
}
