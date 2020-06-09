import { productsAPI } from './../Api/Api';

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
    products: [],
    item: [],
    postDataCity: [],
    postDataArea: [],
    isFetching: false,
    itemsInCard: [],
    folowingInProgress: [],
}

// Reducer - function through which state will modificate

const ChoicesReducer = (state = initialState, action) => {

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
export const setProducts = (products) => ({ type: SET_PRODUCTS, products })
export const setItem = (item) => ({ type: SET_ITEM, item })
export const setPostDataCity = (data) => ({ type: SET_POST_DATA_CITY, data })
export const setpostDataArea = (data) => ({ type: SET_POST_DATA_AREA, data })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, itemId) => ({ type: TOGGLE_IS_FOLLOWING__PROGRESS, isFetching, itemId })
export const addItemToCard = (item) => ({ type: ADD_ITEM_TO_CARD, item })
export const deleteItemFromCard = (itemId) => ({ type: DELETE_ITEM_FROM_CARD, itemId })
export const plusAmount = (itemId) => ({ type: PLUS__AMOUNT, itemId })
export const minusAmount = (itemId) => ({ type: MINUS__AMOUNT, itemId })


// THUNK - FUNCTION WHICH TAKE METHOD DISPATCH AND DO SOME ASYNC OPERATIONS AND DISPATCHES
export const getProductsFromAPI = () => async (dispatch) => {

    dispatch(toggleIsFetching(true))

    let entry = await productsAPI.getProducts();
    dispatch(toggleIsFetching(false))
    dispatch(setProducts(entry))
}

export const getItemsFromAPI = () => async (dispatch) => {
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

export const getpostDataCityFromAPI = () => async (dispatch) => {
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

export const getpostDataAreaFromAPI = () => async (dispatch) => {
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