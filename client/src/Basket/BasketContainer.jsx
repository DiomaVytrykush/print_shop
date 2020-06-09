import React from 'react';
import Basket from './Basket'
import './Basket.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { deleteItemFromCard, plusAmount, minusAmount, getpostDataCityFromAPI, getpostDataAreaFromAPI, toggleFollowingProgress }
    from './../Redux/Choices-Reducer'
import { useEffect } from 'react';
import EmptyBasket from './img/emptybasket.svg'


const BasketContainer = (props) => {

    useEffect(() => {
        props.getpostDataCityFromAPI()
        props.getpostDataAreaFromAPI()
    }, [])

    return (
        props.itemsInCard != 0
            ? <Basket {...props} />
            : <Route path='*' render={() => <div className="empty__basket"><h2>КОРЗИНА ПУСТА</h2><img src={EmptyBasket} /></div>} />
    )
}

let mapStateToProps = (state) => ({
    itemsInCard: state.choicesPage.itemsInCard,
    postDataCity: state.choicesPage.postDataCity,
    postDataArea: state.choicesPage.postDataArea,
})

export default connect(mapStateToProps, {
    deleteItemFromCard, plusAmount, minusAmount, getpostDataCityFromAPI, getpostDataAreaFromAPI, toggleFollowingProgress
})(BasketContainer);

