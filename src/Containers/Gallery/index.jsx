import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { petsGallery } from "@core/Services/pets";
import AnimalCard from "../../Components/ordinary/Homepage/AnimalCard";
import Carousel from "react-material-ui-carousel";
import { Message } from "@components/ordinary";
import { Spinner } from "@components/simple";
import "./styles.scss";
import { Pagination } from "@mui/material";
import { SortingSelects } from "@components/smart/Gallery";
import catImg from "@assets/Icons/petCards/iconCat.svg";

const successMessage = "Галерея завантажена!";
const emptyGalleryMessage = "Галерея поки порожня!";
let unregisteredMessage = "Увійдіть в акаунт, щоб побачити галерею тварин!";
const maxCardsOnPage = 12;

export default function Gallery() {
  const [spinnerState, setSpinnerState] = useState(true);
  const [emptyGalleryState, setEmptyGalleryState] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { user, token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { gallery, isLoading, error } = useSelector((state) => state.gallery);
  const maxPages = gallery?.totalPages;
  const galleryArray = gallery?.content;

  const arr = new Array(10).fill(1).map((elem) => (elem = "Yana"));

  useEffect(() => {
    dispatch(petsGallery(token, currentSlideIndex));
  }, [dispatch, user, token, currentSlideIndex]);

  useEffect(() => {
    if ((!isLoading && gallery.message === successMessage) || error) {
      setSpinnerState(false);
      if (!gallery.content?.length && !error) setEmptyGalleryState(true);
    }
    if (error && !user && !token) error.message = unregisteredMessage;
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
          {emptyGalleryState && (
            <p
              style={{
                fontSize: "25px",
                textAlign: "center",
                marginTop: "80px",
              }}
            >
              {emptyGalleryMessage}
            </p>
          )}

          {!error && !emptyGalleryState && <SortingSelects />}

          {!spinnerState && !error && !emptyGalleryState && (
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
                  {galleryArray
                    ?.slice(
                      slideIndex * maxCardsOnPage,
                      (slideIndex + 1) * maxCardsOnPage
                    )
                    .map((animal) => (
                      <AnimalCard
                        className={!animal.photo ? "cardAnimal__imgCat" : ""}
                        key={animal.id}
                        name={animal.name}
                        imageSrc={!animal.photo ? catImg : animal.photo}
                      />
                    ))}
                  {arr.map((elem, index) => (
                    <AnimalCard
                      key={index}
                      name={elem}
                    />
                  ))}
                </div>
              ))}
            </Carousel>
          )}
        </div>
        {!error && !emptyGalleryState && (
          <Pagination count={maxPages} onChange={handleSlide} />
        )}
      </div>
    </div>
  );
}
