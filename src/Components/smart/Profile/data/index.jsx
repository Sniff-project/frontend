import React, { useState, useContext, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { changeData } from "@core/Services";
import { Button } from "@components/ui";
import Avatar from "../avatar";
import editImg from "@assets/Icons/profile/edit.svg";
import confirmImg from "@assets/Icons/profile/confirm.svg";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "@contexts";
import { DefaultInput as Input } from "@components/ui";
import {
  cities as getCities,
  regions as getRegions,
} from "@core/Services/users";
import {
  firstNameRegex,
  lastNameRegex,
  phoneRegex,
  phoneRegexForReplace,
  emailRegex,
} from "@core/Constants/regex";
import { phoneMask } from "@core/Constants/masks";
import "./styles.scss";
import UserLocation from "../location";

export default function UserData({ profileState }) {
  const emptyFieldMessage = "Незаповнене поле";
  const { user, token } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const cities_Array = useSelector(({ cities }) => cities.cities.citiesArray);
  const regions_Array = useSelector(
    ({ regions }) => regions.regions.regionsArray
  );
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "all",
  });
  const [currentCity, setCurrentCity] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    if (user && token && !cities_Array && !regions_Array) {
      dispatch(getCities({ token }));
      dispatch(getRegions({ token }));
    }
  }, [dispatch, user, token, cities_Array, regions_Array]);

  useEffect(() => {
    if (regions_Array?.length > 0 && cities_Array?.length > 0) {
      if (profileState.profile.city !== null) {
        setCurrentCity(
          cities_Array.find((city) => city.name === profileState.profile.city)
            .id
        );
      }
      if (profileState.profile.region !== null) {
        setCurrentRegion(
          regions_Array.find(
            (region) => region.name === profileState.profile.region
          ).id
        );
      }
    }
  }, [
    cities_Array,
    regions_Array,
    profileState.profile.city,
    profileState.profile.region,
  ]);

  const onEditHandler = (e) => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      const { firstname, lastname, email, phone2 } = e;
      const correctedFirstname =
        firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
      const correctedLastname =
        lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
      const correctedEmail = email.toLowerCase();
      const unmaskedPhone = "+" + phone2.replace(/\D/g, "");
      const correctedCurrentCity = currentCity === 0 ? null : currentCity;
      const correctedCurrentRegion = currentRegion === 0 ? null : currentRegion;

      dispatch(
        changeData({
          userId: user.sub,
          token: token,
          firstname: correctedFirstname,
          lastname: correctedLastname,
          email: correctedEmail,
          phone: unmaskedPhone,
          regionId: correctedCurrentRegion,
          cityId: correctedCurrentCity,
        })
      );
    } else {
      e.preventDefault();
    }
  };

  return (
    <React.Fragment>
      {isEditing ? (
        <div className="profile-holder">
          <FormProvider {...methods}>
            <form
              className="editProfile-form"
              onSubmit={methods.handleSubmit(onEditHandler)}>
              <div className="editProfile-form__inputs">
                <div className="editProfile-form__holder">
                  <h3>Як вас звати?</h3>
                  <div className="editProfile-form__section">
                    <Input
                      validation={{
                        required: "Поле обов'язкове до заповнення!",
                        minLength: {
                          value: 2,
                          message: "Ім'я повинно містити не менше 2 символів!",
                        },
                        maxLength: {
                          value: 15,
                          message:
                            "Ім'я повинно містити не більше 15 символів!",
                        },
                        pattern: {
                          value: firstNameRegex,
                          message: "Неправильно введено Ім'я користувача!",
                        },
                      }}
                      tabIndex={1}
                      name="firstname"
                      type="text"
                      label="Ім'я"
                      defaultValue={profileState.profile.firstname}
                    />
                    <Input
                      validation={{
                        required: "Поле обов'язкове до заповнення!",
                        minLength: {
                          value: 2,
                          message:
                            "Прізвище повинно містити не менше 2 символів!",
                        },
                        maxLength: {
                          value: 15,
                          message:
                            "Прізвище повинно містити не більше 15 символів!",
                        },
                        pattern: {
                          value: lastNameRegex,
                          message: "Неправильно введено Прізвище користувача!",
                        },
                      }}
                      tabIndex={4}
                      name="lastname"
                      type="text"
                      label="Прізвище"
                      defaultValue={profileState.profile.lastname}
                    />
                  </div>

                  <h3>Як з вами зв’язатись?</h3>
                  <div className="editProfile-form__section">
                    <Input
                      tabIndex={5}
                      name="phone2"
                      validation={{
                        required: "Поле обов'язкове до заповнення!",
                        pattern: {
                          value: phoneRegex,
                          message: "Неправильний номер телефону!",
                        },
                      }}
                      mask={phoneMask}
                      label="Номер телефону"
                      defaultValue={profileState.profile.phone.replace(
                        phoneRegexForReplace[0],
                        phoneRegexForReplace[1]
                      )}
                    />

                    <Input
                      validation={{
                        required: "Поле обов'язкове до заповнення!",
                        pattern: {
                          value: emailRegex,
                          message: "Неправильно введено email адресу!",
                        },
                      }}
                      tabIndex={2}
                      name="email"
                      type="email"
                      label="Електронна пошта"
                    />
                  </div>

                  <h3>Де ви знаходитесь?</h3>
                  <UserLocation
                    setCurrentCity={setCurrentCity}
                    setCurrentRegion={setCurrentRegion}
                    cities_Array={cities_Array}
                    regions_Array={regions_Array}
                    currentCity={currentCity === null ? 0 : currentCity}
                    currentRegion={currentRegion === null ? 0 : currentRegion}
                  />
                </div>
                <Avatar src={profileState.profile.avatar} />
              </div>

              <div className="editProfile-form__btn">
                <Button
                  className={methods.formState.isValid ? "green__btn" : ""}
                  type="submit"
                  sx={{ margin: "50px 0px" }}
                  tabIndex={3}
                  disabled={!methods.formState.isValid}>
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
              <div className="profile-form__inputs">
                <div className="profile-form__holder">
                  <Input
                    readOnly={true}
                    tabIndex={1}
                    name="fullname"
                    type="text"
                    label={
                      profileState.profile.id === +user?.sub
                        ? "Як вас звати?"
                        : "Ім'я користувача"
                    }
                    defaultValue={
                      profileState.profile.firstname ||
                      profileState.profile.lastname
                        ? `${profileState.profile.firstname} ${profileState.profile.lastname}`
                        : emptyFieldMessage
                    }
                  />
                  <Input
                    readOnly={true}
                    tabIndex={1}
                    type="tel"
                    name="phone"
                    mask={phoneMask}
                    label="Номер телефону"
                    defaultValue={
                      profileState.profile.phone || "+380 (XX) XXX-XX-XX"
                    }
                  />

                  <Input
                    readOnly={true}
                    tabIndex={1}
                    type="text"
                    name="city"
                    label="Місто та Область"
                    defaultValue={`${
                      profileState.profile.city
                        ? profileState.profile.city + ","
                        : ""
                    } ${
                      profileState.profile.region
                        ? profileState.profile.region
                        : ""
                    }`}
                  />
                  <Input
                    readOnly={true}
                    tabIndex={1}
                    type="email"
                    name="email"
                    label="Електронна пошта"
                    defaultValue={profileState.profile.email || "XXXX@XXX.XX"}
                  />
                </div>

                <Avatar onlyRead={true} src={profileState.profile.avatar} />
              </div>

              {profileState.profile.id === +user?.sub && (
                <div className="profile-form__btn">
                  <Button type="submit" sx={{ marginTop: "50px" }} tabIndex={3}>
                    Змінити
                    <img src={editImg} alt="Edit" />
                  </Button>
                </div>
              )}
            </form>
          </FormProvider>
        </div>
      )}
    </React.Fragment>
  );
}
