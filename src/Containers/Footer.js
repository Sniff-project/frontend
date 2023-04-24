import React from 'react';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import facebookImg from '../Assets/Icons/footer/facebook.png';
import instagramImg from '../Assets/Icons/footer/instagram.png';

export default function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-logo'>
                        sniff
                    </div>
                    <div className='footer-tabs'>
                        <h3>Закладки</h3>
                        <ul>
                            <li>
                                <a href='/'>Головна сторінка</a>
                            </li>
                            <li>
                                <AnchorLink href='#ourAnimals'>Наші тваринки</AnchorLink>
                            </li>
                            <li>
                                <AnchorLink href='#aboutAnimals'>Інформація про наших тваринок</AnchorLink>
                            </li>
                            <li>
                                <NavLink to='/profile'>Профіль</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>Про нас</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-contacts'>
                        <h3>Контакти та соціальні мережі</h3>
                        <a href='tel:'>+380 99 123 45 67</a>
                        <a href='tel:'>+380 99 123 45 67</a>
                        <a href='mailto:qwerty1234@gmail.com'>qwerty1234@gmail.com</a>
                        <div className='socials'>
                            <a href='https://www.facebook.com' target='_blank'>
                                <img src={facebookImg} />
                            </a>
                            <a href='https://www.instagram.com' target='_blank'>
                                <img src={instagramImg} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='footer-unknown'>
                    <ul>
                        <li>Instagram</li>
                        <li>Instagram</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
