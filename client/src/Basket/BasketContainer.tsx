import React from 'react';
import Basket from './Basket'
import './Basket.css';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { deleteItemFromCard, plusAmount, minusAmount, getpostDataCityFromAPI, getpostDataAreaFromAPI, toggleFollowingProgress }
    from '../Redux/Choices-Reducer'
import { useEffect } from 'react';
import EmptyBasket from './img/emptybasket.svg'
import { AppStateType } from '../Redux/Redux-Store';

type OwnPropsType = {}

type mapStateToPropsType = {
    itemsInCard: Array<any>
    postDataCity: Array<any>
    postDataArea: Array<any>
}

type mapDispatchToPropsType = {
    deleteItemFromCard: (itemId: number) => void
    getpostDataCityFromAPI: () => void
    getpostDataAreaFromAPI: () => void
    plusAmount: (itemId: number) => void
    minusAmount: (itemId: number) => void
    toggleFollowingProgress: (isFetching: boolean, itemId: number) => void
}

type propsType = OwnPropsType & mapStateToPropsType & mapDispatchToPropsType

const BasketContainer = (props: propsType) => {

    useEffect(() => {
        props.getpostDataCityFromAPI()
        props.getpostDataAreaFromAPI()
    }, [])

    return (
        props.itemsInCard.length === 0
            ? <Route path='*' render={() => <div className="empty__basket"><h2>КОРЗИНА ПОРОЖНЯ</h2><img src={EmptyBasket} /></div>} />
            : <Basket {...props} />
    )
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    itemsInCard: state.choicesPage.itemsInCard,
    postDataCity: state.choicesPage.postDataCity,
    postDataArea: state.choicesPage.postDataArea,
})

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, {
        deleteItemFromCard, plusAmount, minusAmount, getpostDataCityFromAPI, getpostDataAreaFromAPI, toggleFollowingProgress
    })(BasketContainer);

