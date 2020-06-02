import { productsAPI } from './../Api/Api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}

// Reducer - function through which state will modificate

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}
export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { id, login, email, isAuth } })
export const getProfile = () => async (dispatch) => {

    let response = await productsAPI.getProfile()

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await productsAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getProfile())
    }
    else {
        dispatch(stopSubmit("login", {
            password: "Електронна пошта або пароль неправильний"
        }));
    }
}

export const logout = () => async (dispatch) => {

    let response = await productsAPI.logout()
    
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default AuthReducer;