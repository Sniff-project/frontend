import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button, DefaultInput as Input, Link } from "@components/ui";
import "./SignUpForm.scss";

const SignUpForm = ({ onSubmit }) => {
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

  return (
    <FormProvider {...methods}>
      <form
        className="registration__form"
        onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <div className="registration__form-inputbox">
          <Input
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
          <Input
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
          <Input
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
          <Input
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
          <Input
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
            type="password"
            placeholder="Пароль"
          />
        </div>

        <div className="registration__form-inputbox">
          <Input
            validation={{
              required: "Поле обов'язкове до заповнення!",
              validate: (value) =>
                value === methods.getValues("password") ||
                "Паролі не співпадають!",
            }}
            tabIndex={6}
            name="repPassword"
            type="password"
            placeholder="Підтвердити пароль"
          />
        </div>

        <div className="registration__text">
          Приєднуючись, ви погоджуєтеся з <Link href="#">Умовами</Link> та{" "}
          <Link href="#">Політикою конфіденційності</Link>.
        </div>

        <div className="registration__button">
          <Button
            type="submit"
            disabled={!methods.formState.isValid}
            tabIndex={7}>
            Зареєструватись
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignUpForm;
