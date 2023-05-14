import { memo } from "react";
import { Container, Grid, IconButton, Tooltip } from "@mui/material";
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
    <Container
      sx={{
        margin: 0,
        padding: 2,
        maxWidth: "100%",
        "@media screen and (min-width: 600px)": {
          padding: 5,
          maxWidth: "100%",
        },
        "@media screen and (min-width: 960px)": {
          padding: 10,
          maxWidth: "100%",
        },
      }}>
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
        <Grid item xs={12} md={6} lg={8}>
          <PetLocationBlock />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PetAuthorBlock />
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(PetProfileInfo);
