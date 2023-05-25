import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

export default function AnimalCard({
  name,
  imageSrc,
  className,
  id,
  hasPhoto,
}) {
  return (
    <NavLink className="cardAnimal" to={`/pets/${id}`}>
      <div
        className={`cardAnimal__img ${className}`}
        style={{ backgroundImage: `url(${imageSrc})`, zIndex: 2 }}
      />
      {hasPhoto && (
        <div
          className={`cardAnimal__img ${className}`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            position: "absolute",
            zIndex: 1,
            filter: "blur(5px)",
          }}
        />
      )}
      <div className="cardAnimal__name">{name}</div>
    </NavLink>
  );
}
