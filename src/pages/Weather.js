import axios from "axios";
import React, { useState } from "react";

import SearchBar from '../components/SearchBar/SearchBar';
import Footer from '../parts/Footer/Footer';
import FormatDate from "../components/FormatDate/FormatDate";
import Forecast from "../parts/Forecast/Forecast";
import WeatherInfo from '../components/WeatherInfo/WeatherInfo';

import '../assets/Variables.css';
import './Weather.css';

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleWeatherResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      climate: response.data.weather[0].main,
      coordinates: response.data.coord,
    });
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
    event.target.reset();
  }

  function searchWeather() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ process.env.REACT_APP_API_KEY }&units=metric`;

    axios.get(apiUrl)
      .then(handleWeatherResponse)
      .catch(err => console.error(err));
  }

  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ process.env.REACT_APP_API_KEY }&units=metric`;
    axios.get(apiUrl)
      .then(handleWeatherResponse)
      .catch(err => console.error(err));
  }

  if (weatherData.ready) {
    return (
      <>
        <div className={`card ${ props.cardImage }`}>
          <section className="weather-today">
            <div className="content">
              <FormatDate date={ weatherData.date } />
              <WeatherInfo data={ weatherData } />
            </div>
          </section>
          <section className="weather-week">
            <div className="content full-height">
              <SearchBar onChange={ handleCity } onSubmit={ handleSubmit } onClick={ getCurrentPosition } />
              <Forecast coords={ weatherData.coordinates } />
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  } else {
    searchWeather();
  }
}

export default Weather;