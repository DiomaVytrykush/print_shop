import React from 'react';
import './Glass.css';

export type propsType = {
    img:string
    name:string
    cost:number
}

function Glass(props:propsType) {
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