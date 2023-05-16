import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { UserInfo, Password } from "@containers/Profile";
import { Tabs, TabPanel, Tab } from "@components/ordinary";

const tabs = [
  { label: "Особисті данні", content: <UserInfo /> },
  {
    label: "Пароль",
    content: (
      <Box component="div" mt="38px">
        <Password />
      </Box>
    ),
  },
  { label: "Загублені тваринки", content: "Content for Tab 3" },
  { label: "Знайдені тваринки", content: "contents for Tab 4" },
];

const Profile = () => {
  const [tabNum, setTabNum] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabNum(newValue);
  };
  return (
    <>
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
    </>
  );
};

export default Profile;
