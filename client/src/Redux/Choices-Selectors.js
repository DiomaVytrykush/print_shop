import { createSelector } from "reselect"

const getProductsSelector = (state) => {
    return state.choicesPage.products
}

export const getProducts = createSelector(getProductsSelector, (products) => {
    return products.filter(u => true)
})

export const getIsFetching = (state) => {
    return state.choicesPage.isFetching
}

export const getFolowingInProgress = (state) => {
    return state.choicesPage.folowingInProgress
}
