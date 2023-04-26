import React from "react";
import { Link1, Anchor } from "@components/ui";
import facebookImg from "../../../Assets/Icons/footer/facebook.png";
import instagramImg from "../../../Assets/Icons/footer/instagram.png";
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
                                    href="#ourAnimals"
                                />
                            </li>
                            <li>
                                <Anchor
                                    text="Інформація про наших тваринок"
                                    href="#aboutAnimals"
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
                        <Link1 to="tel:3809912345678" color="white">
                            +380 99 123 45 67
                        </Link1>
                        <Link1 to="tel:380991234567" color="white">
                            +380 99 123 45 67
                        </Link1>
                        <Link1 to="mailto:qwerty1234@gmail.com" color="white">
                            qwerty1234@gmail.com
                        </Link1>
                        <div className="socials">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img alt="#" src={facebookImg} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noreferrer"
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
