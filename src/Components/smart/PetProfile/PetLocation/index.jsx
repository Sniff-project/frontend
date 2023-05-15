import { memo } from "react";
import { Skeleton } from "@mui/material";
import { StyledBox } from "@components/simple";
import { Map } from "@components/ordinary";

const PetLocationBlock = ({ lat, lng, isLoading, margin = 0 }) => {
  return (
    <StyledBox
      className="pet-profile__locationBlock"
      margin={margin}
      padding="1rem">
      {!isLoading ? (
        <Map
          lat={lat}
          lng={lng}
          zoom={12}
          style={{ height: "31.25rem", borderRadius: "10px" }}
        />
      ) : (
        <Skeleton variant="rounded" height="31.25rem" />
      )}
    </StyledBox>
  );
};

export default memo(PetLocationBlock);
