import { memo } from "react";
import { StyledBox } from "@components/simple";
import { Map } from "@components/ordinary";

const PetLocationBlock = ({ margin = 0 }) => {
  const handleMarkerPositionChanged = (position) => {
    // Do something with the new position
  };

  return (
    <StyledBox
      className="pet-profile__locationBlock"
      margin={margin}
      padding="1rem">
      <Map
        lat={49.979488}
        lng={36.202658}
        zoom={12}
        onMarkerPositionChanged={handleMarkerPositionChanged}
        style={{ height: "31.25rem", borderRadius: "10px" }}
      />
    </StyledBox>
  );
};

export default memo(PetLocationBlock);
