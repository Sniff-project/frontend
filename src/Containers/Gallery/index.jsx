import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { petsGallery } from "@core/Services/pets";
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";
import { SortingSelects } from "@components/smart/Gallery";
import catImg from "@assets/Icons/petCards/iconCat.svg";
import { Message } from "@components/ordinary";
import { Spinner } from "@components/simple";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Pagination,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import "./styles.scss";

const successMessage = "Галерея завантажена!";
const emptyGalleryMessage = "Галерея поки порожня!";
const maxCardsOnPage = 12;

export default function Gallery() {
  const [spinnerState, setSpinnerState] = useState(true);
  const [emptyGalleryState, setEmptyGalleryState] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isChanged, setIsChanged] = useState(false);
  const [isEmptyStore, setIsEmptyStore] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const { gallery, isLoading, error } = useSelector((state) => state.gallery);
  const maxPages = gallery?.totalPages;

  const [galleryArray, setGalleryArray] = useState(() => {
    const storedGalleryArray = localStorage.getItem("galleryArray");
    if (storedGalleryArray) {
      setIsEmptyStore(false);
      return JSON.parse(storedGalleryArray);
    } else {
      setIsEmptyStore(true);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("galleryArray", JSON.stringify(galleryArray));
    setEmptyGalleryState(!galleryArray?.length && !error);
  }, [galleryArray, error]);

  useEffect(() => {
    if (isChanged) {
      setGalleryArray(gallery?.content);
    }
  }, [gallery?.content, isChanged]);

  useEffect(() => {
    dispatch(petsGallery(currentSlideIndex));
  }, [dispatch, currentSlideIndex]);

  useEffect(() => {
    if ((!isLoading && gallery.message === successMessage) || error) {
      setSpinnerState(false);
    }
    if (gallery?.content && isEmptyStore) {
      setGalleryArray(gallery?.content);
    }
  }, [gallery, isLoading, error, isEmptyStore]);

  const handleSlide = (d, value) => {
    setCurrentSlideIndex(--value);
  };

  const goToPetsGallery = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleIsChanged = () => {
    setIsChanged(true);
  };

  return (
    <div className="gallery">
      <div className="container2000">
        <div className="gallery-container">
          <Grid
            container
            alignItems="center"
            sx={{ top: "3.125rem", left: "3.125rem", paddingTop: "40px" }}
          >
            <Tooltip title="На головну">
              <IconButton onClick={goToPetsGallery}>
                <ArrowBackRoundedIcon color="black" />
              </IconButton>
            </Tooltip>
            <Typography
              variant="h1"
              sx={{ color: theme.palette.black.secondary }}
            >
              Галерея тваринок
            </Typography>
          </Grid>

          {spinnerState && <Spinner size={100} />}
          {error && (
            <Message
              message={error.message}
              messageType="error"
              m={"50px auto"}
            />
          )}

          {!error && <SortingSelects handleIsChanged={handleIsChanged} />}

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

          {!spinnerState && !error && !emptyGalleryState && (
            <Carousel
              className="gallery-slider"
              animation="fade"
              autoPlay={false}
              // navButtonsProps={{ style: { display: "none" }, className: "" }}
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
                        id={animal.id}
                        hasPhoto={!animal.photo ? false : true}
                        imageSrc={!animal.photo ? catImg : animal.photo}
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
