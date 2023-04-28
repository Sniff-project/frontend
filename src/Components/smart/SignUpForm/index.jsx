import React from 'react';
import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";

import "./SignUpForm.scss";

const SignUpForm = () => {
    
    const { register, 
            handleSubmit,
            reset,
            setValue,
            getValues, 
            formState: { errors, isValid } 
    } = useForm({
        mode: "all"
    });

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
        reset();
        setValue("phone", "");
    };

    const password = getValues("password");
    
    

    return (
        <section className="registration">
            <h2 className="registration__title">Реєстрація</h2>
            <form className="registration__form" onSubmit={handleSubmit(onSubmit, { excludeFieldArray: ["repPassword"] })}>

                <div className="registration__form-inputbox">
                
                    <input 
                        {...register('firstName', 
                        {required: "Поле обов'язкове до заповнення!",
                         minLength: {
                            value: 2,
                            message: "Ім'я повинно містити не менше 2 символів!"
                         }
                        })}
                        tabIndex={1}
                        type="text"
                        placeholder="Ім'я"
                        className={errors.firstName ? 'errored' : ''}/>
                    {errors.firstName ? <div className='error'>{errors.firstName.message}</div> : null}
                </div>

                <div className="registration__form-inputbox">
                    <input 
                        {...register('lastName', 
                        {required: "Поле обов'язкове до заповнення!",
                         minLength: {
                            value: 2,
                            message: "Прізвище повинно містити не менше 2 символів!"
                         }
                        })}
                        tabIndex={4}
                        type="text"
                        placeholder="Прізвище"
                        className={errors.lastName ? 'errored' : ''}/>
                    {errors.lastName ? <div className='error'>{errors.lastName.message}</div> : null}
                </div>

                <div className="registration__form-inputbox">
                    <input 
                        {...register('email', 
                        {required: "Поле обов'язкове до заповнення!",
                         pattern: {
                            value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                            message: "Неправильно введено email адресу!"
                         }
                        })}
                        tabIndex={2}
                        type="email"
                        placeholder="Електронна пошта"
                        className={errors.email ? 'errored' : ''}/>
                    {errors.email ? <div className='error'>{errors.email.message}</div> : null}
                </div>

                <div className="registration__form-inputbox">
                    
                    <InputMask
                        {...register('phone', 
                        {required: "Поле обов'язкове до заповнення!",
                        pattern: {
                            value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/,
                            message: "Телефон не заповнено повністю!"
                         }
                        })}
                        tabIndex={5} 
                        mask="+38 (999) 999-99-99" 
                        placeholder="Номер телефону" 
                        className={errors.phone ? 'errored' : ''}/>
                    {errors.phone ? <div className='error'>{errors.phone.message}</div> : null}
                </div>

                <div className="registration__form-inputbox">
                    <input 
                        {...register('password', 
                        {required: "Поле обов'язкове до заповнення!",
                         minLength: {
                            value: 8,
                            message: "Дуже короткий пароль!" 
                        },
                         pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={[}\]:;"'<>,.?/|]).*$/,
                            message: "Пароль повинен містити: A-z, 0-9, ! @ # $ % ^ & *() ?."
                        }
                        })}
                        tabIndex={3}
                        type="password"
                        placeholder="Пароль"
                        className={errors.password ? 'errored' : ''}/>
                    {errors.password ? <div className='error'>{errors.password.message}</div> : null}
                    
                </div>

                <div className="registration__form-inputbox">
                    <input
                        {...register('repPassword', 
                        {required: "Поле обов'язкове до заповнення!",
                            validate: (value) =>
                            value === password || "Паролі не співпадають!",
                        })}
                        tabIndex={6}
                        type="password"
                        placeholder="Підтвердити пароль"
                        className={errors.repPassword ? 'errored' : ''}/>
                    {errors.repPassword ? <div className='error'>{errors.repPassword.message}</div> : null}
                </div>
                
                <div className="registration__text">
                    Приєднуючись, ви погоджуєтеся з <a href="#">Умовами</a> та <a href="#">Політикою конфіденційності</a>.
                </div>

                <button 
                    className="registration__button" 
                    type='submit'
                    disabled={!isValid}>
                    Зареєструватись
                </button>
                
            </form>

        </section>

                
    );
};

export default SignUpForm;
