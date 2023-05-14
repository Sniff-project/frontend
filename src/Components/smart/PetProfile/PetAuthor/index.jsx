import { memo } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { Link } from "@components/ui";
import { StyledBox } from "@components/simple";

import defaultProfileIcon from "@assets/Icons/profile/profile50x50.png";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Row = ({ children, columnSpacing = 0 }) => {
  return (
    <Grid
      container
      item
      direction="row"
      columnSpacing={columnSpacing}
      alignItems="center">
      {children}
    </Grid>
  );
};

const PetAuthorBlock = ({ margin = 0 }) => {
  const phone = "380999999999";
  const maskedPhone = `+${phone.slice(0, 3)} (${phone.slice(
    3,
    5
  )}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
  const email = "qwerty123@gmail.com";

  return (
    <StyledBox
      className="pet-profile__infoBlock"
      margin={margin}
      padding="2.5rem">
      <Grid container rowSpacing="3.125rem">
        <Grid container item>
          <Row columnSpacing="1.25rem">
            <Grid item>
              <Avatar src={defaultProfileIcon} />
            </Grid>
            <Grid item>
              <Typography variant="p">Євгеній Сальников</Typography>
            </Grid>
          </Row>
        </Grid>
        <Grid container item rowSpacing="1.25rem">
          <Row columnSpacing="0.75rem">
            <Grid item>
              <PhoneRoundedIcon />
            </Grid>
            <Grid item>
              <Typography variant="p">{maskedPhone}</Typography>
            </Grid>
          </Row>
          <Row columnSpacing="0.75rem">
            <Grid item>
              <EmailRoundedIcon />
            </Grid>
            <Grid item>
              <Typography variant="p">{email}</Typography>
            </Grid>
          </Row>
        </Grid>
        <Grid container item justifyContent="center">
          <Grid item>
            <Link href="#">Побачити усі оголошення</Link>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default memo(PetAuthorBlock);
