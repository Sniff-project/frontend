import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GalleryBlock, SortingSelects } from "@components/smart/Gallery";
import { Message } from "@components/ordinary";
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

export default function Gallery() {
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
    <div className="gallery" style={{ minHeight: "800px" }}>
      <div className="container2000">
        <div className="gallery-container">
          <Grid
            container
            alignItems="center"
            sx={{ top: "3.125rem", left: "3.125rem", paddingTop: "40px" }}>
            <Tooltip title="На головну">
              <IconButton onClick={goToPetsGallery}>
                <ArrowBackRoundedIcon color="black" />
              </IconButton>
            </Tooltip>
            <Typography
              variant="h1"
              sx={{ color: theme.palette.black.secondary }}>
              Галерея тваринок
            </Typography>
          </Grid>

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

          <GalleryBlock gallery={gallery} isLoading={isLoading} error={error} />
        </div>
        {!error && !emptyGalleryState && (
          <Pagination
            style={{ margin: "30px" }}
            count={maxPages}
            onChange={handleSlide}
          />
        )}
      </div>
    </div>
  );
}
