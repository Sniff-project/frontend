import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button1, Input, withInput } from "@components/ui";
import "./styles.scss";

const Input1 = withInput(Input);

const SignInForm = ({ onSubmit }) => {
  const methods = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form id="LoginForm" onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <div className="form-group">
          <Input1
            type="email"
            name="email"
            placeholder="Пошта або Номер телефону"
            validation={{
              required: true,
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
                message: "Неправильно введено email адресу!",
              },
            }}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <Input1
            type="password"
            name="password"
            className="mt-8"
            placeholder="Пароль"
            validation={{
              required: true,
              minLength: { value: 8, message: "Дуже короткий пароль!" },
            }}
            tabIndex={2}
          />
        </div>
        <div className="d-flex justify-content-center w-100">
          <Button1 type="submit" className="mt-10" tabIndex={3}>
            Вхід
          </Button1>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
