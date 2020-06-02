import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import ImgGlass from '../Main/Choices/img/glass.jpg';
import './Item.css';

let Item = ({ item }) => {

    if (!item) {
        return <Preloader />
    }

    return (
        <div className="item__wrapper">
            <div className="item__image"><img alt="img" src={item.gsx$img.$t || ImgGlass } /></div>
            <div className="item__desc__wrapper">
                <div className="item__name">{item.gsx$name.$t}</div>
                <div className="item__cost">{item.gsx$cost.$t} грн</div>
                <div className="item__description">{item.gsx$description.$t}</div>
                <div className="item__size">{item.gsx$size.$t}</div>
            </div>
        </div>
    )
}

export default Item;