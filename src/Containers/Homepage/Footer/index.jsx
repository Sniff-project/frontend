import React from 'react';
import { NavLink } from 'react-router-dom';
import Anchor from "@components/ui/Anchor";
import facebookImg from '../../../Assets/Icons/footer/facebook.png';
import instagramImg from '../../../Assets/Icons/footer/instagram.png';
import './style.scss';

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
                                <Anchor text='Наші тваринки' href='#ourAnimals'/>
                            </li>
                            <li>
                                <Anchor text='Інформація про наших тваринок' href='#aboutAnimals'/>
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
