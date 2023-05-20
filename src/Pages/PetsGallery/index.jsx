import React, { useContext, useEffect } from "react";
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

  console.log(gallery_Array);

  useEffect(() => {
    dispatch(petsGallery(token));
  }, [dispatch, user, token]);

  return (
    <div className="gallery">
      <div className="container2000">
        <div className="gallery-container">
          <Carousel
            animation="slide"
            autoPlay={false}
            navButtonsAlwaysVisible={true}
            slidesPerPage={12}
            itemPadding={[0, 10]}
          >
            {[...Array(Math.ceil(test_Array.length / 12))].map(
              (_, slideIndex) => (
                <div className="gallery-page" key={slideIndex}>
                  {test_Array
                    .slice(slideIndex * 12, (slideIndex + 1) * 12)
                    .map((animal, index) => (
                      <AnimalCard
                        key={index}
                        name={animal}
                        imageSrc={dogImg}
                      />
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
