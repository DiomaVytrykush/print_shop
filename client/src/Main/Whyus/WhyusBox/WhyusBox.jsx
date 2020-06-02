import React from 'react';

function WhyusBox(props) {
    return (
        <div className="Whyus__box">
            <div className="Whyus__img">
                <img src={props.img} alt="" />
            </div>
            <div className="Whyus__description">
                <p>{props.text}</p>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default WhyusBox;