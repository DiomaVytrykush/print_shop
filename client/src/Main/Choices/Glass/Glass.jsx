import React from 'react';
import './Glass.css';

function Glass(props) {
    return (
        <div className="Glass">
            <div className="Glass__img">
                <img src={props.img} />
            </div>
            <div className="Glass_description">
                <h2>{props.name}</h2>
                <p>{props.cost}</p>
                <button>Придбати</button>
            </div>
        </div>           
    );
}

export default Glass;