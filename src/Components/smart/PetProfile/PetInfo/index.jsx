import { memo, useState, useCallback } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import useTheme from "@mui/system/useTheme";
import { StyledBox } from "@components/simple";

import {
  PetAboutBlock,
  PetHistoryBlock,
  PetPhotosCarousel,
} from "@components/ordinary/PetProfile";

import { EditButton, SaveButton } from "@components/ui";
import { ImageBlock } from "./styles";
import dayjs from "dayjs";

const PetInfoBlock = ({
  petProfile,
  petPhotos,
  isLoading,
  isImageLoading,
  isPetOwner,
  toggleUploadImage,
  onSubmit,
  showSnackbar,
  margin = 0,
}) => {
  const { name, gender, foundOrLostDate, status, description } =
    petProfile ?? {};

  const theme = useTheme();

  const [isEditAbout, setIsEditAbout] = useState(false);
  const [isEditDescr, setIsEditDescr] = useState(false);

  const onEditAboutHandler = useCallback(() => {
    setIsEditAbout((prev) => !prev);
  }, []);

  const onEditDescrHandler = useCallback(() => {
    setIsEditDescr((prev) => !prev);
  }, []);

  const onSaveAboutHandler = useCallback(
    (formData) => {
      // on click btn save (submit form)
      const data = {
        ...formData,
        name: formData.name.replace(/\s{2,}/g, " ").trim(),
        foundOrLostDate: dayjs(formData.foundOrLostDate.$d).format(
          "YYYY-MM-DD"
        ),
      };
      if (
        name !== data.name ||
        gender !== data.gender ||
        status !== data.status ||
        foundOrLostDate !== data.foundOrLostDate
      ) {
        onSubmit(data);
        showSnackbar();
      }
      setIsEditAbout((prev) => !prev);
    },
    [foundOrLostDate, gender, name, onSubmit, showSnackbar, status]
  );

  const onSaveDescrHandler = useCallback(
    (formData) => {
      // on click btn save (submit form)
      const data = {
        description: formData.description.replace(/\s{2,}/g, " ").trim(),
      };
      if (description !== data.description) {
        onSubmit(data);
        showSnackbar();
      }
      setIsEditDescr((prev) => !prev);
    },
    [description, onSubmit, showSnackbar]
  );

  const buttonAbout = !isEditAbout ? (
    <EditButton onClick={onEditAboutHandler} />
  ) : (
    <SaveButton type="submit" color="success" />
  );

  const buttonDescr = !isEditDescr ? (
    <EditButton onClick={onEditDescrHandler} />
  ) : (
    <SaveButton type="submit" color="success" />
  );

  return (
    <StyledBox
      className="pet-profile__infoBlock"
      margin={margin}
      padding="2.625rem 1.5625rem">
      <Grid container rowSpacing="1.25rem" columnSpacing="5.3125rem">
        <Grid container item justifyContent="center" xs={12} md={5}>
          <ImageBlock item>
            {!isLoading && !isImageLoading ? (
              petPhotos?.length > 0 ? (
                <PetPhotosCarousel
                  petPhotos={petPhotos}
                  onClick={toggleUploadImage}
                />
              ) : (
                <Box
                  onClick={toggleUploadImage}
                  sx={{
                    background: theme.palette.grey.secondary,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                />
              )
            ) : (
              <Skeleton variant="rounded" width="100%" height="100%" />
            )}
          </ImageBlock>
        </Grid>
        <Grid item sx={{ minWidth: "300px" }} xs={12} md={7}>
          <PetAboutBlock
            name={name}
            gender={gender}
            foundOrLostDate={foundOrLostDate}
            status={status}
            isLoading={isLoading}
            isPetOwner={isPetOwner}
            button={buttonAbout}
            isEdit={isEditAbout}
            onSave={onSaveAboutHandler}
          />
          <PetHistoryBlock
            description={description}
            isLoading={isLoading}
            isPetOwner={isPetOwner}
            button={buttonDescr}
            isEdit={isEditDescr}
            onSave={onSaveDescrHandler}
            margin={"6.25rem 0 0"}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default memo(PetInfoBlock);
