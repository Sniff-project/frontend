import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";
import Anchor from "@components/ui/Anchor";
import { AuthContext } from "@contexts";
import imgArrow from "../../../Assets/Icons/nav/Arrow.svg";
import logoCat from "../../../Assets/Icons/nav/LogoCat.svg";

import "./style.scss";

export default function Nav() {
  const isAuth = useContext(AuthContext);
  const [navMenu, setNavMenu] = useState(false);
  const [title, setTitle] = useState("");
  const bgElem = useRef(null);

  const titlePages = [
    {
      title: "Головна сторінка",
      link: "/",
    },
    {
      title: "Вхід",
      link: "/signin",
    },
    {
      title: "Реєстрація",
      link: "/signup",
    },
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    setTitle(() => {
      return titlePages.filter((elem) => elem.link === pathname)[0].title;
    });
  }, [pathname]);

  useEffect(() => {
    if (isAuth.isAuthenticated) {
      bgElem.current.setAttribute("style", "background-color: var(--bg-color1)");
    } else {
      bgElem.current.setAttribute("style", "background-color: var(--bg-color2)");
    }
  });

  const showMenu = () => {
    if (pathname === titlePages[0].link) {
      setNavMenu((prev) => !prev);
    }
  };

  return (
    <header>
      <nav>
        <div className="nav-holder">
          <div ref={bgElem} className="nav-row">
            <div id={"ttt"} className="logo">
              <div className="logo-holder">
                sniff
                {isAuth.isAuthenticated && (
                  <div className="logo-cat">
                    <img src={logoCat} />
                  </div>
                )}
              </div>
            </div>
            <div className="nav-row__center">
              <button className="nav-row__btn" onClick={showMenu}>
                {title}
                <img alt="" src={imgArrow} />
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

            <NavLink className="nav-row_singUp" to="/signup">
              Зареєструватись
            </NavLink>
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
              </ul>
            </Transition>
          </div>
        </div>
      </nav>
    </header>
  );
}
