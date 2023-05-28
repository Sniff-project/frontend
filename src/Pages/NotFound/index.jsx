import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@components/ui";

import "./style.scss";

const NotFound = () => {
  const pictureRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = -e.clientX / 5;
      let y = -e.clientY / 5;
      pictureRef.current.style.backgroundPositionX = x + 'px';
      pictureRef.current.style.backgroundPositionY = y + 'px';
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="NotFound" ref={pictureRef}>
      <div className="NotFound__container">
        <h2 className="NotFound__title">404</h2>
        <h4 className="NotFound__subtitle">Оопс! Сторінку не знайдено</h4>
        <p className="NotFound__text">Сторінка, яку ви шукали, не існує. Можливо, ви помилилися з адресою або сторінка перемістилася.</p>
        <NavLink to="/">
            <Button className="btn-blue">Повернутися додому</Button>
        </NavLink>
      </div>
    </section>
  );
};

export default NotFound;
