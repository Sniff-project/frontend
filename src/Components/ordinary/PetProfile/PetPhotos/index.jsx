import Avatar from "@mui/material/Avatar";
import Carousel from "react-material-ui-carousel";
import { carouselStyles } from "./styles";

const PetPhotosCarousel = ({
  petPhotos,
  onClick,
  autoPlay = false,
  height = "100%",
  alt = "Фото тваринки",
  sx = carouselStyles,
  ...props
}) => {
  return (
    <Carousel autoPlay={autoPlay} height={height} sx={sx} {...props}>
      {petPhotos.map((photo) => (
        <Avatar
          key={photo}
          src={photo}
          width="300"
          height="300"
          alt={alt}
          onClick={onClick}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
      ))}
    </Carousel>
  );
};

export default PetPhotosCarousel;
