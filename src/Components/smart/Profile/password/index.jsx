import { useForm, FormProvider } from "react-hook-form";
import { DefaultInput as Input, Button } from "@components/ui";

const ChangePasswordForm = ({ onSubmit }) => {
  const methods = useForm({
    mode: "all",
  });

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="changepassword__form"
        onSubmit={methods.handleSubmit(onSubmitHandler)}>
        <div className="form-group">
          <Input
            type="password"
            name="currentPassword"
            placeholder="********"
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
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <Input
            type="password"
            name="newPassword"
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
              validate: (value) =>
                value !== methods.getValues("currentPassword") ||
                "Паролі співпадають!",
            }}
            tabIndex={2}
          />
        </div>
        <Button type="submit" className="mt-10" tabIndex={3}>
          Update
        </Button>
      </form>
    </FormProvider>
  );
};

export default ChangePasswordForm;
