import { stopSubmit, FormErrors, actionTypes } from 'redux-form';
import { productsAPI, ResultCodesEnum } from '../Api/Api';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './Redux-Store';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    isFetching: false as boolean
}

export type initialStateType = typeof initialState
// Reducer - function through which state will modificate

const AuthReducer = (state = initialState, action: setAuthUserDataActionType): initialStateType => {

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

type setAuthUserDataActionPayloadType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA, payload: { id, login, email, isAuth }
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, setAuthUserDataActionType>

export const getProfile = (): ThunkType => async (dispatch) => {

    let profileData = await productsAPI.getProfile()

    if (profileData.resultCode === ResultCodesEnum.Success) {
        let { id, login, email } = profileData.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch:any) => {

    let loginData = await productsAPI.login(email, password, rememberMe)
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getProfile())
    }
    else {
        if (loginData.resultCode == ResultCodesEnum.Error) {
            dispatch(stopSubmit("login", {
                password: "Електронна пошта або пароль неправильний"
            }))
        };
    }
}

export const logout = (): ThunkType => async (dispatch) => {

    let response = await productsAPI.logout()

    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default AuthReducer;