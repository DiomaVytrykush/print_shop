import React from 'react';

function FooterBox(props) {
  return (
    <div className="Footer__box">
      <div className="Footer__img">
        <img src={props.img} alt=""/>
      </div>
      <div className="Footer__description">
        <p>{props.text}</p>
        <span>{props.description}</span>
      </div>
    </div>
  )
}

export default FooterBox;