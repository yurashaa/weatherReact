import React, {Component, Fragment} from 'react';
import city from '../../assets/city.jpeg'
import {batch} from "react-redux";
import {Bookmark} from "../../components/Bookmark/Bookmark";
import './HomePage.scss'
import {ForecastList} from "../../components/ForecastList/ForecastList";

const CN = 'weather';

export class HomePage extends Component {

    componentDidMount() {
        console.log('props', this.props);
        const {actions: {getWeather, getForecast}} = this.props;
        batch(() => {
            getWeather();
            getForecast();
        })
    }

    render() {
        const {weather, isLoading, error, forecast} = this.props.weatherConfig;
        return (
            <Fragment>
                {
                   weather && !!forecast.length && !error && (
                        <div className={'back'}>
                            <div className={`${CN}`}>

                                <div className={`${CN}__img-div`}>
                                    {city && <img src={city} alt=""/>}
                                </div>

                                <Bookmark  {...weather}/>

                                <ForecastList forecast={forecast} />

                            </div>
                        </div>)
                }
                {
                    isLoading && <div><h3>Loading...</h3></div>
                }
            </Fragment>
        );
    }
}