import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";
import Anchor from "@components/ui/Anchor";
import { AuthContext } from "@contexts";
import { pageTitles } from "./pageTitles";
import imgArrow from "@assets/Icons/nav/Arrow.svg";
import logoCat from "@assets/Icons/nav/LogoCat.svg";
import userIcon from "@assets/Icons/nav/User.svg";
import i_icon from "@assets/Icons/nav/i.svg";
import logout_icon from "@assets/Icons/nav/LogOut.svg";

import "./style.scss";

export default function Nav() {
  const isAuth = useContext(AuthContext);
  const [navMenu, setNavMenu] = useState(false);
  const [title, setTitle] = useState("");
  const bgElem = useRef(null);
  const [userMenu, setUserMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setNavMenu(false);
    setTitle(() => {
      const pageTitle = pageTitles.filter((elem) => elem.link === pathname)[0];
      return pageTitle ? pageTitle.title : pageTitles[0].title;
    });
  }, [pathname]);

  const showMenu = () => {
    if (pathname === pageTitles[0].link) {
      setNavMenu((prev) => !prev);
    }
  };

  const showUserMenu = () => {
    setUserMenu((prev) => !prev);
  };

  const logOut = () => {
    isAuth.logout();
  };

  return (
    <header id="nav">
      <nav>
        <div ref={bgElem} className="nav-holder">
          <div className="nav-row">
            <div className="logo">
              <NavLink to="/">
                <div className="logo-holder">
                  sniff
                  <div className="logo-cat">
                    <img alt="#" src={logoCat} />
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="nav-row__center">
              <button className="nav-row__btn" onClick={showMenu}>
                <span>{title}</span>
                <img alt="#" src={imgArrow} />
              </button>

              <ul className="nav-list">
                <li className="nav-list__item">
                  <NavLink className="nav-list__addPet" to="/addpet">
                    Я знайшов тваринку
                  </NavLink>
                </li>
                <li className="nav-list__item">
                  <NavLink className="nav-list__addPet" to="/addpet">
                    Я загубив тваринку
                  </NavLink>
                </li>
              </ul>
            </div>

            {isAuth.user && isAuth.isAuthenticated ? (
              <div>
                <button onClick={showUserMenu} className="nav-row__btn">
                  <img alt="#" src={userIcon} />
                  <span>{isAuth.user.name}</span>
                  <img alt="#" src={imgArrow} />
                </button>

                <div className="wrap">
                  <Transition
                    in={userMenu}
                    timeout={50}
                    mountOnEnter
                    unmountOnExit
                  >
                    <ul className="nav-userMenu-list">
                      <li className="nav-userMenu-list__item">
                        <NavLink to="/profile">
                          <img alt="#" src={i_icon} />
                          профіль
                        </NavLink>
                      </li>
                      <li className="nav-userMenu-list__item">
                        <button onClick={logOut}>
                          <img alt="#" src={logout_icon} />
                          вихід
                        </button>
                      </li>
                    </ul>
                  </Transition>
                </div>
              </div>
            ) : (
              <NavLink className="nav-row_singUp" to="/signin">
                Вхід
              </NavLink>
            )}
          </div>

          <div className="wrap">
            <Transition in={navMenu} timeout={50} mountOnEnter unmountOnExit>
              <ul className="nav-menu-list">
                <li className="nav-menu-list__item">
                  <a href="/">Головна сторінка</a>
                </li>
                <li className="nav-menu-list__item">
                  <Anchor text="Наші тваринки" href="#ourAnimals" />
                </li>
                <li className="nav-menu-list__item">
                  <Anchor text="Інформація про тваринок" href="#aboutAnimals" />
                </li>
                <li className="nav-menu-list__item">
                  <NavLink to="/about">Про нас</NavLink>
                </li>
              </ul>
            </Transition>
          </div>
        </div>
      </nav>
    </header>
  );
}
