import React from "react";
import './style.scss';
import { NavLink } from "react-router-dom";

export default function AnimalCard({ name, imageSrc }) {
  return (
    <NavLink className="cardAnimal" to="/">
      <img className="cardAnimal__img" alt="" src={imageSrc} />
      <div className="cardAnimal__name">{name}</div>
    </NavLink>
  );
}
