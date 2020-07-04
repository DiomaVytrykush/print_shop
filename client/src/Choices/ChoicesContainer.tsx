import React from 'react';
import { connect } from 'react-redux';
import { getProductsFromAPI, addItemToCard, toggleFollowingProgress } from '../Redux/Choices-Reducer';
import Choices from './Choices';
import Preloader from '../Common/Preloader/Preloader';
import { getProducts, getIsFetching, getFolowingInProgress } from '../Redux/Choices-Selectors';
import { useEffect } from 'react';
import { AppStateType } from '../Redux/Redux-Store';

type OwnPropsType = {}

type mapStateToPropsType = {
    isFetching: boolean
    products: Array<any>
    folowingInProgress: Array<number>
}

type mapDispatchToPropsType = {
    getProductsFromAPI: () => void
    addItemToCard: (item: Array<any>) => void
    toggleFollowingProgress: (isFetching: boolean, itemId: number) => void
}

type propsType = OwnPropsType & mapStateToPropsType & mapDispatchToPropsType


const ChoicesContainer = (props: propsType) => {

    useEffect(() => {
        props.getProductsFromAPI()
    }, [])

    return <>
        {props.isFetching ? <Preloader /> : null}
        <Choices
            products={props.products}
            addItemToCard={props.addItemToCard}
            toggleFollowingProgress={props.toggleFollowingProgress}
            folowingInProgress={props.folowingInProgress}
        />
    </>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        products: getProducts(state),
        isFetching: getIsFetching(state),
        folowingInProgress: getFolowingInProgress(state),
    }
}
// CONNECT - HOC , WHICH TAKE ONE COMPONTNT AND RETURN OTHER COMPONENT
export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, { getProductsFromAPI, addItemToCard, toggleFollowingProgress })(ChoicesContainer)

