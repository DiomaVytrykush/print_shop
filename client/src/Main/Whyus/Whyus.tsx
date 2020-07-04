import React from 'react';
import './Whyus.css';
import WhyusBox from './WhyusBox/WhyusBox';
import { MassiveType } from '../../Redux/Main-Reducer';

type propsType = {
    Whyuses : Array<MassiveType>
}

function Whyus(props:propsType) {
    
  // Function map helps us to create new massive with few new boxes one by one 
    let WhyusesElements = props.Whyuses.map(whyus => <WhyusBox key={whyus.id} img={whyus.img} text={whyus.text} description={whyus.description} />)

    return (
        <div className="Whyus">
            <h1>Чому вибирають нас?</h1>
            <div className="Whyus__boxes">
                {WhyusesElements}
            </div>
        </div >
    );
}

export default Whyus;