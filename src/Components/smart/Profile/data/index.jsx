import React, { useState } from "react";
import Button from "@components/ui/Button";
import editImg from "@assets/Icons/profile/edit.svg";
import confirmImg from "@assets/Icons/profile/confirm.svg";

export default function UserData({ profileState }) {
  const emptyFieldMessage = "Незаповнене поле";
  const [isEditing, setIsEditing] = useState(false);

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
  };

  return (
    <>
      {isEditing ? (
        <div className="profile-holder">
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
              Выберите файл
              <input
                id="input__file"
                type="file"
                accept="image/png, image/jpeg"
                name="avatar"
                src=""
                style={{ visibility: "hidden", position: "absolute"}}
              />
            </label>

            <div className="profile-form__btn">
              <Button type="submit" sx={{ marginTop: "50px" }} tabIndex={3}>
                Підтвердити
                <img src={confirmImg} alt="Edit" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="profile-holder">
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

            {profileState.profile.image ? (
              <input
                readOnly
                type="image"
                name="avatar"
                src={profileState.profile.image}
              />
            ) : (
              <div className="emptyInputImage">Фото</div>
            )}

            <div className="profile-form__btn">
              <Button type="submit" sx={{ marginTop: "50px" }} tabIndex={3}>
                Змінити
                <img src={editImg} alt="Edit" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
