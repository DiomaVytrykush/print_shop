import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reviewReducer from './Reviews-Reducer';
import mainReducer from './Main-Reducer';
import choicesReducer from './Choices-Reducer';
import AuthReducer from './Auth-Reducer';
import ThunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    mainPage: mainReducer,
    reviewsPage: reviewReducer,
    choicesPage: choicesReducer,
    auth: AuthReducer,
    form: formReducer,
});

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)))
//@ts-ignore
window.__store__ = store

export default store