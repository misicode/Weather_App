import axios from "axios";
import React, { useState, useEffect } from "react";

import ForecastCard from '../../components/ForecastCard/ForecastCard';
import Spinner from '../../components/Spinner/Spinner';

import './Forecast.css';

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coords]);

    function handleForecastResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    function searchForecast() {
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${ props.coords.lat }&lon=${ props.coords.lon }&exclude=minutely,hourly&appid=${ process.env.REACT_APP_API_KEY }&units=metric`;

        axios.get(apiUrl)
            .then(handleForecastResponse)
            .catch(err => console.error(err));
    }

    if (loaded) {
        return (
            <div className="content-week">
                { forecastData.map((day, index) => {
                    if (index > 0 && index < 7) {
                        return (
                            <div className="forecast-card" key={ index }>
                                <ForecastCard data={ day } />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    } else {
        searchForecast();
        return (
            <Spinner />
        );
    }
}  