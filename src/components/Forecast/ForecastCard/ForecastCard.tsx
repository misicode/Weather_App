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
            <p className="temp-max">{ temp.max }°</p>
            <p className="temp-min">{ temp.min }°</p>
          </div>
        </div>
        <p className="clim-week">{ weather[0].main }</p>
        <div className="forecast-details">
          <hr />
          <p>
            Humidity: <span className="humi-week">{ humidity } %</span>
          </p>
          <p>
            Wind: <span className="wind-week">{ wind_speed } km/h</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForecastCard;