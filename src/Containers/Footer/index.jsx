import React from "react";
import { Link1, Anchor } from "@components/ui";
import facebookImg from "@assets/Icons/footer/facebook.webp";
import instagramImg from "@assets/Icons/footer/instagram.webp";
import "./style.scss";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-logo">sniff</div>
                    <div className="footer-tabs">
                        <h3>Закладки</h3>
                        <ul>
                            <li>
                                <Link1 to="/" color="white">
                                    Головна сторінка
                                </Link1>
                            </li>
                            <li>
                                <Anchor
                                    text="Наші тваринки"
                                    href="/#ourAnimals"
                                />
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
                        <a href="tel:380991234567">+380 99 123 45 67</a>
                        <a href="tel:380991234567">+380 99 123 45 67</a>
                        <a href="mailto:qwerty1234@gmail.com">
                            qwerty1234@gmail.com
                        </a>
                        <div className="socials">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer noindex nofollow"
                            >
                                <img alt="#" src={facebookImg} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer noindex nofollow"
                            >
                                <img alt="#" src={instagramImg} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-unknown">
                    <ul>
                        <li>Instagram</li>
                        <li>Instagram</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
