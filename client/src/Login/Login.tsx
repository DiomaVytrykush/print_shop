import React from 'react';
import './Login.css';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required, maxLength50, minLength5 } from '../Validators/Validators';
import { Redirect } from "react-router-dom";

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit }) => {

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

const LoginReduxForm = reduxForm<LoginFormValuesType>({ form: 'login' })(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login: React.FC<LoginPropsType> = ({ login, isAuth }) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe)
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