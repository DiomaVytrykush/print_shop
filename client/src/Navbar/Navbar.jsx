import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Store from './img/store.png';

function Navbar({isAuth, login, logout, itemsInCard}) {

    return (

        // Tag NavLink used to control the name of link
        <div className="Navbar">
            <NavLink to='/shop'>Магазин</NavLink>
            <NavLink to='/reviews'>Відгуки</NavLink>
            <NavLink to='/aboutus'>Про нас</NavLink>
            <NavLink to='/basket'>
                <div className="Navbar__img">
                    <img src={Store} alt="" />
                    <div className="Navbar__count">{itemsInCard.length}</div>
                </div>
            </NavLink>
            <NavLink to={'/login'}>
                <div className="login__box">
                    {isAuth
                        ? <div>{login} <div onClick ={logout}>LOGOUT</div></div>
                        : <div>LOGIN</div>}
                </div>  
            </NavLink>
        </div>
    );
}

export default Navbar;