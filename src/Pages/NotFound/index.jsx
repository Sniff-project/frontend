import React, { useEffect, useRef } from "react";
import "./style.scss";

const NotFound = () => {
  const pictureRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = -e.clientX / 5;
      let y = -e.clientY / 5;
      pictureRef.current.style.backgroundPositionX = x + 'px';
      pictureRef.current.style.backgroundPositionY = y + 'px';
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="NotFound" ref={pictureRef}>
      <div className="NotFound__container">
        <h2 className="NotFound__title">404</h2>
        <h4 className="NotFound__subtitle">Opps! Page not found</h4>
        <p className="NotFound__text">The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
        <a href="#" className="NotFound__link">Back To Home</a>
      </div>
    </section>
  );
};

export default NotFound;
