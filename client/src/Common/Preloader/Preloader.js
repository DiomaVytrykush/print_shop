import React from 'react';
import preloader from './cat.gif';
import "./Preloader.css";

let Preloader = () => {
    return (
        <div className="Preloader">
            <div className="Preloader__wrapper">
                <h2>Loading . . .</h2>
                <img src={preloader} alt="" />
            </div>
        </div>
    )
}

export default Preloader