import { memo } from "react";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { Container } from "@components/simple";
import {
  PetAuthorBlock,
  PetInfoBlock,
  PetLocationBlock,
} from "@components/smart/PetProfile";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";

import { petImage } from "./testPetImage";

const PetProfileInfo = ({ name, type, age, breed, weight }) => {
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
          <PetInfoBlock petImage={petImage} margin={"3.75rem 0 0"} />
        </Grid>
        <Grid container item spacing="1.875rem">
          <Grid item xs={12} md={6} lg={8}>
            <PetLocationBlock />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <PetAuthorBlock />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(PetProfileInfo);
