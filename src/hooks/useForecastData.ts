import { useState, useEffect } from "react";

import { searchForecast } from "../helpers/getWeather";
import { Coordinates, ForecastDay } from "../types";

export const useForecastData = (coords: Coordinates) => {
  const [forecastData, setForecastData] = useState<ForecastDay[]>();

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
