import WeatherIcon from "../WeatherIcon/WeatherIcon";

import './ForecastCard.css';

export default function ForecastCard(props) {
    const DAYS = {
        "0": "Sunday",
        "1": "Monday",
        "2": "Tuesday",
        "3": "Wednesday",
        "4": "Thursday",
        "5": "Friday",
        "6": "Saturday",
    };
    let day = new Date(props.data.dt * 1000);
    
    return (
        <>
            <h2>{ DAYS[day.getDay()] }</h2>
            <div className="forecast-info">
                <div className="flex-center">
                    <WeatherIcon code={ props.data.weather[0].icon } size={ 35 } />
                    <div>
                        <p className="temp-max">{ props.data.temp.max }°</p>
                        <p className="temp-min">{ props.data.temp.min }°</p>
                    </div>
                </div>
                <p className="clim-week">{ props.data.weather[0].main }</p>
                <div className="forecast-details">
                    <hr />
                    <p>
                        Humidity: <span className="humi-week">{ props.data.humidity } %</span>
                    </p>
                    <p>
                        Wind: <span className="wind-week">{ props.data.wind_speed } km/h</span>
                    </p>
                </div>
            </div>
        </>
    );
}  