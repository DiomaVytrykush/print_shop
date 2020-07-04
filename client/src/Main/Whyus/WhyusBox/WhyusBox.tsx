import React from 'react';

type propsType = {
    img:string
    text:string
    description:string
}

function WhyusBox(props:propsType) {
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