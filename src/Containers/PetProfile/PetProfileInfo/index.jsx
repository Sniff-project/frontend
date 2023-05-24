import { useCallback, useEffect, useState, memo } from "react";
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

import { useAuth } from "@core/Hooks";
import {
  editPetProfile,
  getPetProfile,
  uploadPetPhotos,
} from "@core/Services/pets";

import { Container } from "@components/simple";
import { Message } from "@components/ordinary";
import {
  PetAuthorBlock,
  PetInfoBlock,
  PetLocationBlock,
} from "@components/smart/PetProfile";
import ImageUploadPopup from "@components/smart/ImageUploadPopup";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const PetProfileInfo = () => {
  const theme = useTheme();
  const { petId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { token, user, isAuthenticated } = useAuth();

  const petProfileState = useSelector((state) => state.petProfile);
  const editPetProfileState = useSelector((state) => state.editPetProfile);
  const newPetPhotos = useSelector((state) => state.uploadPetPhotos);

  const [isOpenUploadImage, setOpenUploadImage] = useState(false);
  const [isPetOwner, setIsPetOwner] = useState(false);
  const [petProfile, setPetProfile] = useState(null);
  const [petPhotos, setPetPhotos] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  const toggleUploadImage = useCallback(() => {
    setOpenUploadImage((prev) => !prev);
  }, []);

  const handleCloseSnackbar = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  const showSnackbar = useCallback(() => {
    setSnackbarOpen(true);
  }, []);

  useEffect(() => {
    if (!petProfileState.petProfile) {
      dispatch(getPetProfile({ petId: petId, token: token || null }));
    } else if (editPetProfileState.petProfile) {
      setPetProfile(editPetProfileState.petProfile);
    } else if (petProfileState.petProfile) {
      setPetProfile(petProfileState.petProfile);
      setPetPhotos(petProfileState.petProfile.photos);
    }
  }, [
    dispatch,
    petId,
    token,
    petProfileState.petProfile,
    editPetProfileState.petProfile,
  ]);

  useEffect(() => {
    if (newPetPhotos.photos) setPetPhotos(newPetPhotos.photos.urls);
  }, [newPetPhotos.photos]);

  useEffect(() => {
    setIsPetOwner(
      isAuthenticated && +user?.sub === petProfile?.author?.id ? true : false
    );
  }, [isAuthenticated, petProfile?.author?.id, user?.sub]);

  const onSubmitHandler = useCallback(
    (data) => {
      if (isAuthenticated) {
        dispatch(
          editPetProfile({
            petId: petId,
            token: token,
            data: {
              ...petProfile,
              ...data,
            },
          })
        );
      }
    },
    [isAuthenticated, dispatch, petId, token, petProfile]
  );

  const uploadImages = useCallback(
    (photos) => {
      if (isAuthenticated && photos.length > 0 && photos !== petPhotos) {
        dispatch(
          uploadPetPhotos({
            petId: petId,
            token: token,
            data: {
              images: photos,
            },
          })
        );
      }
    },
    [dispatch, isAuthenticated, petId, petPhotos, token]
  );

  const goToPetsGallery = useCallback(() => {
    navigate("/pets");
  }, [navigate]);

  const petInfo = !petProfileState.error ? (
    <PetInfoBlock
      petProfile={petProfile}
      petPhotos={petPhotos}
      isImageLoading={newPetPhotos.isLoading}
      isLoading={petProfileState.isLoading}
      isPetOwner={isPetOwner}
      toggleUploadImage={toggleUploadImage}
      onSubmit={onSubmitHandler}
      showSnackbar={showSnackbar}
      margin={"3.75rem 0 0"}
    />
  ) : null;
  const petLocation = !petProfileState.error ? (
    <PetLocationBlock
      petProfile={petProfile}
      isLoading={petProfileState.isLoading}
      isPetOwner={isPetOwner}
      onSubmit={onSubmitHandler}
      showSnackbar={showSnackbar}
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
      {isPetOwner && (
        <ImageUploadPopup
          open={isOpenUploadImage}
          togglePopup={toggleUploadImage}
          onSave={uploadImages}
        />
      )}
    </Container>
  );
};

export default memo(PetProfileInfo);
