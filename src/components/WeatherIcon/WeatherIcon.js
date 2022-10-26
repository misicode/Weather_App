import ReactAnimatedWeather from "react-animated-weather";

import '../../assets/Variables.css';
import './WeatherIcon.css';

export default function WeatherIcon(props) {
    const ICON_MAP = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "SLEET",
        "09n": "SLEET",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "FOG",
        "11n": "FOG",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "WIND",
        "50n": "WIND",
    };

    return (
        <ReactAnimatedWeather
            icon={ ICON_MAP[props.code] }
            color="#d0d0d0"
            size={ props.size }
            animate={ true }
        />
    );
}  