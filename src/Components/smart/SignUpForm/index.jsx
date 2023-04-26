import React from 'react';
import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";

import "./SignUpForm.scss";


const SignUpForm = () => {
    const { register, 
            handleSubmit,
            watch,
            reset,
            getValues, 
            formState: { errors, isValid } 
    } = useForm({
        mode: "all"
    });

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
        reset();
    };
    
    const password = getValues("password");
    
    

    return (
        <section className="registration">
            <h2 className="registration__title">Реєстрація</h2>
            <form className="registration__form" onSubmit={handleSubmit(onSubmit)}>

                <div className="registration__form-inputbox" >
                    <input 
                        {...register('firstName', 
                        {required: "Поле обов'язкове до заповнення!",
                         minLength: {
                            value: 5,
                            message: "Ім'я повинно містити не менше ніж 5 символів!"
                         }
                        })}
                        type="text"
                        placeholder="Ім'я"/>
                    {errors.firstName ? <div className='error'>{errors.firstName.message}</div> : null}
                </div>

                <div className="registration__form-inputbox">
                    <input 
                        {...register('lastName', 
                        {required: "Поле обов'язкове до заповнення!",
                         minLength: {
                            value: 5,
                            message: "Прізвище повинно містити не менше ніж 5 символів!"
                         }
                        })}
                        type="text"
                        placeholder="Прізвище"/>
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
                        type="email"
                        placeholder="Електронна пошта"/>
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
                        mask="+38 (999) 999-99-99" 
                        placeholder="Номер телефону" />
                    {errors.phone ? <div className='error'>{errors.phone.message}</div> : null}
                </div>

                <div className="registration__form-inputbox">
                    <input 
                        {...register('password', 
                        {required: "Поле обов'язкове до заповнення!",
                         pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-={[}\]:;\"'<>,.?\/|]).*$/,
                            message: "Пароль повинен містити: A-z, 0-9, ! @ # $ % ^ & *() ?."
                        }
                        })}
                        type="text"
                        placeholder="Пароль"/>
                    {errors.password ? <div className='error'>{errors.password.message}</div> : null}
                    
                </div>

                <div className="registration__form-inputbox">
                    <input
                        {...register('repPassword', 
                        {required: "Поле обов'язкове до заповнення!",
                            validate: (value) =>
                            value === password || "Паролі не співпадають!",
                        })}
                        type="repPassword"
                        placeholder="Підтвердити пароль"/>
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