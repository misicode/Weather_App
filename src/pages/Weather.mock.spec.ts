import { Coordinates, Weather, WeatherDataResponse } from "../types";

export const coords: Coordinates = { lat: -12.0432, lon: -77.0282 };

export const weatherDataResponse: WeatherDataResponse = {
  name: "Lima",
  sys: { country: "PE" },
  dt: 1683478800,
  main: { temp: 21, humidity: 78 },
  wind: { speed: 4.61 },
  weather: [{ main: "Clouds", icon: "04d" }],
  coord: coords,
};

export const weatherData: Weather = {
  city: "Lima",
  country: "PE",
  date: new Date(1683478800 * 1000),
  humidity: 78,
  wind: 4.61,
  icon: "04d",
  temperature: 21,
  climate: "Clouds",
  coordinates: coords,
};
