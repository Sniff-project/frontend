import { memo } from "react";
import { Grid, Skeleton } from "@mui/material";
import { StyledBox } from "@components/simple";
import { styled } from "@mui/system";

import {
  PetAboutBlock,
  PetHistoryBlock,
} from "@components/ordinary/PetProfile";

const PetInfoBlock = ({
  petImage,
  petProfile,
  isLoading,
  isPetOwner,
  onEditHandler,
  margin = 0,
}) => {
  const {
    name,
    author: { city } = "",
    gender,
    foundOrLostDate,
    status,
    description,
  } = petProfile ?? {};

  return (
    <StyledBox
      className="pet-profile__infoBlock"
      margin={margin}
      padding="2.625rem 1.5625rem">
      <Grid container rowSpacing="1.25rem" columnSpacing="5.3125rem">
        <Grid container item justifyContent="center" xs={12} md={5}>
          <ImageBlock item>
            {!isLoading ? (
              <img
                className="pet-profile__image"
                src={petImage}
                width="300"
                height="300"
                alt="Фото тваринки"
                loading="lazy"
              />
            ) : (
              <Skeleton variant="rounded" width="100%" height="100%" />
            )}
          </ImageBlock>
        </Grid>
        <Grid item sx={{ minWidth: "300px" }} xs={12} md={7}>
          <PetAboutBlock
            name={name}
            city={city}
            gender={gender}
            foundOrLostDate={foundOrLostDate}
            status={status}
            isLoading={isLoading}
            isPetOwner={isPetOwner}
            onEditHandler={onEditHandler}
          />
          <PetHistoryBlock
            description={description}
            isLoading={isLoading}
            isPetOwner={isPetOwner}
            onEditHandler={onEditHandler}
            margin={"6.25rem 0 0"}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

const ImageBlock = styled(Grid)`
  width: 20rem;
  height: 20rem;

  @media screen and (min-width: 480px) {
    width: 28.125rem;
    height: 28.125rem;
  }
  @media screen and (min-width: 600px) {
    width: 31.25rem;
    height: 31.25rem;
  }
  @media screen and (min-width: 1600px) {
    width: 33.375rem;
    height: 38.5rem;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export default memo(PetInfoBlock);
