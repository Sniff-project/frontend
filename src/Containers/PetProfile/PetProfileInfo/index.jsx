import { memo, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { AuthContext } from "@contexts";
import { petProfile as getPetProfile } from "@core/Services/pets";
import { Container } from "@components/simple";
import {
  PetAuthorBlock,
  PetInfoBlock,
  PetLocationBlock,
} from "@components/smart/PetProfile";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";

import { petImage } from "./testPetImage";

const PetProfileInfo = () => {
  const { petId } = useParams();
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();
  const petProfileState = useSelector((state) => state.petProfile);

  useEffect(() => {
    if (petId && !petProfileState.petProfile) {
      dispatch(
        getPetProfile({
          petId: petId,
          token: token || null,
        })
      );
    }
  }, [dispatch, petId, token, petProfileState.petProfile]);

  console.log(petId, petProfileState);

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        sx={{ top: "3.125rem", left: "3.125rem" }}>
        <Tooltip title="В галерею">
          <IconButton onClick={null}>
            <ArrowBackRoundedIcon color="black" />
          </IconButton>
        </Tooltip>
        <h3 className="pet-profile__header">Профіль тваринки</h3>
      </Grid>

      <Grid container spacing="1.875rem">
        <Grid item xs={12}>
          {petProfileState.petProfile && (
            <PetInfoBlock
              petImage={petImage}
              margin={"3.75rem 0 0"}
              petProfile={petProfileState.petProfile}
            />
          )}
        </Grid>
        <Grid container item spacing="1.875rem">
          <Grid item xs={12} md={6} lg={8}>
            {petProfileState.petProfile && (
              <PetLocationBlock
                lat={petProfileState.petProfile?.latitude}
                lng={petProfileState.petProfile?.longitude}
              />
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            {petProfileState.petProfile && (
              <PetAuthorBlock author={petProfileState.petProfile?.author} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(PetProfileInfo);
