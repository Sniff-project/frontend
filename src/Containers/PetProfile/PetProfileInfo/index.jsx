import { memo, useContext, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "@contexts";
import {
  editPetProfile,
  petProfile as getPetProfile,
} from "@core/Services/pets";
import { Container, Snackbar } from "@components/simple";
import { Message } from "@components/ordinary";
import {
  PetAuthorBlock,
  PetInfoBlock,
  PetLocationBlock,
} from "@components/smart/PetProfile";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import { petImage } from "./testPetImage";

const PetProfileInfo = () => {
  const theme = useTheme();
  const { petId } = useParams();
  const navigate = useNavigate();
  const { token, user, isAuthenticated } = useContext(AuthContext);
  const dispatch = useDispatch();
  const petProfileState = useSelector((state) => state.petProfile);
  const editPetProfileState = useSelector((state) => state.editPetProfile);

  useEffect(() => {
    if (!petProfileState.petProfile) {
      dispatch(
        getPetProfile({
          petId: petId,
          token: token || null,
        })
      );
    }
  }, [dispatch, petId, token, petProfileState.petProfile]);

  const onEditHandler = useCallback(
    (data) => {
      dispatch(
        editPetProfile({
          petId: petId,
          token: token || null,
          data: data,
        })
      );
    },
    [dispatch, petId, token]
  );

  console.log(editPetProfileState);

  const goToPetsGallery = useCallback(() => {
    navigate("/pets");
  }, [navigate]);

  const isPetOwner =
    (isAuthenticated &&
      +user?.sub === petProfileState.petProfile?.author?.id) ||
    false;

  const petInfo = !petProfileState.error ? (
    <PetInfoBlock
      petImage={petImage}
      margin={"3.75rem 0 0"}
      petProfile={petProfileState.petProfile}
      isLoading={petProfileState.isLoading}
      isPetOwner={isPetOwner}
      onEditHandler={onEditHandler}
    />
  ) : null;

  const petLocation = !petProfileState.error ? (
    <PetLocationBlock
      lat={petProfileState.petProfile?.latitude}
      lng={petProfileState.petProfile?.longitude}
      isLoading={petProfileState.isLoading}
    />
  ) : null;

  const petAuthor = !petProfileState.error ? (
    <PetAuthorBlock
      author={petProfileState.petProfile?.author}
      isLoading={petProfileState.isLoading}
    />
  ) : null;

  const error = petProfileState.error ? (
    <Message
      message={petProfileState.error?.message}
      messageType="error"
      sx={{ margin: "3.125rem auto" }}
    />
  ) : null;

  const editError = editPetProfileState.error ? (
    <Snackbar message={editPetProfileState.error?.message} severity="error" />
  ) : editPetProfileState.petProfile ? (
    <Snackbar
      message={editPetProfileState.petProfile?.message}
      severity="success"
    />
  ) : null;

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        sx={{ top: "3.125rem", left: "3.125rem" }}>
        <Tooltip title="В галерею">
          <IconButton onClick={goToPetsGallery}>
            <ArrowBackRoundedIcon color="black" />
          </IconButton>
        </Tooltip>
        <Typography variant="h1" sx={{ color: theme.palette.black.secondary }}>
          Профіль тваринки
        </Typography>
      </Grid>

      {error}
      {editError}
      <Grid container spacing="1.875rem">
        <Grid item xs={12}>
          {petInfo}
        </Grid>
        <Grid container item spacing="1.875rem">
          <Grid item xs={12} md={6} lg={8}>
            {petLocation}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {petAuthor}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(PetProfileInfo);
