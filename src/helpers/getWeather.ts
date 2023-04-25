import axios from "axios";
import { toast } from "react-toastify";

import { Coordinates } from "../types";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const searchWeatherByCity = async (city: string | number) => {
  try {
    const { data } = await api.get(`weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
    return data;
  } catch (err) {
    if (err.response.status === 404) {
      toast.error("City name or zip code not found :(");
    }
  }
}

export const searchWeatherByCoords = async (coords: Coordinates) => {
  try {
    const { data } = await api.get(`weather?lat=${coords.lat}&lon=${coords.lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
    return data;
  } catch (err) {
    if (err.response.status === 404) {
      toast.error("Location coordinates not found :(");
    }
  }
}

export const searchForecast = async (coords: Coordinates) => {
  try {
    const { data } = await api.get(`onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
    return data;
  } catch (err) {
    if (err.response.status === 404) {
      toast.error("Weather forecast not found :(");
    }
  }
}
