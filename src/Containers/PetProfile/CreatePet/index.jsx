import React, { memo, useMemo, useState, useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@core/Hooks";
import {
  createPetProfile,
  createPetProfileResetState,
  uploadPetPhotos,
  uploadPetPhotosResetState,
} from "@core/Services/pets";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { default as InfoBlock } from "@components/ordinary/PetProfile/AboutMe/EditBlock";
import { default as DescriptionBlock } from "@components/ordinary/PetProfile/MyHistory/EditDescription";
import { default as Map } from "@components/ordinary/Map";
import { Message } from "@components/ordinary/Message";
import { default as UploadBox } from "@components/smart/ImageUploadPopup/UploadBox";
import { Container, Spinner } from "@components/simple";
import { toTitleCase, dateToString } from "@utils/string";

const steps = ["Інформація", "Фото", "Де знайшли"];

const CreatePet = ({ params }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [petData, setPetData] = useState(null);
  const [photos, setPhotos] = useState([]);
  const methods = useForm({ mode: "all" });

  const dispatch = useDispatch();
  const { token, isAuthenticated } = useAuth();
  const createPetProfileState = useSelector((state) => state.createPetProfile);
  const uploadedPetPhotos = useSelector((state) => state.uploadPetPhotos);

  useEffect(() => {
    if (!petData?.status) {
      setPetData((prev) => ({
        ...prev,
        status: params.status === "found" ? "Знайдено" : "Загублено",
      }));
    }
  }, [petData?.status, params?.status]);

  const updatePhotos = useCallback((photos) => {
    if (photos.length > 0) setPhotos(photos);
  }, []);

  const onChangeMapMarker = useCallback((position) => {
    setPetData((prev) => ({
      ...prev,
      latitude: position.lat,
      longitude: position.lng,
    }));
  }, []);

  const stepsContent = useMemo(() => {
    if (petData)
      return [
        <Box sx={{ maxWidth: "600px", margin: "3.125rem auto" }}>
          <InfoBlock
            name={petData?.name}
            gender={petData?.gender}
            foundOrLostDate={petData?.foundOrLostDate}
            status={petData?.status}
          />
          <DescriptionBlock
            description={petData?.description}
            sx={{ marginTop: "16px" }}
          />
        </Box>,
        <Box sx={{ margin: "3.125rem auto" }}>
          <UploadBox inpFiles={photos} onChange={updatePhotos} />
        </Box>,
        <Box sx={{ margin: "3.125rem auto" }}>
          <Map
            {...(petData?.longitude &&
              petData?.latitude && {
                position: {
                  lat: petData.latitude,
                  lng: petData.longitude,
                },
              })}
            draggable={true}
            onPosChange={onChangeMapMarker}
            text={`Мене ${
              petData?.status === "Знайдено" ? "знайшли" : "загубили"
            } тут`}
            style={{ height: "31.25rem", borderRadius: "10px" }}
          />
        </Box>,
      ];
  }, [onChangeMapMarker, petData, photos, updatePhotos]);

  const isStepOptional = useCallback((step) => {
    return step === 1;
  }, []);

  const isStepSkipped = useCallback(
    (step) => {
      return skipped.has(step);
    },
    [skipped]
  );

  const handleNext = useCallback(() => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }, [activeStep, isStepSkipped, skipped]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleSkip = useCallback(() => {
    if (!isStepOptional(activeStep)) {
      throw new Error("Цей крок не можна пропустити");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }, [activeStep, isStepOptional]);

  const handleReset = useCallback(() => {
    setActiveStep(0);
    dispatch(createPetProfileResetState());
    dispatch(uploadPetPhotosResetState());
    setSkipped(new Set());
    setPetData(null);
    setPhotos([]);
    methods.reset();
  }, [dispatch, methods]);

  const onFormSubmitHandler = useCallback(
    (formData) => {
      const data = {
        ...formData,
        name: toTitleCase(formData.name),
        foundOrLostDate: dateToString(formData.foundOrLostDate),
        description: formData.description.replace(/\s{2,}/g, " ").trim(),
      };
      setPetData((prev) => ({ ...prev, ...data }));
      handleNext();
    },
    [handleNext]
  );

  useEffect(() => {
    if (activeStep === steps.length && isAuthenticated) {
      dispatch(createPetProfile({ token: token || null, data: petData }));
    }
  }, [activeStep, dispatch, isAuthenticated, petData, token]);

  useEffect(() => {
    if (
      activeStep === steps.length &&
      !isStepSkipped(1) &&
      photos.length > 0 &&
      createPetProfileState.petProfile &&
      isAuthenticated
    ) {
      dispatch(
        uploadPetPhotos({
          petId: createPetProfileState.petProfile.id,
          token: token || null,
          data: { images: photos },
        })
      );
    }
  }, [
    activeStep,
    createPetProfileState.petProfile,
    dispatch,
    isAuthenticated,
    isStepSkipped,
    petData,
    photos,
    token,
  ]);

  const resultMessage = useMemo(
    () =>
      createPetProfileState.isLoading || uploadedPetPhotos.isLoading ? (
        <Spinner size={100} />
      ) : createPetProfileState.error ? (
        <Message
          message={createPetProfileState.error?.message}
          messageType="error"
          mb={8}
          sx={{
            margin: "auto",
          }}
        />
      ) : uploadedPetPhotos.error ? (
        <Message
          message={uploadedPetPhotos.error?.message}
          messageType="error"
          mb={8}
          sx={{
            margin: "auto",
          }}
        />
      ) : createPetProfileState.petProfile && !uploadedPetPhotos.error ? (
        <Message
          message={createPetProfileState.petProfile?.message}
          messageType="success"
          mb={8}
          sx={{
            margin: "auto",
          }}
        />
      ) : (
        <Message
          message={"Щось пішло не так!"}
          messageType="error"
          mb={8}
          sx={{
            margin: "auto",
          }}
        />
      ),
    [
      createPetProfileState.error,
      createPetProfileState.isLoading,
      createPetProfileState.petProfile,
      uploadedPetPhotos.error,
      uploadedPetPhotos.isLoading,
    ]
  );

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Необов'язково</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            rowSpacing="1rem"
            sx={{
              margin: "3.125rem auto",
            }}>
            <Grid item marginBottom="2rem">
              {resultMessage}
            </Grid>
            {createPetProfileState.petProfile && (
              <Grid item>
                <Button href={`/pets/${createPetProfileState.petProfile.id}`}>
                  Подивитись профіль
                </Button>
              </Grid>
            )}
            <Grid item>
              <Button onClick={handleReset}>Ще раз</Button>
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onFormSubmitHandler)}>
            {stepsContent && stepsContent[activeStep]}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}>
                Назад
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Пропустити
                </Button>
              )}

              <Button
                type="submit"
                {...(isStepOptional(activeStep) &&
                  photos.length < 1 && { disabled: true })}>
                {activeStep === steps.length - 1 ? "Завершити" : "Далі"}
              </Button>
            </Box>
          </form>
        </FormProvider>
      )}
    </Container>
  );
};

export default memo(CreatePet);
