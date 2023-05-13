import { memo } from "react";
import { Container, Grid, IconButton, Tooltip } from "@mui/material";
import { PetInfoBlock, PetLocationBlock } from "@components/smart/PetProfile";
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
      <Grid container alignItems="center" sx={{ top: "50px", left: "50px" }}>
        <Tooltip title="В галерею">
          <IconButton onClick={null}>
            <ArrowBackRoundedIcon color="black" />
          </IconButton>
        </Tooltip>
        <h3 className="pet-profile__header">Профіль тваринки</h3>
      </Grid>
      <PetInfoBlock petImage={petImage} margin={"60px 0 30px"} />
      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <PetLocationBlock />
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(PetProfileInfo);
