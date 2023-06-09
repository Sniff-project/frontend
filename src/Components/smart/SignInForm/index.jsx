import { useForm, FormProvider } from "react-hook-form";
import { Button, DefaultInput as Input } from "@components/ui";
import { emailRegex } from "@core/Constants/regex";
import "./styles.scss";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignInForm = ({ onSubmit, toggleShowPassword, showPassword }) => {
  const methods = useForm();
  const { setValue } = methods;

  const onSubmitHandler = (data) => {
    onSubmit(data);
    setValue("password", "");
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
              value: emailRegex,
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
          sx={{ marginTop: "1.5rem" }}
          endIcon={showPassword ? <Visibility /> : <VisibilityOff />}
          endIconOnClick={handleToggleShowPassword}
        />
        <div className="button__container">
          <Button type="submit" sx={{ marginTop: "3.125rem" }} tabIndex={3}>
            Вхід
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
