import React from "react";
import "./style.scss";

import dogsImg from "@assets/Images/AboutUS/dogs.webp";
import catImg from "@assets/Images/AboutUS/cat.webp";

const AboutUs = () => {
  return(
    <section className="about">

      <h2 className="about__title">sniff</h2>
      
      <div className="about__info">

          <div className="about__block">
            <div className="about__text">
              З кожним днем кількість безхатніх тварин на вулицях України зростає. Ми вважаємо, що кожен чотирилапий заслуговує бути членом люблячої родини, тож допоможемо хвостикам знайти або повернути свою домівку!
            </div>
            <div className="about__img">
              <img src={dogsImg} alt="dogs" />
            </div>
          </div>
          
          <div className="about__block about__block_cat">
            <div className="about__text about__text_cat">
              На сайті ти можеш: переглянути профілі тварин, зберегти собі тих, хто сподобався, опублікувати свого загубленого улюбленця. І ще багато іншого! Переглядай, клікай та забирай свого чотирилапого.
            </div>
            <div className="about__img about__img_cat">
              <img src={catImg} alt="cat" />
            </div>
          </div>
          
      </div>
      
      

    </section>
  )
};

export default AboutUs;
