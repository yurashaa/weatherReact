import React from 'react';
import {Forecast} from "../Forecast/Forecast";
import './ForecastList.scss'

const CN = 'forecast-list';

export const ForecastList = ({ forecast }) => {
    return (
        <div className={`${CN}`}>
            <p className={`${CN}_top-text`}><b>5</b> days forecast</p>
            {
                !!forecast.length &&
                forecast.map(item => {
                    return (
                        <Forecast key={item.day.dt_txt} options={item} />
                    )
                })
            }
        </div>
    );
};
