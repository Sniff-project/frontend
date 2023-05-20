import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { petsGallery } from "@core/Services/pets";
import AnimalCard from "../../Components/ordinary/Homepage/AnimalCard";
import dogImg from "@assets/Images/Homepage/dog.webp";
import Carousel from "react-material-ui-carousel";
import "./styles.scss";

export default function PetsGallery() {
  const maxCardsOnPage = 12;
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const gallery_Array = useSelector((state) => state.gallery);
  const test_Array = new Array(50).fill(1).map((elem, i) => (elem = ++i)); // from 1 to 50 numbers

  const anArrayOfNumbers = [1,2,3,4,5,6];

  useEffect(() => {
    dispatch(petsGallery(token));
  }, [dispatch, user, token]);

  return (
    <div className="gallery">
      <div className="container2000">
        <div className="gallery-container">
          <Carousel
            className="gallery-slider"
            animation="fade"
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            slidesPerPage={maxCardsOnPage}
            activeIndicatorIconButtonProps={{
              style: {
                color: "#48A0D1",
              },
            }}
            indicatorContainerProps={{
              style: {
                display: "flex",
                justifyContent: "center",
                gap: '0 10px'
              },
            }}
            IndicatorIcon={anArrayOfNumbers}
          >
            {[...Array(Math.ceil(test_Array.length / maxCardsOnPage))].map(
              (_, slideIndex) => (
                <div className="gallery-page" key={slideIndex}>
                  {test_Array
                    .slice(
                      slideIndex * maxCardsOnPage,
                      (slideIndex + 1) * maxCardsOnPage
                    )
                    .map((animal, index) => (
                      <AnimalCard key={index} name={animal} imageSrc={dogImg} />
                    ))}
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
