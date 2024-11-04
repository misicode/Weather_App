import { useState, useEffect } from "react";

import { searchForecast } from "../helpers/getWeather";
import { Coordinates, ForecastDay } from "../types";

export const useForecastData = (coords: Coordinates) => {
  const [forecastData, setForecastData] = useState<ForecastDay[]>();

  const getForecast = async () => {
    const { list } = await searchForecast(coords);

    if (!list) return;

    const filteredList: ForecastDay[] = [];
    let lastDayKey = (new Date()).toLocaleDateString('en-CA');

    for (const item of list) {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toLocaleDateString('en-CA');

      if (dayKey !== lastDayKey) {
        filteredList.push(item);
        lastDayKey = dayKey;
      }
    }

    setForecastData(filteredList);
  };

  useEffect(() => {
    getForecast();
  }, [coords]);

  return forecastData;
};
