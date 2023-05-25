import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

export default function Gallery() {
  const [spinnerState, setSpinnerState] = useState(true);
  const [emptyGalleryState, setEmptyGalleryState] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const { gallery, isLoading, error } = useSelector((state) => state.gallery);
  const maxPages = gallery?.totalPages;

  const [galleryArray, setGalleryArray] = useState([]);

  useEffect(() => {
    setEmptyGalleryState(!galleryArray?.length && !error);
  }, [galleryArray, error]);

  useEffect(() => {
    setGalleryArray(gallery?.content);
  }, [gallery?.content]);

  useEffect(() => {
    if ((!isLoading && gallery.message === successMessage) || error) {
      setSpinnerState(false);
    }
    if (gallery?.content) {
      setGalleryArray(gallery?.content);
    }
  }, [gallery, isLoading, error]);

  const handleSlide = (_, value) => {
    setCurrentSlideIndex(--value);
  };

  const goToPetsGallery = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleIsChanged = () => {
    setCurrentSlideIndex(0);
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

          {!error && (
            <SortingSelects
              currentSlideIndex={currentSlideIndex}
              handleIsChanged={handleIsChanged}
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

          {!spinnerState && !error && !emptyGalleryState && (
            <div
              className="gallery-slider"
            >
              <div className="gallery-page">
                {galleryArray.map((animal) => (
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
            </div>
          )}
        </div>
        {!error && !emptyGalleryState && (
          <Pagination count={maxPages} onChange={handleSlide} />
        )}
      </div>
    </div>
  );
}
