import { UserInfo, Password } from "@containers/Profile";
import { Tabs } from "@components/ordinary";
import "./styles.scss";

const tabs = [
  { name: "Особисті данні", content: <UserInfo /> },
  { name: "Пароль", content: <Password /> },
  { name: "Загублені тваринки", content: "Content for Tab 3" },
  { name: "Знайдені тваринки", content: "contents for Tab 4" },
];

const Title = ({ children }) => {
  return <h3 className="profile__title">{children}</h3>;
};

const Profile = () => {
  return (
    <>
      <Title>Ваш профіль</Title>
      <Tabs tabs={tabs} className="ps-2 ps-sm-4 ps-md-6 ps-lg-13" />
    </>
  );
};

export default Profile;
