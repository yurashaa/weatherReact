import {GET_FORECAST, GET_WEATHER, GET_WEATHER_ERROR, LOADING_END, LOADING_START} from "../action-types";

const initialState = {
    isLoading: false,
    error: '',
    weather: null,
    forecast: [],
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START: {
            return {...state, isLoading: true};
        }

        case LOADING_END: {
            return {...state, isLoading: false}
        }

        case GET_WEATHER_ERROR: {
            return {...state, error: action.payload}
        }

        case GET_WEATHER: {
            return {...state, weather: action.payload}
        }

        case GET_FORECAST: {
            return {...state, forecast: action.payload}
        }

        default : return state;
    }
};