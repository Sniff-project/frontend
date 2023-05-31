import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profile as getProfile } from "@core/Services/users";
import { Box, Typography } from "@mui/material";
import { UserInfo } from "@containers/Profile";
import { Tabs, TabPanel, Tab } from "@components/ordinary";

const UserPage = () => {
  const [tabNum, setTabNum] = useState(0);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const strangerProfileState = useSelector((state) => state.strangerProfile);

  const tabs = useMemo(
    () => [
      {
        label: "Особисті данні",
        content: <UserInfo profileState={strangerProfileState} />,
      },
    ],
    [strangerProfileState]
  );

  useEffect(() => {
    if (userId) {
      dispatch(
        getProfile({
          userId: userId,
        })
      );
    }
  }, [dispatch, userId]);

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
