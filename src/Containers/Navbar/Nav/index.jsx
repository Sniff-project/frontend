import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout as logoutUser } from "@core/Services";
import { useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";
import { Anchor, Link } from "@components/ui";
import { useAuth } from "@core/Hooks";

import imgArrow from "@assets/Icons/nav/Arrow.svg";
import logoCat from "@assets/Icons/nav/LogoCat.svg";
import userIcon from "@assets/Icons/nav/User.svg";
import i_icon from "@assets/Icons/nav/i.svg";
import logout_icon from "@assets/Icons/nav/LogOut.svg";

import "./style.scss";

export default function Nav() {
  const isAuth = useAuth();
  const [navMenu, setNavMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const name = isAuth.user?.name;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  let isHome = false;
  if (pathname === "/") isHome = true;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const pageTitles = "Головна сторінка";

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    setNavMenu(false);
  }, [pathname]);

  const handleResize = (event) => {
    setScreenWidth(event.target.innerWidth);
  };

  const showMenu = () => {
    setNavMenu((prev) => !prev);
  };

  const showUserMenu = () => {
    setUserMenu((prev) => !prev);
  };

  const logOut = () => {
    dispatch(logoutUser(isAuth));
  };

  return (
    <header id="nav">
      <nav>
        <div className="nav-holder">
          <div className="container2000">
            <div className="nav-row">
              <div className="logo">
                <Link href="/" sx={{ padding: "10px 15px", height: "100%" }}>
                  <div className="logo-holder">
                    sniff
                    <div className="logo-cat">
                      <img alt="#" src={logoCat} />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="nav-row__center" style={!isHome ? {justifyContent: 'flex-end'} : {}} >
                {isHome && (
                  <Link href="#" className="nav-row__btn" onClick={showMenu}>
                    <span>{pageTitles}</span>
                    <img alt="#" src={imgArrow} />
                  </Link>
                )}

                {screenWidth > 1000 && (
                  <ul className="nav-list">
                    <li className="nav-list__item">
                      <Link
                        className="nav-list__addPet"
                        href="/pets">
                        Галерея тваринок
                      </Link>
                    </li>
                    <li className="nav-list__item">
                      <Link
                        className="nav-list__addPet"
                        href="/pets/create?status=found">
                        Я знайшов тваринку
                      </Link>
                    </li>
                    <li className="nav-list__item">
                      <Link className="nav-list__addPet" href="/pets/create">
                        Я загубив тваринку
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {name && isAuth.isAuthenticated ? (
                <div>
                  <Link
                    href="#"
                    onClick={showUserMenu}
                    className="nav-row__btn">
                    <img alt="#" src={userIcon} />
                    <span>{name}</span>
                    <img alt="#" src={imgArrow} />
                  </Link>

                  <div className="wrap">
                    <Transition
                      in={userMenu}
                      timeout={50}
                      mountOnEnter
                      unmountOnExit>
                      <ul className="nav-userMenu-list">
                        <li className="nav-userMenu-list__item">
                          <Link
                            href="/profile"
                            sx={{
                              width: "100%",
                              justifyContent: "flex-start",
                              px: "10%",
                            }}>
                            <img alt="#" src={i_icon} />
                            профіль
                          </Link>
                        </li>
                        <li className="nav-userMenu-list__item">
                          <Link
                            href="#"
                            onClick={logOut}
                            sx={{
                              width: "100%",
                              justifyContent: "flex-start",
                              px: "10%",
                            }}>
                            <img alt="#" src={logout_icon} />
                            вихід
                          </Link>
                        </li>
                      </ul>
                    </Transition>
                  </div>
                </div>
              ) : (
                <Link className="nav-row_singUp" href="/signin">
                  Вхід
                </Link>
              )}
            </div>

            <div className="wrap">
              <Transition in={navMenu} timeout={50} mountOnEnter unmountOnExit>
                <ul className="nav-menu-list">
                  <li className="nav-menu-list__item">
                    <Link href="/">Головна сторінка</Link>
                  </li>
                  <li className="nav-menu-list__item">
                    <Anchor text="Наші тваринки" href="#ourAnimals" />
                  </li>
                  <li className="nav-menu-list__item">
                    <Anchor
                      text="Інформація про тваринок"
                      href="#aboutAnimals"
                    />
                  </li>
                  <li className="nav-menu-list__item">
                    <Link href="/about">Про нас</Link>
                  </li>

                  {screenWidth <= 1000 && (
                    <>
                      <li className="nav-menu-list__item">
                        <Link className="nav-list__addPet" href="/pets">
                          Галерея тваринок
                        </Link>
                      </li>
                      <li className="nav-menu-list__item">
                        <Link className="nav-list__addPet" href="/pets/create?status=found">
                          Я знайшов тваринку
                        </Link>
                      </li>
                      <li className="nav-menu-list__item">
                        <Link className="nav-list__addPet"  href="/pets/create">
                          Я загубив тваринку
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
