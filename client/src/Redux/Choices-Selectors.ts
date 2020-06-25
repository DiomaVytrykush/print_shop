import { AppStateType } from './Redux-Store';
import { createSelector } from "reselect"

const getProductsSelector = (state:AppStateType) => {
    return state.choicesPage.products
}

export const getProducts = createSelector(getProductsSelector, (products) => {
    return products.filter(u => true)
})

export const getIsFetching = (state:AppStateType) => {
    return state.choicesPage.isFetching
}

export const getFolowingInProgress = (state:AppStateType) => {
    return state.choicesPage.folowingInProgress
}
