import React from 'react';
import './Tshirt.css';

function Tshirt(props) {
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