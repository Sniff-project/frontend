import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button1, Input1 } from "@components/ui";

import "./SignUpForm.scss";

const SignUpForm = () => {
    const methods = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data, null, 2));
        methods.reset();
    };

    methods.register("repPassword", { exclude: true });

    return (
        <section className="registration">
            <h2 className="registration__title">Реєстрація</h2>
            <FormProvider {...methods}>
                <form
                    className="registration__form"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <div className="registration__form-inputbox">
                        <Input1
                            validation={{
                                required: "Поле обов'язкове до заповнення!",
                                minLength: {
                                    value: 2,
                                    message:
                                        "Ім'я повинно містити не менше 2 символів!",
                                },
                            }}
                            tabIndex={1}
                            name="firstName"
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
                                    message:
                                        "Прізвище повинно містити не менше 2 символів!",
                                },
                            }}
                            tabIndex={4}
                            name="lastName"
                            type="text"
                            placeholder="Прізвище"
                        />
                    </div>

                    <div className="registration__form-inputbox">
                        <Input1
                            validation={{
                                required: "Поле обов'язкове до заповнення!",
                                pattern: {
                                    value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                    message:
                                        "Неправильно введено email адресу!",
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
                                    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/,
                                    message: "Телефон не заповнено повністю!",
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
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={[}\]:;"'<>,.?/|]).*$/,
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
                        <Input1
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
                        Приєднуючись, ви погоджуєтеся з <a href="#">Умовами</a>{" "}
                        та <a href="#">Політикою конфіденційності</a>.
                    </div>

                    <div className="registration__button">
                        <Button1
                            type="submit"
                            disabled={!methods.formState.isValid}
                        >
                            Зареєструватись
                        </Button1>
                    </div>
                </form>
            </FormProvider>
        </section>
    );
};

export default SignUpForm;
