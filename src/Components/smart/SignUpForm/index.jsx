import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button1, Input1, Link1 } from "@components/ui";
import "./SignUpForm.scss";

import hidePswd from "@assets/Icons/HideShowPsw/hide.svg";
import showPswd from "@assets/Icons/HideShowPsw/show.svg";

const SignUpForm = ({ onSubmit, toggleShowPassword1, toggleShowPassword2, showPassword1,  showPassword2}) => {
  const methods = useForm({
    mode: "all",
  });

  const onSubmitHandler = (data) => {
    const { firstname, lastname, email, phone, password } = data;
    // firstname
    const correctedFirstname =
      firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
    //lastname
    const correctedLastname =
      lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
    // email
    const correctedEmail = email.toLowerCase();
    // phone
    const unmaskedPhone = "+" + phone.replace(/\D/g, "");

    onSubmit({
      firstname: correctedFirstname,
      lastname: correctedLastname,
      email: correctedEmail,
      phone: unmaskedPhone,
      password,
    });
  };

  const handleToggleShowPassword1 = () => {
    toggleShowPassword1();
  };

  const handleToggleShowPassword2 = () => {
    toggleShowPassword2();
  };

  return (
    <FormProvider {...methods}>
      <form
        className="registration__form"
        onSubmit={methods.handleSubmit(onSubmitHandler)}
      >
        <div className="registration__form-inputbox">
          <Input1
            validation={{
              required: "Поле обов'язкове до заповнення!",
              minLength: {
                value: 2,
                message: "Ім'я повинно містити не менше 2 символів!",
              },
              pattern: {
                value: /^[^(\d)\W]+$/iu,
                message: "Неправильно введено Ім'я користувача!",
              },
            }}
            tabIndex={1}
            name="firstname"
            type="text"
            placeholder="Ім'я"
          />
        </div>

        <div className="registration__form-inputbox">
          <Input1
            validation={{
              required: "Поле обов'язкове до заповнення!",
              minLength: {
                value: 2,
                message: "Прізвище повинно містити не менше 2 символів!",
              },
              pattern: {
                value: /^[^(\d)\W]+$/iu,
                message: "Неправильно введено Фамілію користувача!",
              },
            }}
            tabIndex={4}
            name="lastname"
            type="text"
            placeholder="Прізвище"
          />
        </div>

        <div className="registration__form-inputbox">
          <Input1
            validation={{
              required: "Поле обов'язкове до заповнення!",
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
                message: "Неправильно введено email адресу!",
              },
            }}
            tabIndex={2}
            name="email"
            type="email"
            placeholder="Електронна пошта"
          />
        </div>

        <div className="registration__form-inputbox">
          <Input1
            validation={{
              required: "Поле обов'язкове до заповнення!",
              pattern: {
                value: /^\+38\s\((0\d{2})\)\s(\d{3})-(\d{2})-(\d{2})$/,
                message: "Неправильний номер телефону!",
              },
            }}
            tabIndex={5}
            name="phone"
            mask="+38 (999) 999-99-99"
            placeholder="Номер телефону"
          />
        </div>

        <div className="registration__form-inputbox">
          <Input1
            validation={{
              required: "Поле обов'язкове до заповнення!",
              minLength: {
                value: 8,
                message: "Дуже короткий пароль!",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={[}\]:;"'<>,.?/|]).*$/,
                message:
                  "Пароль повинен містити: A-z, 0-9, ! @ # $ % ^ & *() ?.",
              },
            }}
            tabIndex={3}
            name="password"
            type={showPassword1 ? "text" : "password"}
            placeholder="Пароль"
          />
          <button
            type="button"
            onClick={handleToggleShowPassword1}
            className="hide-show_btn"
          >
            <img src={showPassword1 ? showPswd : hidePswd} />
          </button>
        </div>

        <div className="registration__form-inputbox">
          <Input1
            validation={{
              required: "Поле обов'язкове до заповнення!",
              validate: (value) =>
                value === methods.getValues("password") ||
                "Паролі не співпадають!",
            }}
            tabIndex={6}
            name="repPassword"
            type={showPassword2 ? "text" : "password"}
            placeholder="Підтвердити пароль"
          />
          <button
            type="button"
            onClick={handleToggleShowPassword2}
            className="hide-show_btn"
          >
            <img src={showPassword2 ? showPswd : hidePswd} />
          </button>
        </div>

        <div className="registration__text">
          Приєднуючись, ви погоджуєтеся з <Link1 href="#">Умовами</Link1> та{" "}
          <Link1 href="#">Політикою конфіденційності</Link1>.
        </div>

        <div className="registration__button">
          <Button1
            type="submit"
            disabled={!methods.formState.isValid}
            tabIndex={7}
          >
            Зареєструватись
          </Button1>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
