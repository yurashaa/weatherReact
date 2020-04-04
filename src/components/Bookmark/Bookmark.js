import React from 'react';
import './Bookmark.scss'

const CN = 'bookmark';

export const Bookmark = (props) => {

    const [{ icon }] = props.weather;
    const { temp } = props.main;

    return (
        <div className={`${CN}`}>
            <div className={`${CN}__bookmark1`}>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
            </div>
            <div className={`${CN}__bookmark2`}>{Math.round(temp)}°C</div>
        </div>
    );
};
