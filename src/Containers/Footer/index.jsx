import React from "react";
import { Link, Anchor } from "@components/ui";
import facebookImg from "@assets/Icons/footer/facebook.webp";
import instagramImg from "@assets/Icons/footer/instagram.webp";
import dogImgFooter from "@assets/Images/Footer/dog.webp";
import "./style.scss";

export default function Footer() {
  const OUR_EMAIL = "qwerty1234@gmail.com";
  const ourPhoneNum = ["+380 99 123 45 67", "+380 97 513 24 75"];

  return (
    <footer>
      <div className="footer">
        <div className="container2000">
          <div className="footer-container">
            <div className="footer-logo">
              <Anchor
                className="footer-logo__text"
                text="SNIFF"
                href="/#nav"
                sx={{ padding: "20px 40px" }}
              />
            </div>
            <div className="footer-tabs">
              <h3>Закладки</h3>
              <ul>
                <li>
                  <Link href="/" color="white">
                    Головна сторінка
                  </Link>
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
                  <Link href="/profile" color="white">
                    Профіль
                  </Link>
                </li>
                <li>
                  <Link href="/about" color="white">
                    Про нас
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-contacts">
              <h3>Контакти та соціальні мережі</h3>
              <ul>
                {ourPhoneNum.map((number, index) => (
                  <li key={index}>
                    <a href={`tel:${number}`}>{number}</a>
                  </li>
                ))}
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
      </div>
    </footer>
  );
}
