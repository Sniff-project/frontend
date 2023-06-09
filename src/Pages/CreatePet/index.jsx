import React, { useEffect, useState } from "react";
import { CreatePetContainer } from "@containers/PetProfile";
import { useDispatch, useSelector } from "react-redux";
import { profile as getProfile } from "@core/Services/users";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "@core/Hooks";

import Box from "@mui/material/Box";
import { Button } from "@components/ui";
import { Spinner } from "@components/simple";
import { Message } from "@components/ordinary";

const CITY_ERROR = "Спочатку встановіть місто та область в профілі!";

const CreatePetProfilePage = () => {
  const { user, token } = useAuth();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const statusParam = searchParams.get("status");

  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const [status, setStatus] = useState(
    statusParam === "found" ? "Знайдено" : "Загублено"
  );

  useEffect(() => {
    if (!profileState?.profile?.city && user && token) {
      dispatch(getProfile({ userId: user.sub, token: token }));
    }
  }, [dispatch, profileState?.profile?.city, token, user]);

  useEffect(() => {
    if (!!location.search) {
      setStatus(statusParam === "found" ? "Знайдено" : "Загублено");
    }
  }, [location.search, statusParam]);

  if (!!location.search) {
    return (
      <Box sx={{ height: "300px", position: "relative" }}>
        <Navigate to={location.pathname} />
        <Spinner size={100} />
      </Box>
    );
  }

  const loading = profileState.loading && <Spinner />;
  const error = !loading &&
    (!profileState?.profile?.city || !profileState?.profile?.region) && (
      <React.Fragment>
        <Message
          message={CITY_ERROR}
          messageType="error"
          mb={8}
          sx={{
            margin: "3.125rem auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <Button
            href="/profile"
            sx={{
              padding: "1rem 1.5rem",
              marginBottom: "2rem",
              fontSize: "1.5rem",
            }}>
            Відкрити профіль
          </Button>
        </Box>
      </React.Fragment>
    );
  const content = !loading && !error && (
    <CreatePetContainer params={{ status: status }} />
  );

  return (
    <React.Fragment>
      {loading}
      {error}
      {content}
    </React.Fragment>
  );
};

export default CreatePetProfilePage;
