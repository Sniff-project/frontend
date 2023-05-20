import { useCallback, useContext, useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Alert,
  IconButton,
  Grid,
  Snackbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { AuthContext } from "@contexts";
import { editPetProfile, getPetProfile } from "@core/Services/pets";

import { Container } from "@components/simple";
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

  const dispatch = useDispatch();
  const { token, user, isAuthenticated } = useContext(AuthContext);

  const petProfileState = useSelector((state) => state.petProfile);
  const editPetProfileState = useSelector((state) => state.editPetProfile);

  const [isPetOwner, setIsPetOwner] = useState(false);
  const [petProfile, setPetProfile] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const showSnackbar = () => {
    setSnackbarOpen(true);
  };

  useEffect(() => {
    if (!petProfileState.petProfile) {
      dispatch(getPetProfile({ petId: petId, token: token || null }));
    } else if (editPetProfileState.petProfile) {
      setPetProfile(editPetProfileState.petProfile);
    } else if (petProfileState.petProfile) {
      setPetProfile(petProfileState.petProfile);
    }
  }, [
    dispatch,
    petId,
    token,
    petProfileState.petProfile,
    editPetProfileState.petProfile,
  ]);

  useEffect(() => {
    setIsPetOwner(
      isAuthenticated && +user?.sub === petProfile?.author?.id ? true : false
    );
  }, [isAuthenticated, petProfile?.author?.id, user?.sub]);

  const onEditHandler = useCallback(
    (data) => {
      if (isAuthenticated) {
        dispatch(
          editPetProfile({
            petId: petId,
            token: token || null,
            data: {
              status: petProfileState.petProfile?.status,
              name: petProfileState.petProfile?.name,
              latitude: petProfileState.petProfile?.latitude,
              longitude: petProfileState.petProfile?.longitude,
              gender: petProfileState.petProfile?.gender,
              foundOrLostDate: petProfileState.petProfile?.foundOrLostDate,
              description: petProfileState.petProfile?.description,
              ...data,
            },
          })
        );
      }
    },
    [
      dispatch,
      petId,
      petProfileState.petProfile?.description,
      petProfileState.petProfile?.foundOrLostDate,
      petProfileState.petProfile?.gender,
      petProfileState.petProfile?.latitude,
      petProfileState.petProfile?.longitude,
      petProfileState.petProfile?.name,
      petProfileState.petProfile?.status,
      token,
      isAuthenticated,
    ]
  );

  const goToPetsGallery = useCallback(() => {
    navigate("/pets");
  }, [navigate]);

  const petInfo = !petProfileState.error ? (
    <PetInfoBlock
      petImage={petImage}
      margin={"3.75rem 0 0"}
      petProfile={petProfile}
      isLoading={petProfileState.isLoading}
      isPetOwner={isPetOwner}
      onEditHandler={onEditHandler}
      showSnackbar={showSnackbar}
    />
  ) : null;
  const petLocation = !petProfileState.error ? (
    <PetLocationBlock
      lat={petProfile?.latitude}
      lng={petProfile?.longitude}
      isLoading={petProfileState.isLoading}
    />
  ) : null;
  const petAuthor = !petProfileState.error ? (
    <PetAuthorBlock
      author={petProfile?.author}
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
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={5000}
      onClose={handleCloseSnackbar}>
      <Alert
        severity="error"
        onClose={handleCloseSnackbar}
        sx={{ width: "100%" }}>
        {editPetProfileState.error?.message}
      </Alert>
    </Snackbar>
  ) : editPetProfileState.petProfile ? (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={5000}
      onClose={handleCloseSnackbar}>
      <Alert
        severity="success"
        onClose={handleCloseSnackbar}
        sx={{ width: "100%" }}>
        {editPetProfileState.petProfile?.message}
      </Alert>
    </Snackbar>
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
