import {GET_FORECAST, GET_WEATHER, GET_WEATHER_ERROR, LOADING_END, LOADING_START} from "../action-types";
import {batch} from "react-redux";

const getWeatherSuccess = (weather) => ({type: GET_WEATHER, payload: weather});
const getForecastSuccess = (forecast) => ({type: GET_FORECAST, payload: forecast});
const getWeatherError = (error) => ({type: GET_WEATHER_ERROR, payload: error});

const startLoading = () => ({type: LOADING_START});
const endLoading = () => ({type: LOADING_END});

export const getWeather = (city) => {
    return (dispatch) =>{
        dispatch(startLoading());

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city ? city : 'lviv'}&appid=dd2408afcba03fbe2cf444eb94492173&units=metric`)
            .then(res => {

                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                batch(() => {
                    dispatch(getWeatherSuccess(data));
                    dispatch(endLoading());
                })
            })
            .catch(e => {
                batch(() => {
                    dispatch(getWeatherError(e));
                    dispatch(endLoading());
                })
            })
    }
};

export const getForecast = (city) => {
    return (dispatch) =>{
        dispatch(startLoading());

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city ? city : 'lviv'}&appid=dd2408afcba03fbe2cf444eb94492173&units=metric`)
            .then(res => {

                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                let newList = [];
                let newObj = {
                    day: null,
                    night: null,
                };

                data.list.forEach(item => {
                    if((new Date(item.dt_txt)).getDate() - (new Date()).getDate()){
                        if((new Date(item.dt_txt)).getHours() === 3){
                            newObj.night = item;
                        }
                        else if((new Date(item.dt_txt)).getHours() === 15){
                            newObj.day = item;
                            newList.push(newObj);
                            newObj = {day: null, night: null}
                        }
                    }
                });
                console.log(newList);
                batch(() => {
                    dispatch(getForecastSuccess(newList));
                    dispatch(endLoading());
                })
            })
            .catch(e => {
                batch(() => {
                    dispatch(getWeatherError(e));
                    dispatch(endLoading());
                })
            })
    }
};