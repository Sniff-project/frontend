import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";
import jwt_decode from "jwt-decode";
import Anchor from "@components/ui/Anchor";
import { AuthContext } from "@contexts";
import { pageTitles } from "./pageTitles";
import imgArrow from "../../../Assets/Icons/nav/Arrow.svg";
import logoCat from "../../../Assets/Icons/nav/LogoCat.svg";
import userIcon from "../../../Assets/Icons/nav/User.svg";
import i_icon from "../../../Assets/Icons/nav/i.svg";
import logout_icon from "../../../Assets/Icons/nav/LogOut.svg";

import "./style.scss";

export default function Nav() {
  const isAuth = useContext(AuthContext);
  const [navMenu, setNavMenu] = useState(false);
  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState(null);
  const bgElem = useRef(null);
  const [userMenu, setUserMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setTitle(() => {
      return pageTitles.filter((elem) => elem.link === pathname)[0].title;
    });
  }, [pathname]);

  useEffect(() => {
    if (isAuth.isAuthenticated) {
      bgElem.current.setAttribute(
        "style",
        "--bg-color: rgba(151, 194, 245, 0.2);"
      );
    } else {
      bgElem.current.setAttribute("style", "--bg-color: rgba(0, 0, 0, 0.1);");
    }

    if (sessionStorage.getItem("jwtToken")) {
      var decoded = jwt_decode(sessionStorage.getItem("jwtToken"));
      setUserName(decoded.name);
    }
  }, [isAuth]);

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
    <header>
      <nav>
        <div ref={bgElem} className="nav-holder">
          <div className="nav-row">
            <div className="logo">
              <NavLink to='/'>
                <div className="logo-holder">
                  sniff
                  {isAuth.isAuthenticated && (
                    <div className="logo-cat">
                      <img alt="#" src={logoCat} />
                    </div>
                  )}
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

            {userName && isAuth.isAuthenticated ? (
              <div>
                <button onClick={showUserMenu} className="nav-row__btn">
                  <img alt="#" src={userIcon} />
                  <span>{userName}</span>
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
              <NavLink className="nav-row_singUp" to="/registration">
                Зареєструватись
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
              </ul>
            </Transition>
          </div>
        </div>
      </nav>
    </header>
  );
}
