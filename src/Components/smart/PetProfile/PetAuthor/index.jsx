import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Grid, Skeleton, Tooltip, Typography } from "@mui/material";
import { Link, TButton } from "@components/ui";
import { StyledBox } from "@components/simple";

import defaultProfileIcon from "@assets/Icons/profile/profile50x50.png";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";

const MAX_NAME_LENGTH = 20;
const signInToViewText = "Увійти в аккаунт, щоб побачити";

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

const PetAuthorBlock = ({ author, isLoading, margin = 0 }) => {
  const {
    firstname,
    lastname,
    phone = "+380XXXXXXXXX",
    email = "XXXX@XXX.XX",
  } = author;

  const navigate = useNavigate();

  const signIn = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  const fullName =
    firstname.length + lastname.length <= MAX_NAME_LENGTH
      ? `${firstname} ${lastname}`
      : `${(firstname + " " + lastname).slice(0, MAX_NAME_LENGTH)}...`;
  const maskedPhone = phone
    ? `+${phone.slice(1, 4)} (${phone.slice(4, 6)}) ${phone.slice(
        6,
        9
      )}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`
    : null;

  const avatarItem = !isLoading ? (
    <Avatar
      src={defaultProfileIcon}
      sx={{ width: "3.125rem", height: "3.125rem" }}
    />
  ) : (
    <Skeleton variant="circular" width="3.125rem" height="3.125rem" />
  );

  const nameItem = !isLoading ? (
    <Typography variant="p">{fullName}</Typography>
  ) : (
    <Skeleton variant="rounded" height="2rem" />
  );

  const phoneItem = !isLoading ? (
    !phone.includes("X") ? (
      <Typography variant="p">{maskedPhone}</Typography>
    ) : (
      <Tooltip title={signInToViewText} placement="top">
        <TButton onClick={signIn}>{maskedPhone}</TButton>
      </Tooltip>
    )
  ) : (
    <Skeleton variant="rounded" height="2rem" />
  );

  const emailItem = !isLoading ? (
    !email.includes("X") ? (
      <Typography variant="p">{email}</Typography>
    ) : (
      <Tooltip title={signInToViewText} placement="bottom">
        <TButton onClick={signIn}>{email}</TButton>
      </Tooltip>
    )
  ) : (
    <Skeleton variant="rounded" height="2rem" />
  );

  return (
    <StyledBox
      className="pet-profile__infoBlock"
      margin={margin}
      padding="2.5rem">
      <Grid container rowSpacing="3.125rem">
        <Grid container item>
          <Row columnSpacing="1.25rem">
            <Grid item>{avatarItem}</Grid>
            <Grid item width="75%">
              {nameItem}
            </Grid>
          </Row>
        </Grid>
        <Grid container item rowSpacing="1.25rem">
          {/* phone */}
          <Row columnSpacing="0.75rem" alignItems="center">
            <Grid item>
              <PhoneRoundedIcon />
            </Grid>

            <Grid item width="60%">
              {phoneItem}
            </Grid>
          </Row>

          {/* email */}
          <Row columnSpacing="0.75rem" alignItems="center">
            <Grid item>
              <EmailRoundedIcon />
            </Grid>
            <Grid item width="60%">
              {emailItem}
            </Grid>
          </Row>
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
