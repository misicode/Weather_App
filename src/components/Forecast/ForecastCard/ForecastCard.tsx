import WeatherIcon from "../../WeatherIcon/WeatherIcon";

import { DAYS } from "../../../assets/Constants";
import { Forecast } from "../../../types";

import "./ForecastCard.css";

type ForecastProps = {
  data: Forecast;
};

const ForecastCard = ({
  data: { dt, weather, temp, humidity, wind_speed },
}: ForecastProps) => {
  const day = new Date(dt * 1000);

  return (
    <>
      <h2>{ DAYS[day.getDay()] }</h2>
      <div className="forecast-info">
        <div className="flex-center">
          <WeatherIcon code={ weather[0].icon } size={ 35 } />
          <div>
            <p className="temp-max" role="note">{ temp.max }°</p>
            <p className="temp-min" role="note">{ temp.min }°</p>
          </div>
        </div>
        <p className="clim-week" role="note">{ weather[0].main }</p>
        <div className="forecast-details">
          <hr />
          <p role="note">
            Humidity: <span className="humi-week">{ humidity } %</span>
          </p>
          <p role="note">
            Wind: <span className="wind-week">{ wind_speed } km/h</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForecastCard;