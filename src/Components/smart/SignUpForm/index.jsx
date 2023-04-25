import React from 'react';
import InputMask from 'react-input-mask';
import "./SignUpForm.scss";


const SignUpForm = () => {

    return (
        <section className="registration">
            <h2 className="registration__title">Реєстрація</h2>
            <form className="registration__form">

                <div className="registration__form-inputbox" >
                    <input 
                        type="text"
                        placeholder="Ім'я"/>
                </div>
                <div className="registration__form-inputbox">
                    <input 
                        type="text"
                        placeholder="Прізвище"/>
                </div>
                <div className="registration__form-inputbox">
                    <input 
                        type="email"
                        placeholder="Електронна пошта"/>
                </div>
                <div className="registration__form-inputbox">
                    
                    <InputMask mask="+38 (999) 999-99-99" placeholder="Номер телефону" />
                </div>
                <div className="registration__form-inputbox">
                    <input 
                        type="password"
                        placeholder="Пароль"/>
                </div>
                <div className="registration__form-inputbox">
                    <input 
                        type="repPassword"
                        placeholder="Підтвердити пароль"/>
                </div>
                
                <div className="registration__text">
                    Приєднуючись, ви погоджуєтеся з <a href="#">Умовами</a> та <a href="#">Політикою конфіденційності</a>.
                </div>

                <button 
                    className="registration__button" 
                    type='submit'>
                    Зареєструватись
                </button>
                
            </form>

        </section>

                
    );
};

export default SignUpForm;