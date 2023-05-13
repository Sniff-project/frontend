import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { PetAboutBlock } from "@components/ordinary/PetProfile";

const PetInfoBlock = ({
  petImage,
  name,
  type,
  age,
  breed,
  weight,
  margin = 0,
}) => {
  return (
    <SBox className="pet-profile__infoBlock" margin={margin}>
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
        </Grid>
      </Grid>
    </SBox>
  );
};

const SBox = styled(Box)`
  & {
    padding: 20px 10px;
    background: #ffffff;
    border-radius: 10px;
    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &:hover,
    &:active,
    &:focus {
      box-shadow: 0px 0px 20px #ffffff;
    }

    @media screen and (min-width: 600px) {
      padding: 42px 25px;
    }

    .pet-profile {
      &__image {
        width: 100%;
        height: 38.5vw;
        max-width: 534px;
        max-height: 616px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
  }
`;

export default PetInfoBlock;
