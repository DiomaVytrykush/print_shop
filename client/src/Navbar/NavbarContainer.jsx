import React from 'react';
import Navbar from './Navbar';
import { getProfile, logout } from './../Redux/Auth-Reducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const NavBarContainer = (props) => {

    useEffect(() => {
        props.getProfile()
    })

    return (
        <Navbar {...props} />
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    itemsInCard: state.choicesPage.itemsInCard
})

export default connect(mapStateToProps, { getProfile, logout})(NavBarContainer);