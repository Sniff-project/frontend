import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import {
  resetProfile,
  resetUserFoundPets,
  resetUserLostPets,
} from "@core/Services/users";
import { Box, Typography } from "@mui/material";
import {
  UserInfo,
  Password,
  PetsGallery,
  DeleteUser,
} from "@containers/Profile";
import { Tabs, TabPanel, Tab } from "@components/ordinary";
import { Spinner } from "@components/simple";

const tabs = [
  {
    label: "Особисті данні",
    content: <UserInfo />,
  },
  {
    label: "Пароль",
    content: (
      <Box component="div" mt="38px">
        <Password />
      </Box>
    ),
  },
  {
    label: "Загублені тваринки",
    content: <PetsGallery status="LOST" />,
  },
  {
    label: "Знайдені тваринки",
    content: <PetsGallery status="FOUND" />,
  },
  {
    label: "Видалення профілю",
    content: <DeleteUser />,
  },
];

const Profile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tabParam = +searchParams.get("tab") || 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetProfile());
    dispatch(resetUserFoundPets());
    dispatch(resetUserLostPets());
  }, [dispatch]);

  const [tabNum, setTabNum] = useState(
    (tabParam < tabs.length && tabParam > 0 && tabParam) || 0
  );

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
        Ваш профіль
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

export default Profile;
