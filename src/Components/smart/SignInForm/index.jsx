import { useForm, FormProvider } from "react-hook-form";
import { Button, DefaultInput as Input } from "@components/ui";
import "./styles.scss";
import showPswd from "@assets/Icons/HideShowPswd/show.svg";
import hidePswd from "@assets/Icons/HideShowPswd/hide.svg";

const SignInForm = ({ onSubmit, toggleShowPassword, showPassword }) => {
  const methods = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  const handleToggleShowPassword = () => {
    toggleShowPassword();
  };

  return (
    <FormProvider {...methods}>
      <form id="LoginForm" onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <Input
          type="email"
          name="email"
          label="Пошта або Номер телефону"
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
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          label="Пароль"
          validation={{
            required: true,
            minLength: { value: 8, message: "Дуже короткий пароль!" },
            maxLength: { value: 20, message: "Дуже довгий пароль!" },
          }}
          tabIndex={2}
          sx={{ marginTop: "24px" }}
        />
        <button
          type="button"
          onClick={handleToggleShowPassword}
          className="hide-show_btn">
          <img alt="#" src={showPassword ? showPswd : hidePswd} />
        </button>
        <div className="button__container">
          <Button type="submit" sx={{ marginTop: "50px" }} tabIndex={3}>
            Вхід
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
