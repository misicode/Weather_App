import axios from "axios";
import React, { useState } from "react";

import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import ForecastCard from './components/ForecastCard';
import FormatDate from "./components/FormatDate";
import WeatherInfo from './components/WeatherInfo';

import './App.css';

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      climate: response.data.weather[0].main,
      coordinates: response.data.coordinates,
    });
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ process.env.REACT_APP_API_KEY }&units=metric`;

    axios.get(apiUrl)
      .then(handleResponse)
      .catch(err => console.error(err));
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="card">
          <section className="weather-today">
            <div className="content">
              <FormatDate date={ weatherData.date } />
              <WeatherInfo data={ weatherData } />
            </div>
          </section>
          <section className="weather-week">
            <div className="content">
              <SearchBar onChange={ handleCity } onSubmit={ handleSubmit } />
              <div className="content-week">
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  } else {
    search();
  }
}

export default Weather;