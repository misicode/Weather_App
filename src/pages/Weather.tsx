import { lazy, useState } from "react";

import {
  Footer,
  Forecast,
  FormatDate,
  Loader,
  SearchBar,
  WeatherInfo,
} from "../components";
import { useWeatherData } from "../hooks/useWeatherData";
import { Coordinates } from "../types";

import "./Weather.css";

const Alert = lazy(() => import("../components").then(({ Alert }) => ({ default: Alert })));

type WeatherProps = {
  defaultCity: string;
  date: Date;
  cardBackground: string;
};

const Weather = ({ defaultCity, date, cardBackground }: WeatherProps) => {
  const [city, setCity] = useState<string | number | Coordinates>(defaultCity);
  const weatherData = useWeatherData(city);

  const onChangeCity = ( newCity: string | number | Coordinates ) => {
    setCity(newCity);
  }

  if (weatherData) {
    return (
      <>
        <Alert />
        <div className={`card ${ cardBackground }`}>
          <section className="weather-today">
            <div className="content h-full">
              <FormatDate date={ weatherData.date } />
              <WeatherInfo data={ weatherData } />
            </div>
          </section>
          <section className="weather-week">
            <div className="content h-full">
              <SearchBar onNewCity={ onChangeCity } />
              <Forecast coords={ weatherData.coordinates } />
            </div>
          </section>
        </div>
        <Footer year={ date.getFullYear() } />
      </>
    );
  } 
  
  return <Loader />
}

export default Weather;
