import React from 'react';
import './Tshirt.css';
import { propsType } from '../Glass/Glass';

function Tshirt(props:propsType) {
    return (
        <div className="Tshirt">
            <div className="Tshirt__img">
                <img src={props.img} />
            </div>
            <div className="Tshirt__description">
                <h2>{props.name}</h2>
                <p>{props.cost}</p>
                <button>Придбати</button>
            </div>
        </div>           
    );
}

export default Tshirt;