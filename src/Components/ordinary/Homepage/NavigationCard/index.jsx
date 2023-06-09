import React from "react";
import { NavLink } from "react-router-dom";
import catImg from "@assets/Icons/petCards/iconCat.svg";


import "./style.scss";

export default function NavigationCard() {
  return (
    <NavLink className="cardAnimal" to="/pets">
      <div className="cardAnimal-holder">
        <img className="cardAnimal__icon" src={catImg} alt="Cat"/>
        <p className="cardAnimal__text">Ще багато тваринок чекають на тебе</p>
        <div className="cardAnimal__button">Побачити їх</div>
      </div>
    </NavLink>
  );
}
