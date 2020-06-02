import React from 'react';
import { connect } from 'react-redux';
import { getProductsFromAPI,addItemToCard, toggleFollowingProgress} from '../Redux/Choices-Reducer';
import Choices from './Choices';
import Preloader from './../Common/Preloader/Preloader';
import { getProducts, getIsFetching, getFolowingInProgress} from './../Redux/Choices-Selectors';
import { useEffect } from 'react';

const ChoicesContainer = (props) => {

    useEffect(() => {
        props.getProductsFromAPI()
    }, [])

    return <>
        {props.isFetching ? <Preloader /> : null}
        <Choices
            products={props.products}
            isFetching={props.isFetching}
            addItemToCard={props.addItemToCard}
            toggleFollowingProgress={props.toggleFollowingProgress}
            folowingInProgress={props.folowingInProgress}
        />
    </>
}

let mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        isFetching: getIsFetching(state),
        folowingInProgress: getFolowingInProgress(state),
    }
}
// CONNECT - HOC , WHICH TAKE ONE COMPONTNT AND RETURN OTHER COMPONENT
export default connect(mapStateToProps, { getProductsFromAPI,addItemToCard, toggleFollowingProgress})(ChoicesContainer)