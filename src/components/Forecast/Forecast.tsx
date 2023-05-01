import ForecastCard from "./ForecastCard/ForecastCard";
import Spinner from "../Spinner/Spinner";

import { useForecastData } from "../../hooks/useForecastData";
import { Coordinates, Forecast } from "../../types";

import "./Forecast.css";

type ForecastProps = {
  coords: Coordinates;
};

const Forecast = ({ coords }: ForecastProps) => {
  const forecastData = useForecastData(coords);

  if (forecastData) {
    return (
      <div className="content-week">
        {forecastData.map((day: Forecast, index: number) => {
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
  }
  
  return <Spinner />;
}

export default Forecast;