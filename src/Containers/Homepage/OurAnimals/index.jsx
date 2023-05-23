import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import AnimalCards from "@components/smart/Homepage/AnimalCards";
import AnimalSlideCards from "@components/smart/Homepage/AnimalSlideCards";
import { petsGallery } from "@core/Services/pets";
import { Message } from "@components/ordinary";
import "./style.scss";

export default function OurAnimals() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { gallery, isLoading, error } = useSelector((state) => state.gallery);
  const galleryArray = gallery?.content;

  useEffect(() => {
    dispatch(petsGallery(token));
  }, [dispatch, user, token]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = (event) => {
    setScreenWidth(event.target.innerWidth);
  };

  const Slider = () => {
    if (!isLoading) {
      return screenWidth > 619 ? (
        <AnimalCards animals={galleryArray} />
      ) : (
        <AnimalSlideCards animals={galleryArray} />
      );
    }
  };

  return (
    <section id="ourAnimals">
      <div className="animals">
        <h2 className="animals-title">Наші тваринки</h2>
        {error ? (
          <Message
            message={error.message}
            messageType="error"
            m={"50px auto"}
          />
        ) : (
          <Slider />
        )}
      </div>
    </section>
  );
}
