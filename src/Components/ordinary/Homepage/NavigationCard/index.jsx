import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { useState } from "react";

export default function NavigationCard() {
  const [numAnimals, setNumAnimals] = useState(25402);

  return (
    <NavLink className="cardAnimal" to="/">
      <div className="cardAnimal-holder">
        <p className="cardAnimal__text">Ще {numAnimals} які чекають на тебе</p>
        <div className="cardAnimal__button">Побачити їх</div>
      </div>
    </NavLink>
  );
}
