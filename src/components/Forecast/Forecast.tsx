import ForecastCard from "./ForecastCard/ForecastCard";
import Spinner from "../Spinner/Spinner";

import { useForecastData } from "../../hooks/useForecastData";
import { Coordinates, ForecastDay } from "../../types";

import "./Forecast.css";

type ForecastProps = {
  coords: Coordinates;
};

const Forecast = ({ coords }: ForecastProps) => {
  const forecastData = useForecastData(coords);

  if (forecastData) {
    return (
      <div className="content-week">
        {forecastData.map((day: ForecastDay, index: number) => {
          if (index > 0 && index < 7) {
            return (
              <div className="forecast-card" key={ day.dt } data-testid={`forecast-group-${ index }`}>
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