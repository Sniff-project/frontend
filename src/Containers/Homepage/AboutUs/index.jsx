import React from "react";
import { NavLink } from "react-router-dom";
import { Button1 } from "@components/ui";
import "./style.scss";

export default function AboutUs() {
  return (
    <section>
      <div className="about-bg">
        <div className="about-block">
          <p>
            Sniff - це онлайн-пошукова база даних тварин, яким потрібен дім. Це
            також довідник майже 500 притулків для тварин та організацій з
            усиновлення в Україні. Організації підтримують власні домашні
            сторінки та бази даних доступних домашніх тварин.
            <br></br>
            Наша задача:
            <br></br>
            1. Підвищення обізнаності громадськості щодо наявності високоякісних
            усиновлюваних домашніх тварин.
            <br></br>
            2. Підвищити загальну ефективність програм усиновлення домашніх
            тварин по всій Україні, щоб скасувати евтаназію домашніх тварин.
            <br></br>
            3. Підвищити статус домашніх тварин до статусу члена сім'ї
          </p>
          <NavLink to="/about">
            <Button1 className="btn-blue">Дізнатись більше</Button1>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
