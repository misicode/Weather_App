import WeatherIcon from "../WeatherIcon/WeatherIcon";

import { Weather } from "../../types";

import "./WeatherInfo.css";

type WeatherInfoProps = {
  data: Weather;
};

const WeatherInfo = ({
  data: { date, city, country, icon, temperature, climate, humidity, wind },
}: WeatherInfoProps) => {
  const formatTime = () => {
    let hours = date!.getHours().toString();
    let minutes = date!.getMinutes().toString();

    if (Number(hours) < 10) hours = `0${hours}`;
    if (Number(minutes) < 10) minutes = `0${minutes}`;

    return Number(hours) < 12
      ? `${hours}:${minutes} AM`
      : `${hours}:${minutes} PM`;
  }

  return (
    <div className="content-info">
      <div className="info-details">
        <h1>
          { city }, { country }
        </h1>
        <div className="details-clim">
          <p>Last update: { formatTime() }</p>
          <p>
            Humidity: <span>{ humidity } %</span>
          </p>
          <p>
            Wind: <span>{ wind } km/h</span>
          </p>
        </div>
      </div>
      <div className="info-general">
        <div className="flex-center">
          <WeatherIcon code={ icon } size={ 55 } />
          <div className="info-temp">
            <p>{ Math.round(temperature) }</p>
            <span>°</span>
            <span>C</span>
          </div>
        </div>
        <p>{ climate }</p>
      </div>
    </div>
  );
}

export default WeatherInfo;