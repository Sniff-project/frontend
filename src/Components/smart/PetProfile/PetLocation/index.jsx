import { memo } from "react";
import { StyledBox } from "@components/simple";
import { Map } from "@components/ordinary";

const PetLocationBlock = ({ lat, lng, margin = 0 }) => {
  return (
    <StyledBox
      className="pet-profile__locationBlock"
      margin={margin}
      padding="1rem">
      <Map
        lat={lat}
        lng={lng}
        zoom={12}
        style={{ height: "31.25rem", borderRadius: "10px" }}
      />
    </StyledBox>
  );
};

export default memo(PetLocationBlock);
