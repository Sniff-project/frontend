import { memo } from "react";
import { Grid } from "@mui/material";
import { StyledBox } from "@components/simple";

import {
  PetAboutBlock,
  PetHistoryBlock,
} from "@components/ordinary/PetProfile";

const PetInfoBlock = ({ petImage, margin = 0 }) => {
  return (
    <StyledBox
      className="pet-profile__infoBlock"
      margin={margin}
      padding="2.625rem 1.5625rem">
      <Grid container rowSpacing={4} columnSpacing="85px" wrap="wrap">
        <Grid item sx={{ width: "33.375%", minWidth: "300px" }}>
          <img
            className="pet-profile__image"
            src={petImage}
            width="300"
            height="300"
            alt="Фото тваринки"
          />
        </Grid>
        <Grid item sx={{ width: "66.625%", minWidth: "300px" }}>
          <PetAboutBlock />
          <PetHistoryBlock margin={"6.25rem 0 0"} />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default memo(PetInfoBlock);
