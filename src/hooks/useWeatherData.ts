import { useState, useEffect } from "react";

import { searchWeatherByCity, searchWeatherByCoords } from "../helpers/getWeather";
import { Weather, Coordinates, WeatherDataResponse } from "../types";

export const useWeatherData = (arg: string | number | Coordinates) => {
  const [weatherData, setWeatherData] = useState<Weather>();

  const getWeatherData = async () => {
    let data: WeatherDataResponse;
    
    if (typeof arg === "string" || typeof arg === "number") {
      // Si el parámetro es de tipo cadena o númerico, busca el clima por el nombre de la ciudad o el código postal
      data = await searchWeatherByCity(arg);
    } else {
      // Si es de otro tipo, infiere que la búsqueda será por las coordenadas
      data = await searchWeatherByCoords(arg);
    }

    if (!data) return;

    // Asigna los datos del clima
    setWeatherData({
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt * 1000),
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].icon,
      temperature: data.main.temp,
      climate: data.weather[0].main,
      coordinates: data.coord,
    });
  };

  useEffect(() => {
    getWeatherData();
  }, [arg]);

  return weatherData;
};
