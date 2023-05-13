import { Box, Container, Grid, IconButton } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";

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
        <IconButton onClick={null}>
          <ArrowBackRoundedIcon color="black" />
        </IconButton>
        <h3 className="pet-profile__header">Профіль тваринки</h3>
      </Grid>
      <Box className="pet-profile__infoBlock">
        <p>
          <strong>Type:</strong> {type}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Breed:</strong> {breed}
        </p>
        <p>
          <strong>Weight:</strong> {weight}
        </p>
      </Box>
    </Container>
  );
};

export default PetProfileInfo;
