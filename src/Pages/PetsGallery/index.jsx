import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { petsGallery } from "@core/Services/pets";
import AnimalCard from "../../Components/ordinary/Homepage/AnimalCard";
import dogImg from "@assets/Images/Homepage/dog.webp";
import Carousel from "react-material-ui-carousel";
import "./styles.scss";
import Pagination from "@mui/material/Pagination";

export default function PetsGallery() {
  const maxCardsOnPage = 12;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const gallery_Array = useSelector((state) => state.gallery);
  const test_Array = new Array(150).fill(1).map((elem, i) => (elem = ++i));
  const maxPages = Math.ceil(test_Array.length / maxCardsOnPage);
  const anArrayOfNumbers = new Array(maxPages)
    .fill(1)
    .map((elem, i) => (elem = ++i));

  useEffect(() => {
    // dispatch(petsGallery(token));
  }, [dispatch, user, token]);

  const handleSlide = (e, value) => {
    setCurrentSlideIndex(--value);
  }

  return (
    <div className="gallery">
      <div className="container2000">
        <div className="gallery-container">
          <Carousel
            className="gallery-slider"
            animation="fade"
            autoPlay={false}
            navButtonsProps={{ style: { display: 'none' }, className: '' }}
            slidesPerPage={maxCardsOnPage}
            indicators={false}
            index={currentSlideIndex}
          >
            {[...Array(maxPages)].map((_, slideIndex) => (
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
            ))}
          </Carousel>
        </div>
        <Pagination count={maxPages} onChange={handleSlide} />
      </div>
    </div>
  );
}
