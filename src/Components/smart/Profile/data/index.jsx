import React, { useState, useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { changeData } from "@core/Services";
import { Button } from "@components/ui";
import Avatar from "../avatar";
import editImg from "@assets/Icons/profile/edit.svg";
import confirmImg from "@assets/Icons/profile/confirm.svg";
import { useDispatch } from "react-redux";
import { AuthContext } from "@contexts";

export default function UserData({ profileState }) {
  const emptyFieldMessage = "Незаповнене поле";
  const { user, token } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const methods = useForm();

  const [userData, setUserData] = useState({
    avatar: profileState.profile.avatar,
    firstname: profileState.profile.firstname,
    lastname: profileState.profile.lastname,
    region: profileState.profile.region,
    city: profileState.profile.city,
    phone: profileState.profile.phone,
    email: profileState.profile.email,
  });

  const onEditHandler = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    if (isEditing) {
      dispatch(
        changeData({
          userId: user.sub,
          token: token,
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          phone: userData.phone,
          region: userData.region,
          city: userData.city,
        })
      );
    }
  };

  return (
    <>
      {isEditing ? (
        <div className="profile-holder">
          <FormProvider {...methods}>
            <form className="editProfile-form" onSubmit={onEditHandler}>
              <label>
                Як вас звати?
                <br></br>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, firstname: e.target.value })
                  }
                  type="text"
                  name="firstName"
                  placeholder="Ім'я"
                  value={userData.firstname}
                />
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, lastname: e.target.value })
                  }
                  type="text"
                  name="lastName"
                  placeholder="Прізвище"
                  value={userData.lastname}
                />
              </label>
              <br></br>
              <label>
                Як з вами зв’язатись?
                <br></br>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  type="tel"
                  name="phone"
                  placeholder="Номер телефону"
                  value={userData.phone}
                />
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  type="email"
                  name="email"
                  placeholder="Пошта"
                  value={userData.email}
                />
              </label>
              <br></br>
              <label>
                Де ви знаходитесь?
                <br></br>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, region: e.target.value })
                  }
                  type="text"
                  name="region"
                  placeholder="Область"
                  value="__"
                />
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, city: e.target.value })
                  }
                  type="text"
                  name="city"
                  placeholder="Місто"
                  value="__"
                />
              </label>

              <label className="emptyInputImage">
                Виберіть файл
                <input
                  id="input__file"
                  type="file"
                  accept="image/png, image/jpeg"
                  name="avatar"
                  src=""
                  alt="Your photo"
                  style={{ visibility: "hidden", position: "absolute" }}
                />
              </label>

              <div className="profile-form__btn">
                <Button type="submit" sx={{ marginTop: "50px" }} tabIndex={3}>
                  Підтвердити
                  <img src={confirmImg} alt="Edit" />
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      ) : (
        <div className="profile-holder">
          <FormProvider {...methods}>
            <form className="profile-form" onSubmit={onEditHandler}>
              <label>
                Як вас звати
                <br></br>
                <input
                  readOnly
                  type="text"
                  name="fullName"
                  value={
                    profileState.profile.firstname ||
                    profileState.profile.lastname
                      ? `${profileState.profile.firstname} ${profileState.profile.lastname}`
                      : emptyFieldMessage
                  }
                />
              </label>

              <label>
                Номер телефону
                <br></br>
                <input
                  readOnly
                  type="tel"
                  name="phone"
                  value={
                    profileState.profile.phone
                      ? profileState.profile.phone
                      : emptyFieldMessage
                  }
                />
              </label>

              <label>
                Електронна пошта
                <br></br>
                <input
                  readOnly
                  type="email"
                  name="email"
                  value={
                    profileState.profile.email
                      ? profileState.profile.email
                      : emptyFieldMessage
                  }
                />
              </label>

              <label>
                Місто та Область
                <br></br>
                <input
                  readOnly
                  type="text"
                  name="city"
                  value={
                    profileState.profile.city
                      ? profileState.profile.city
                      : emptyFieldMessage
                  }
                />
              </label>

              <Avatar src={profileState.profile.avatar} />

              <div className="profile-form__btn">
                <Button type="submit" sx={{ marginTop: "50px" }} tabIndex={3}>
                  Змінити
                  <img src={editImg} alt="Edit" />
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      )}
    </>
  );
}
