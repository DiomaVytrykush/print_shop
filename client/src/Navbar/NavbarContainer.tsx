import React from 'react';
import Navbar from './Navbar';
import { getProfile, logout } from '../Redux/Auth-Reducer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { AppStateType } from '../Redux/Redux-Store';

type OwnPropsType = {
    getProfile: () => void
    logout: () => void
}

type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
    itemsInCard: Array<any>
}

type mapDispatchToPropsType = {
    getProfile: () => void
    logout: () => void
}

type propsType = OwnPropsType & mapStateToPropsType

const NavBarContainer = (props: propsType) => {

    useEffect(() => {
        props.getProfile()
    })

    return (
        <Navbar  {...props} />
    )
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    itemsInCard: state.choicesPage.itemsInCard
})

/* <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState> */
export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, { getProfile, logout})(NavBarContainer);