import WeatherIcon from "../WeatherIcon/WeatherIcon";

import '../../assets/Variables.css';
import './WeatherInfo.css';

export default function WeatherInfo(props) {
    function formatTime() {
        let hours = props.data.date.getHours();
        let minutes = props.data.date.getMinutes();
    
        if (hours < 10)
            hours = `0${ hours }`;
        if (minutes < 10)
            minutes = `0${ minutes }`;
        
        return (hours < 12) ? `${ hours }:${ minutes } AM` : `${ hours }:${ minutes } PM`;
    }

    return (
        <div className="content-info">
            <div className="info-details">
                <h1>{ props.data.city }, { props.data.country }</h1>
                <div className="details-clim">
                    <p>Last update: { formatTime() }</p>
                    <p>Humidity: <span>{ props.data.humidity } %</span></p>
                    <p>Wind: <span>{ props.data.wind } km/h</span></p>
                </div>
            </div>
            <div className="info-general">
                <div className="flex-center">
                    <WeatherIcon code={ props.data.icon } size={ 55 } />
                    <div className="info-temp">
                        <p>{ Math.round(props.data.temperature) }</p>
                        <span>°</span>
                        <span>C</span>
                    </div>
                </div>
                <p>{ props.data.climate }</p>
            </div>
        </div>
    );
}  