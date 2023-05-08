import { useForm, FormProvider } from "react-hook-form";
import { SecondInput as Input, Button } from "@components/ui";
import { Grid } from "@components/simple";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const ChangePasswordForm = ({ onSubmit, showPassword, toggleShowPassword }) => {
  const methods = useForm({
    mode: "onChange",
  });
  const { reset, watch } = methods;

  const onSubmitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  const handleToggleShowPassword = () => {
    toggleShowPassword();
  };

  const currentPassword = watch("currentPassword");
  const newPassword = watch("newPassword");

  return (
    <FormProvider {...methods}>
      <form
        className="changepassword__form"
        onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <Grid container justifyContent="center">
          <Input
            type={showPassword ? "text" : "password"}
            name="currentPassword"
            label="Поточний пароль"
            placeholder="********"
            validation={{
              required: "Поле обов'язкове до заповнення!",
              minLength: {
                value: 8,
                message: "Дуже короткий пароль!",
              },
              maxLength: {
                value: 20,
                message: "Дуже довгий пароль!",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={[}\]:;"'<>,.?/|]).*$/,
                message:
                  "Пароль повинен містити: A-z, 0-9, ! @ # $ % ^ & *() ?.",
              },
            }}
            tabIndex={1}
            sx={{ marginTop: "43px" }}
            endIcon={showPassword ? <Visibility /> : <VisibilityOff />}
            endIconOnClick={handleToggleShowPassword}
          />
          <Input
            type={showPassword ? "text" : "password"}
            name="newPassword"
            label="Новий пароль"
            validation={{
              required: "Поле обов'язкове до заповнення!",
              minLength: {
                value: 8,
                message: "Дуже короткий пароль!",
              },
              maxLength: {
                value: 20,
                message: "Дуже довгий пароль!",
              },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={[}\]:;"'<>,.?/|]).*$/,
                message:
                  "Пароль повинен містити: A-z, 0-9, ! @ # $ % ^ & *() ?.",
              },
              validate: (value) =>
                value !== methods.getValues("currentPassword") ||
                "Паролі співпадають!",
            }}
            tabIndex={2}
            sx={{ marginTop: "42px" }}
            endIcon={showPassword ? <Visibility /> : <VisibilityOff />}
            endIconOnClick={handleToggleShowPassword}
          />
        </Grid>
        {currentPassword && newPassword && (
          <Grid container justifyContent="center">
            <Button type="submit" tabIndex={3} sx={{ marginTop: "42px" }}>
              Зберегти
            </Button>
          </Grid>
        )}
      </form>
    </FormProvider>
  );
};

export default ChangePasswordForm;
