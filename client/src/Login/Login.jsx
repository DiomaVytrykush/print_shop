import React from 'react';
import './Login.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from './../Common/FormsControls/FormsControls';
import { required,maxLength50, minLength5 } from './../Helpers/Validators/Validators';
import { Redirect } from "react-router-dom";

const LoginForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className="reg__field">
                <label htmlFor="email">Електронна пошта:</label>
                <div>
                    <Field 
                        component={Input}
                        validate={[required, maxLength50]}
                        type="email" name="email" id="email" placeholder="new.user@email.com" autoComplete="On" />
                </div>
            </div>
            <div className="reg__field">
                <label htmlFor="password">Пароль:</label>
                <div>
                    <Field 
                        component={Input}
                        validate={[required, minLength5]}
                        type="password" name="password" id="password" required autoComplete="On" />
                </div>
            </div>
            <div>
                <Field component="input" type="checkbox" name="checkbox" />Запам'ятати мене
            </div>
            <button type="submit" id="btn">Увійти</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({login,isAuth }) => {

    const onSubmit = formData => {
        login(formData.email, formData.password)
        console.log(formData)
    }


    if (isAuth) {
        return <Redirect to={'/shop'} />
    }

    return (
        <div className="registration-form">
            <div className="login">
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default Login