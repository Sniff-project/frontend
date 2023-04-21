import React, { useState } from 'react';
import imgArrow from '../Assets/Icons/Arrow.svg';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Transition } from 'react-transition-group';

export default function Navbar() {

    const [navMenu, setNavMenu] = useState(false);

    return (
        <nav >
            <div className='nav-holder'>
                <div className='nav-row'>
                    <div id={'ttt'} className="logo">
                        sniff
                    </div>
                    <div className='nav-row__center'>

                        <button className='nav-row__btn' onClick={() => setNavMenu(prev => !prev)}>
                            Головна сторінка
                            <img src={imgArrow} />
                        </button>

                        <ul className='nav-list'>
                            <li className='nav-list__item'>
                                <NavLink className='nav-list__addPet' to='/addPet'>Я знайшов тваринку</NavLink>
                            </li>
                            <li className='nav-list__item'>
                                <NavLink className='nav-list__addPet' to='/addPet'>Я загубив тваринку</NavLink>
                            </li>
                        </ul>
                    </div>

                    <NavLink className='nav-row_singUp' to='/singUp'>Зареєструватись</NavLink>

                </div>

                <div className='wrap'>
                    <Transition
                        in={navMenu}
                        timeout={50}
                        mountOnEnter
                        unmountOnExit
                    >
                        <ul className='nav-menu-list'>
                            <li className='nav-menu-list__item'>
                                <AnchorLink className='nav-menu__link' href=''>Головна сторінка</AnchorLink>
                            </li>
                            <li className='nav-menu-list__item'>
                                <AnchorLink className='nav-menu__link' href=''>Наші тваринки</AnchorLink>
                            </li>
                            <li className='nav-menu-list__item'>
                                <AnchorLink className='nav-menu__link' href=''>Інформація про тваринок</AnchorLink>
                            </li>
                        </ul>
                    </Transition>
                </div>
            </div>
        </nav>
    )
}
