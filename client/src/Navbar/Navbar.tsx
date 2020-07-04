import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Store from './img/store.png';

type propsType = {
    itemsInCard: Array<any>
    isAuth: boolean
    login: null | string
    logout: () => void
}

function Navbar(props:propsType) {

    return (

        // Tag NavLink used to control the name of link
        <div className="Navbar">
            <NavLink to='/shop'>Магазин</NavLink>
            <NavLink to='/reviews'>Відгуки</NavLink>
            <NavLink to='/basket'>
                <div className="Navbar__img">
                    <img src={Store} alt="" />
                    <div className="Navbar__count">{props.itemsInCard.length}</div>
                </div>
            </NavLink>
            <NavLink to={'/login'}>
                <div className="login__box">
                    {props.isAuth
                        ? <div>{props.login} <div onClick={props.logout}>LOGOUT</div></div>
                        : <div>LOGIN</div>}
                </div>
            </NavLink>
        </div>
    );
}

export default Navbar;