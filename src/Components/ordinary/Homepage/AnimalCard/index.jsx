import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Paper } from "@mui/material";

export default function AnimalCard({ name, imageSrc, className}) {
  return (
    <Paper>
      <NavLink className="cardAnimal" to="/">
        <div
          className={`cardAnimal__img ${className}`}
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        <div className="cardAnimal__name">{name}</div>
      </NavLink>
    </Paper>
  );
}
