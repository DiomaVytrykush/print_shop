import { stopSubmit } from 'redux-form';
import { productsAPI } from '../Api/Api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null as  number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false as boolean,
    isFetching: false as boolean
}

export type initialStateType = typeof initialState
// Reducer - function through which state will modificate

const AuthReducer = (state = initialState, action: any): initialStateType => {

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

export const getProfile = () => async (dispatch: any) => {

    let response = await productsAPI.getProfile()

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {

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

export const logout = () => async (dispatch: any) => {

    let response = await productsAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default AuthReducer;