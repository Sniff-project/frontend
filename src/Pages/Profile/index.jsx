import { useState } from "react";
import { UserInfo, Password } from "@containers/Profile";
import { Box } from "@components/simple";
import { Tabs, Tab } from "@components/ordinary";
import "./styles.scss";

const tabs = [
  { label: "Особисті данні", content: <UserInfo /> },
  { label: "Пароль", content: <Password /> },
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
      <h3 className="profile__title">Ваш профіль</h3>
      <Box px={{ xs: 2, sm: 4, md: 6, lg: 13 }}>
        <Tabs value={tabNum} onChange={handleTabChange}>
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} />
          ))}
        </Tabs>
        {tabs[tabNum].content}
      </Box>
    </>
  );
};

export default Profile;
