import React from "react";
import Box from "@mui/material/Box";
import AnimalCard from "@components/ordinary/Homepage/AnimalCard";
import catImg from "@assets/Icons/petCards/iconCat.svg";
import { Spinner } from "@components/simple";

const emptyGalleryMessage = "Галерея поки порожня!";

export default function GalleryBlock({ gallery, isLoading, error }) {
  const galleryArray = gallery?.content || [];

  const loadingElem = isLoading && <Spinner size={100} />;
  const emptyGalleryElem = !isLoading && !error && !galleryArray.length && (
    <p
      style={{
        fontSize: "25px",
        textAlign: "center",
        marginTop: "80px",
      }}>
      {emptyGalleryMessage}
    </p>
  );
  const galleryElem = !isLoading && !error && !!galleryArray.length && (
    <div className="gallery-slider">
      <div className="gallery-page">
        {galleryArray.map((animal) => (
          <AnimalCard
            className={!animal.photo ? "cardAnimal__imgCat" : ""}
            key={animal.id}
            name={animal.name}
            id={animal.id}
            hasPhoto={!!animal.photo}
            imageSrc={animal.photo || catImg}
          />
        ))}
      </div>
    </div>
  );

  return (
    <Box sx={{ position: "relative", minHeight: "100px" }}>
      {loadingElem}
      {emptyGalleryElem}
      {galleryElem}
    </Box>
  );
}
