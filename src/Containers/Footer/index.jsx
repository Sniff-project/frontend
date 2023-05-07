import React from "react";
import { Link1, Anchor } from "@components/ui";
import facebookImg from "@assets/Icons/Footer/facebook.webp";
import instagramImg from "@assets/Icons/Footer/instagram.webp";
import dogImgFooter from "@assets/Images/Footer/dog.webp";
import "./style.scss";

export default function Footer() {
    const OUR_EMAIL = 'qwerty1234@gmail.com';
    const ourPhoneNum = ['+380 99 123 45 67', '+380 97 513 24 75'];

    return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <Anchor className="footer-logo__text" text="sniff" href="/#nav" />
          </div>
          <div className="footer-tabs">
            <h3>Закладки</h3>
            <ul>
              <li>
                <Link1 to="/" color="white">
                  Головна сторінка
                </Link1>
              </li>
              <li>
                <Anchor text="Наші тваринки" href="/#ourAnimals" />
              </li>
              <li>
                <Anchor
                  text="Інформація про наших тваринок"
                  href="/#aboutAnimals"
                />
              </li>
              <li>
                <Link1 to="/profile" color="white">
                  Профіль
                </Link1>
              </li>
              <li>
                <Link1 to="/about" color="white">
                  Про нас
                </Link1>
              </li>
            </ul>
          </div>
          <div className="footer-contacts">
            <h3>Контакти та соціальні мережі</h3>
            <ul>
            {
              ourPhoneNum.map((number, index) => <li key={index}><a href={`tel:${number}`}>{number}</a></li>)
            }
            </ul>
            <a href={`mailto:${OUR_EMAIL}`}>{OUR_EMAIL}</a>
            <div className="socials">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noindex nofollow"
              >
                <img alt="#" src={facebookImg} className="facebook" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer noindex nofollow"
              >
                <img alt="#" src={instagramImg} className="instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-image">
          <img alt="#" src={dogImgFooter} />
        </div>
      </div>
    </footer>
  );
}
