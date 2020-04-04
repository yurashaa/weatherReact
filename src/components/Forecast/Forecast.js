import React from 'react';
import './Forecast.scss'

const CN = 'forecast';

export const Forecast = ({options}) => {

    const getWeekDay = (number) => {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];

        return week[number];
    };

    const {
        day: {dt_txt, main: {temp: day_temp}, weather: [{description, icon}]},
        night: {main: {temp: night_temp}}
    } = options;

    return (
        <div className={`${CN}`}>
            <div className={`${CN}__text-div`}>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                <div>
                    <div className={`${CN}__week-day`}>{getWeekDay((new Date(dt_txt)).getDay())}</div>
                    <div className={`${CN}__desc`}>{description}</div>
                </div>
            </div>
            <div className={`${CN}__temps`}>
                {Math.round(day_temp)}°C/{Math.round(night_temp)}°C
            </div>
        </div>
    );
};