import { useState, useEffect } from "react";

import { searchForecast } from "../helpers/getWeather";
import { Coordinates, Forecast } from "../types";

export const useForecastData = (coords: Coordinates) => {
  const [forecastData, setForecastData] = useState<Forecast[]>();

  const getForecast = async () => {
    const { daily } = await searchForecast(coords);

    if (!daily) return;

    setForecastData(daily);
  };

  useEffect(() => {
    getForecast();
  }, [coords]);

  return forecastData;
};
