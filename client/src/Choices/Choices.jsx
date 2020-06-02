import React from 'react'
import './Choices.css';
import ImgGlass from './../Main/Choices/img/glass.jpg';
import { NavLink } from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';

let Choices = (props) => {

    // if (!props.products) {
    //     return <Preloader />
    // }

    return (
        <div className="choices__wrapper">
            {
                props.products.map(p => <div key={p.gsx$id.$t}>
                    <div className="choices__box">
                        <div>
                            <NavLink to={'/item/' + p.gsx$id.$t}>
                                <img src={p.gsx$img.$t != null ?  p.gsx$img.$t : ImgGlass } alt="" />
                            </NavLink>
                        </div>
                        <div className="choices__name">{p.gsx$name.$t}</div>
                        <div className="choices__cost">{p.gsx$cost.$t} грн</div>
                        {/* method some - find an id element and witch == id in massive and return true / false */}
                        <button className="choices__btn" disabled={props.folowingInProgress.some(id => id == p.gsx$id.$t)} onClick={() => {
                            props.toggleFollowingProgress(true, p.gsx$id.$t)
                            props.addItemToCard(p)
                        }}>Купити</button>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Choices