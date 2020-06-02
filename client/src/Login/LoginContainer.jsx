import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from './../Redux/Auth-Reducer';

const LoginContainer = (props) => {

    return (
       <Login {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(LoginContainer)