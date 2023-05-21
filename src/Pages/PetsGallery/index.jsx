import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { petsGallery } from "@core/Services/pets";
import AnimalCard from "../../Components/ordinary/Homepage/AnimalCard";
import dogImg from "@assets/Images/Homepage/dog.webp";
import Carousel from "react-material-ui-carousel";
import { Message } from "@components/ordinary";
import { Spinner } from "@components/simple";
import "./styles.scss";
import Pagination from "@mui/material/Pagination";

export default function PetsGallery() {
  const maxCardsOnPage = 12;
  const [spinnerState, setSpinnerState] = useState(true);
  const [emptyGalleryState, setEmptyGalleryState] = useState(false);
  const successMessage = "Галерея завантажена!";
  const emptyGalleryMessage = "Галерея поки порожня!";
  let unregisteredMessage = "Увійдіть в акаунт, щоб побачити галерею тварин!";
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const gallery_Array = useSelector((state) => state.gallery);
  const { gallery, isLoading, error } = gallery_Array;
  const test_Array = new Array(50).fill(1).map((elem, i) => (elem = ++i));
  const maxPages = Math.ceil(test_Array.length / maxCardsOnPage);

  useEffect(() => {
    dispatch(petsGallery(token));
  }, [dispatch, user, token]);

  useEffect(() => {
    if (!isLoading && gallery.message === successMessage || error) {
      setSpinnerState(false);
      if(!gallery.content?.length && !error) setEmptyGalleryState(true);
    }

    if(error && !user && !token) error.message = unregisteredMessage;

  }, [gallery, isLoading, error]);

  const handleSlide = (_, value) => {
    setCurrentSlideIndex(--value);
  };

  return (
    <div className="gallery">
      <div className="container2000">
        <div className="gallery-container">
          {spinnerState && <Spinner size={100} />}
          {error && (
            <Message
              message={error.message}
              messageType="error"
              m={"50px auto"}
            />
          )}
          {emptyGalleryState && (<p style={{fontSize: '25px', textAlign: 'center', marginTop: '80px'}}>{emptyGalleryMessage}</p>)}
          <Carousel
            className="gallery-slider"
            animation="fade"
            autoPlay={false}
            navButtonsProps={{ style: { display: "none" }, className: "" }}
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
        {!error && !emptyGalleryState && <Pagination count={maxPages} onChange={handleSlide} />}
      </div>
    </div>
  );
}
