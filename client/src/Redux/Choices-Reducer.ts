import { AppStateType } from './Redux-Store';
import { productsAPI } from '../Api/Api';
import { ThunkAction } from 'redux-thunk';

const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING__PROGRESS = 'TOGGLE_IS_FOLLOWING__PROGRESS';
const SET_ITEM = 'SET_ITEM';
const ADD_ITEM_TO_CARD = 'ADD_ITEM_TO_CARD';
const DELETE_ITEM_FROM_CARD = 'DELETE_ITEM_FROM_CARD';
const PLUS__AMOUNT = 'PLUS__AMOUNT';
const MINUS__AMOUNT = 'MINUS__AMOUNT';
const SET_POST_DATA_CITY = 'SET_POST_DATA_CITY';
const SET_POST_DATA_AREA = 'SET_POST_DATA__DEPARTMENT_AREA';

let initialState = {
    products: [] as Array<any>,
    item: [] as Array<any>,
    postDataCity: [] as Array<any>,
    postDataArea: [] as Array<any>,
    isFetching: false as boolean,
    itemsInCard: [] as Array<any>,
    folowingInProgress: [] as Array<number>, //Array of items ids
}

type initialStateType = typeof initialState

// Reducer - function through which state will modificate

const ChoicesReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case SET_ITEM:
            return {
                ...state,
                item: action.item
            }
        case SET_POST_DATA_CITY:
            return {
                ...state,
                postDataCity: action.data
            }
        case SET_POST_DATA_AREA:
            return {
                ...state,
                postDataArea: action.data
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING__PROGRESS:
            return {
                ...state,
                folowingInProgress: action.isFetching
                    ? [...state.folowingInProgress, action.itemId]
                    : state.folowingInProgress.filter(id => id != action.itemId)
            }
        case ADD_ITEM_TO_CARD:
            return {
                ...state,
                itemsInCard: state.itemsInCard.concat(action.item),
            }
        case DELETE_ITEM_FROM_CARD:
            return {
                ...state,
                itemsInCard: state.itemsInCard.filter(r => r.id !== action.itemId),
            }
        case PLUS__AMOUNT:
            return {
                ...state,
                itemsInCard: state.itemsInCard.map(item => {
                    if (action.itemId === item.gsx$id.$t) {
                        return { ...item, count: ++item.gsx$count.$t }
                    }
                    return item
                })
            }
        case MINUS__AMOUNT:
            return {
                ...state,
                itemsInCard: state.itemsInCard.map(item => {
                    if (action.itemId === item.gsx$id.$t) {
                        return { ...item, count: --item.gsx$count.$t }
                    }
                    return item
                })
            }
        default:
            return state
    }
}
type ActionsTypes = setProductsActionType | setItemActionType | setPostDataCityActionType |
    setpostDataAreaActionType | toggleIsFetchingActionType | toggleFollowingProgressActionType |
    addItemToCardActionType | deleteItemFromCardActionType | plusAmountActionType | minusAmountActionType


export const setProducts = (products: Array<any>): setProductsActionType => ({ type: SET_PRODUCTS, products })
type setProductsActionType = {
    type: typeof SET_PRODUCTS
    products: Array<any>
}
export const setItem = (item: Array<any>): setItemActionType => ({ type: SET_ITEM, item })
type setItemActionType = {
    type: typeof SET_ITEM
    item: Array<any>
}
export const setPostDataCity = (data: Array<any>): setPostDataCityActionType => ({ type: SET_POST_DATA_CITY, data })
type setPostDataCityActionType = {
    type: typeof SET_POST_DATA_CITY
    data: Array<any>
}
export const setpostDataArea = (data: Array<any>): setpostDataAreaActionType => ({ type: SET_POST_DATA_AREA, data })
type setpostDataAreaActionType = {
    type: typeof SET_POST_DATA_AREA
    data: Array<any>
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleFollowingProgress = (isFetching: boolean, itemId: number): toggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING__PROGRESS, isFetching, itemId })
type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING__PROGRESS
    isFetching: boolean,
    itemId: number
}
export const addItemToCard = (item: Array<any>): addItemToCardActionType => ({ type: ADD_ITEM_TO_CARD, item })
type addItemToCardActionType = {
    type: typeof ADD_ITEM_TO_CARD
    item: Array<any>
}
export const deleteItemFromCard = (itemId: number): deleteItemFromCardActionType => ({ type: DELETE_ITEM_FROM_CARD, itemId })
type deleteItemFromCardActionType = {
    type: typeof DELETE_ITEM_FROM_CARD
    itemId: number
}
export const plusAmount = (itemId: number): plusAmountActionType => ({ type: PLUS__AMOUNT, itemId })
type plusAmountActionType = {
    type: typeof PLUS__AMOUNT
    itemId: number
}
export const minusAmount = (itemId: number): minusAmountActionType => ({ type: MINUS__AMOUNT, itemId })
type minusAmountActionType = {
    type: typeof MINUS__AMOUNT
    itemId: number
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
// THUNK - FUNCTION WHICH TAKE METHOD DISPATCH AND DO SOME ASYNC OPERATIONS AND DISPATCHES
export const getProductsFromAPI = (): ThunkType => async (dispatch, getState) => {
    dispatch(toggleIsFetching(true))

    let entry = await productsAPI.getProducts();
    dispatch(toggleIsFetching(false))
    dispatch(setProducts(entry))
}

export const getItemsFromAPI = (): ThunkType => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))

        let data = await productsAPI.getItems();
        dispatch(toggleIsFetching(false))
        dispatch(setItem(data));
    }
    catch (error) {
        alert(error.message)
    }
}

export const getpostDataCityFromAPI = (): ThunkType => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))

        let data = await productsAPI.postDataCity();
        dispatch(toggleIsFetching(false))
        dispatch(setPostDataCity(data));
    }
    catch (error) {
        alert(error.message)
    }
}

export const getpostDataAreaFromAPI = (): ThunkType => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true))

        let data = await productsAPI.postDataArea();
        dispatch(toggleIsFetching(false))
        dispatch(setpostDataArea(data));
    }
    catch (error) {
        alert(error.message)
    }
}

export default ChoicesReducer;  