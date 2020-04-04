import {combineReducers} from "redux";
import {weatherReducer} from "./weather.reducer";

export default () => {
    return combineReducers({
        weather: weatherReducer,
    })
}