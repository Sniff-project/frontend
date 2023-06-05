import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userFoundPets as getUserFoundPets,
  userLostPets as getUserLostPets,
} from "@core/Services/users";
import { useAuth } from "@core/Hooks";
import { GalleryBlock } from "@components/smart/Gallery";

import Pagination from "@mui/material/Pagination";

export default function PetsGallery({ status }) {
  const [prevPage, setPrevPage] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { user, token } = useAuth();
  const dispatch = useDispatch();
  const { petsList, isLoading, error } = useSelector((state) =>
    status === "FOUND" ? state.userFoundPets : state.userLostPets
  );

  useEffect(() => {
    if (
      prevPage !== currentSlideIndex ||
      (!petsList?.content?.length && user?.sub && token)
    ) {
      if (status === "FOUND")
        dispatch(
          getUserFoundPets({
            userId: user.sub,
            token: token,
            page: currentSlideIndex,
          })
        );
      else if (status === "LOST")
        dispatch(
          getUserLostPets({
            userId: user.sub,
            token: token,
            page: currentSlideIndex,
          })
        );
    }
  }, [
    dispatch,
    user.sub,
    token,
    petsList?.content?.length,
    prevPage,
    currentSlideIndex,
    status,
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
