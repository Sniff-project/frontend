import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button1 } from "@components/ui";
import "./style.scss";

export default function AboutUs() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = (event) => {
    setScreenWidth(event.target.innerWidth);
  };

  return (
    <section id="aboutUs">
      <div className="about-bg">
        <div className="about-block">
          <h1 className="about-block__title">
            SNIFF допоможе знайти вашу тваринку
          </h1>

          <div className={screenWidth > 550 ? "" : "about-block__down"}>
            <p className="about-block__text">
              Цей веб-ресурс був розроблений для пошуку загублених або залишених
              тварин.
            </p>
            <NavLink to="/about">
              <Button1 className="btn-blue">Дізнатись більше</Button1>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
