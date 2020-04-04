import createRootReducer from '../reducers'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {showDispatchAction} from "../middlewares";

export const store = createStore(createRootReducer(), compose(applyMiddleware(thunk), applyMiddleware(showDispatchAction)));