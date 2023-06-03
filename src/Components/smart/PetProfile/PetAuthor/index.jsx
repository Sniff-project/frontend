import { memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Grid, Skeleton, Tooltip, Typography } from "@mui/material";
import { Link, TButton } from "@components/ui";
import { StyledBox } from "@components/simple";
import { useAuth } from "@core/Hooks/useAuth";

import defaultProfileIcon from "@assets/Icons/profile/profile50x50.png";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";

const MAX_NAME_LENGTH = 20;
const signInToViewText = "Увійти в аккаунт, щоб побачити";
const viewProfile = "Побачити профіль";

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
    id: authorId,
    firstname,
    lastname,
    phone = "+380XXXXXXXXX",
    email = "XXXX@XXX.XX",
  } = author ?? {};

  const navigate = useNavigate();
  const { user, signInOpenHandler } = useAuth();

  const signIn = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  const fullName = useMemo(
    () =>
      firstname?.length + lastname?.length <= MAX_NAME_LENGTH
        ? `${firstname} ${lastname}`
        : `${(firstname + " " + lastname).slice(0, MAX_NAME_LENGTH)}...`,
    [firstname, lastname]
  );
  const maskedPhone = useMemo(
    () =>
      phone
        ? `+${phone.slice(1, 4)} (${phone.slice(4, 6)}) ${phone.slice(
            6,
            9
          )}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`
        : null,
    [phone]
  );

  const avatarItem = useMemo(
    () =>
      !isLoading ? (
        <Tooltip title={viewProfile} placement="top">
          <Link
            href={authorId === +user?.sub ? "/profile" : `/users/${authorId}`}
            sx={{
              borderRadius: "100%",
              padding: "0.5rem",
              marginLeft: "-0.75rem",
            }}>
            <Avatar
              src={defaultProfileIcon}
              sx={{ width: "3.125rem", height: "3.125rem" }}
            />
          </Link>
        </Tooltip>
      ) : (
        <Skeleton variant="circular" width="3.125rem" height="3.125rem" />
      ),
    [authorId, isLoading, user?.sub]
  );

  const nameItem = useMemo(
    () =>
      !isLoading ? (
        <Tooltip title={viewProfile} placement="top">
          <Link
            href={authorId === +user?.sub ? "/profile" : `/users/${authorId}`}
            sx={{
              textDecoration: "none",
              padding: "0.5rem 0.625rem",
            }}>
            <Typography variant="p">{fullName}</Typography>
          </Link>
        </Tooltip>
      ) : (
        <Skeleton variant="rounded" height="2rem" />
      ),
    [authorId, fullName, isLoading, user?.sub]
  );

  const phoneItem = useMemo(
    () =>
      !isLoading ? (
        !phone.includes("X") ? (
          <Typography variant="p">{maskedPhone}</Typography>
        ) : (
          <Tooltip title={signInToViewText} placement="top">
            <TButton onClick={signInOpenHandler}>{maskedPhone}</TButton>
          </Tooltip>
        )
      ) : (
        <Skeleton variant="rounded" height="2rem" />
      ),
    [isLoading, maskedPhone, phone, signInOpenHandler]
  );

  const emailItem = useMemo(
    () =>
      !isLoading ? (
        !email.includes("X") ? (
          <Typography variant="p">{email}</Typography>
        ) : (
          <Tooltip title={signInToViewText} placement="bottom">
            <TButton onClick={signInOpenHandler}>{email}</TButton>
          </Tooltip>
        )
      ) : (
        <Skeleton variant="rounded" height="2rem" />
      ),
    [email, isLoading, signInOpenHandler]
  );

  return (
    <StyledBox
      className="pet-profile__infoBlock"
      margin={margin}
      padding="2.5rem">
      <Grid container rowSpacing="2.125rem">
        <Grid container item>
          <Row>
            <Grid item>{avatarItem}</Grid>
            <Grid item width="225px">
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

            <Grid item width="230px">
              {phoneItem}
            </Grid>
          </Row>

          {/* email */}
          <Row columnSpacing="0.75rem" alignItems="center">
            <Grid item>
              <EmailRoundedIcon />
            </Grid>
            <Grid item width="230px">
              {emailItem}
            </Grid>
          </Row>
        </Grid>
        <Grid container item justifyContent="center">
          <Grid item>
            <Link
              href={
                authorId === +user?.sub
                  ? "/profile?tab=2"
                  : `/users/${authorId}?tab=1`
              }
              sx={{ textDecoration: "none" }}>
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
