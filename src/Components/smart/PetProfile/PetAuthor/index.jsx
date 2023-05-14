import { memo } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { Link } from "@components/ui";
import { StyledBox } from "@components/simple";

import defaultProfileIcon from "@assets/Icons/profile/profile50x50.png";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";

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

const PetAuthorBlock = ({ author, margin = 0 }) => {
  const { firstname, lastname, phone = null, email = null } = author;
  const maskedPhone = phone
    ? `+${phone.slice(1, 4)} (${phone.slice(4, 6)}) ${phone.slice(
        6,
        9
      )}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`
    : null;

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
              <Typography variant="p">
                {firstname} {lastname}
              </Typography>
            </Grid>
          </Row>
        </Grid>
        <Grid container item rowSpacing="1.25rem">
          {maskedPhone && (
            <Row columnSpacing="0.75rem">
              <Grid item>
                <PhoneRoundedIcon />
              </Grid>

              <Grid item>
                <Typography variant="p">{maskedPhone}</Typography>
              </Grid>
            </Row>
          )}
          {email && (
            <Row columnSpacing="0.75rem">
              <Grid item>
                <EmailRoundedIcon />
              </Grid>

              <Grid item>
                <Typography variant="p">{email}</Typography>
              </Grid>
            </Row>
          )}
        </Grid>
        <Grid container item justifyContent="center">
          <Grid item>
            <Link href="#" sx={{ textDecoration: "none" }}>
              Побачити усі оголошення
              <ReplyRoundedIcon sx={{ transform: "scaleX(-1)" }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default memo(PetAuthorBlock);
