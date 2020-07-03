import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from '../Redux/Auth-Reducer';
import { AppStateType } from '../Redux/Redux-Store';

type OwnPropsType = {}

type mapStateToPropsType = {
    isAuth: boolean
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type propsType = OwnPropsType & mapStateToPropsType & mapDispatchToPropsType


const LoginContainer = (props: propsType) => {

    return (
        <Login {...props} />
    )
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, { login })(LoginContainer)