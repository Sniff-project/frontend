import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userFoundPets as getUserFoundPets,
  userLostPets as getUserLostPets,
} from "@core/Services/users";
import { GalleryBlock } from "@components/smart/Gallery";

import Pagination from "@mui/material/Pagination";

export default function PetsGallery({ userId, status }) {
  const [prevPage, setPrevPage] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const { petsList, isLoading, error } = useSelector((state) =>
    status === "FOUND" ? state.userFoundPets : state.userLostPets
  );

  useEffect(() => {
    if (
      prevPage !== currentSlideIndex ||
      (!petsList?.content?.length && userId)
    ) {
      if (status === "FOUND")
        dispatch(
          getUserFoundPets({
            userId: userId,
            page: currentSlideIndex,
          })
        );
      else if (status === "LOST")
        dispatch(
          getUserLostPets({
            userId: userId,
            page: currentSlideIndex,
          })
        );
    }
  }, [
    currentSlideIndex,
    dispatch,
    petsList?.content?.length,
    prevPage,
    status,
    userId,
  ]);

  const handleSlide = (_, value) => {
    setCurrentSlideIndex(--value);
    setPrevPage(currentSlideIndex);
  };

  return (
    <div className="gallery" style={{ minHeight: "800px" }}>
      <div className="container2000">
        <div className="gallery-container">
          <GalleryBlock
            gallery={petsList}
            isLoading={isLoading}
            error={error}
          />
        </div>
        {!error && !!petsList?.content?.length && (
          <Pagination
            style={{ margin: "30px" }}
            count={petsList?.totalPages}
            page={currentSlideIndex + 1}
            onChange={handleSlide}
          />
        )}
      </div>
    </div>
  );
}
