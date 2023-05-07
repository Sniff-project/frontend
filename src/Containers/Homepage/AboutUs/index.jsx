import React from "react";
import { NavLink } from "react-router-dom";
import { Button1 } from "@components/ui";
import "./style.scss";

export default function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="about-bg">
        <div className="about-block">
          <h1 className="about-block__title">SNIFF допоможе знайти вашу тваринку</h1>
          <p className="about-block__text">Цей веб-ресурс був розроблений для пошуку загублених або залишених тварин.</p>
          <NavLink to="/about">
            <Button1 className="btn-blue">Дізнатись більше</Button1>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
