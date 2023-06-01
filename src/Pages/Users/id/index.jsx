import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams, useLocation } from "react-router-dom";
import { useAuth } from "@core/Hooks";
import { strangerProfile as getProfile } from "@core/Services/users";
import { Box, Typography } from "@mui/material";
import { UserInfo, PetsGallery } from "@containers/Profile";
import { Tabs, TabPanel, Tab } from "@components/ordinary";
import { Spinner } from "@components/simple";

const UserPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tabParam = +searchParams.get("tab") || 0;

  const { token, user } = useAuth();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const strangerProfileState = useSelector((state) => state.strangerProfile);

  const tabs = useMemo(
    () => [
      {
        label: "Інформація",
        content: <UserInfo profileState={strangerProfileState} />,
      },
      {
        label: "Тваринки",
        content: (
          <PetsGallery gallery={strangerProfileState.profile.petCards} />
        ),
      },
    ],
    [strangerProfileState]
  );
  const [tabNum, setTabNum] = useState(
    (tabParam < tabs.length && tabParam > 0 && tabParam) || 0
  );

  useEffect(() => {
    if (userId) {
      dispatch(
        getProfile({
          userId: userId,
          token: token || null,
        })
      );
    }
  }, [dispatch, userId, token]);

  if (userId === user?.sub) {
    return <Navigate to="/profile" />;
  }

  if (!!location.search) {
    return (
      <Box sx={{ height: "300px", position: "relative" }}>
        <Navigate to={location.pathname} />
        <Spinner size={100} />
      </Box>
    );
  }

  const handleTabChange = (event, newValue) => {
    setTabNum(newValue);
  };
  return (
    <div className="container2000" style={{ minHeight: "800px" }}>
      <Typography
        variant="h1"
        sx={{ margin: "3.125rem 0 4.625rem 3.125rem", color: "#2e2c34" }}>
        Профіль
      </Typography>
      <Box component="div" px={{ xs: 2, sm: 4, md: 6, lg: 12 }}>
        <Tabs
          value={tabNum}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
        <TabPanel>{tabs[tabNum].content}</TabPanel>
      </Box>
    </div>
  );
};

export default UserPage;
