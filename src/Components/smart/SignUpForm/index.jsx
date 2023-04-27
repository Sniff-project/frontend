import React, { useState } from "react";
import { Button1, Input1, Link1 } from "@components/ui";
import "./SignUpForm.scss";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    repPassword: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="registration">
      <h2 className="registration__title">Реєстрація</h2>
      <form className="registration__form">
        <div className="registration__form-inputbox">
          <Input1
            type="text"
            name="firstname"
            placeholder="Ім'я"
            onChange={handleInputChange}
            value={formData.firstname}
          />
        </div>
        <div className="registration__form-inputbox">
          <Input1
            type="text"
            name="lastname"
            placeholder="Прізвище"
            onChange={handleInputChange}
            value={formData.lastname}
          />
        </div>
        <div className="registration__form-inputbox">
          <Input1
            type="email"
            name="email"
            placeholder="Електронна пошта"
            onChange={handleInputChange}
            value={formData.email}
          />
        </div>
        <div className="registration__form-inputbox">
          <Input1
            mask="+38 (999) 999-99-99"
            name="phone"
            placeholder="Номер телефону"
            onChange={handleInputChange}
            value={formData.phone}
          />
        </div>
        <div className="registration__form-inputbox">
          <Input1
            type="password"
            name="password"
            placeholder="Пароль"
            onChange={handleInputChange}
            value={formData.password}
          />
        </div>
        <div className="registration__form-inputbox">
          <Input1
            type="password"
            name="repPassword"
            placeholder="Підтвердити пароль"
            onChange={handleInputChange}
            value={formData.repPassword}
          />
        </div>

        <div className="registration__text">
          Приєднуючись, ви погоджуєтеся з <Link1 to="#">Умовами</Link1> та{" "}
          <Link1 to="#">Політикою конфіденційності</Link1>.
        </div>

        <Button1 className="registration__button" type="submit">
          Зареєструватись
        </Button1>
      </form>
    </section>
  );
};

export default SignUpForm;
