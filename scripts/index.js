/***********************************************************
 * VARIABLES
 ***********************************************************/

let dateNow = new Date();

// Selectores de elementos
let place = document.getElementById("place");
let daytime = document.getElementById("daytime");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temperature");
let climate = document.getElementById("climate");
let city = document.getElementById("city");
let forecast = document.querySelectorAll(".forecast-card");

// Disparadores de eventos
let btnSearch = document.getElementById("btnSearch");
btnSearch.onclick = updateWeather;
let btnLocation = document.getElementById("btnLocation");
btnLocation.onclick = getCurrentPosition;

// Constantes
const DAYS = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
};
const ORDER_DAYS = {
    "1": "1st",
    "2": "2nd",
    "3": "3rd",
    "4": "4th",
    "5": "5th",
    "6": "6th",
    "7": "7th",
    "8": "8th",
    "9": "9th",
    "10": "10th",
    "11": "11th",
    "12": "12th",
    "13": "13th",
    "14": "14th",
    "15": "15th",
    "16": "16th",
    "17": "17th",
    "18": "18th",
    "19": "19th",
    "20": "20th",
    "21": "21st",
    "22": "22nd",
    "23": "23rd",
    "24": "24th",
    "25": "25th",
    "26": "26th",
    "27": "27th",
    "28": "28th",
    "29": "29th",
    "30": "30th",
    "31": "31st",
};
const MONTHS = {
    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "July",
    "7": "August",
    "8": "September",
    "9": "October",
    "10": "November",
    "11": "December",
};
const ICON_MAP = {
    "01d": "fa-solid fa-sun",
    "01n": "fa-solid fa-moon",
    "02d": "fa-solid fa-cloud-sun",
    "02n": "fa-solid fa-cloud-moon",
    "03d": "fa-solid fa-cloud",
    "03n": "fa-solid fa-cloud",
    "04d": "fa-solid fa-cloud",
    "04n": "fa-solid fa-cloud",
    "09d": "fa-solid fa-cloud-showers-heavy",
    "09n": "fa-solid fa-cloud-showers-heavy",
    "10d": "fa-solid fa-cloud-sun-rain",
    "10n": "fa-solid fa-cloud-moon-rain",
    "11d": "fa-solid fa-cloud-bolt",
    "11n": "fa-solid fa-cloud-bolt",
    "13d": "fa-solid fa-snowflake",
    "13n": "fa-solid fa-snowflake",
    "50d": "fa-solid fa-wind",
    "50n": "fa-solid fa-wind",
};
const API_KEY = "dcc96758227522fb2135712c910a87e1";


/***********************************************************
 * FUNCIONES
 ***********************************************************/

// Función de inicio
function init() {
    formatDate();
    updateBackground();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=${ API_KEY }&units=metric`;
    axios.get(apiUrl)
        .then(showWeather)
        .catch(err => console.error(err));
}

// Función para actualizar la información del clima según la ciudad ingresada
function updateWeather(event) {
    event.preventDefault();
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${ city.value }&appid=${ API_KEY }&units=metric`;
    axios.get(api)
        .then(showWeather)
        .catch(err => console.error(err));
}

// Función para mostrar la información del clima
function showWeather(response) {
    place.innerHTML = `${ response.data.name }, ${ response.data.sys.country }`;
    daytime.innerHTML = `Last update: ${ formatTime() }`;
    humidity.innerHTML = `${ response.data.main.humidity } %`;
    wind.innerHTML = `${ response.data.wind.speed } km/h`;
    icon.setAttribute("class", ICON_MAP[response.data.weather[0].icon]);
    temperature.innerHTML = Math.round(response.data.main.temp);
    climate.innerHTML = response.data.weather[0].main;
    updateForecast(response.data.coord);
}

// Función para actualizar el pronóstico del clima según la ciudad ingresada
function updateForecast(coords) {
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${ coords.lat }&lon=${ coords.lon }&exclude=minutely,hourly&appid=${ API_KEY }&units=metric`;
    axios.get(api)
        .then(showForecast)
        .catch(err => console.error(err));
}

// Función para mostrar el pronóstico del clima
function showForecast(response) {
    forecast.forEach( (element, i) => {
        (element.querySelector("h3")).innerHTML = DAYS[(dateNow.getDay() + (i+1)) % 7];
        (element.querySelector(".temp-max")).innerHTML = `${ Math.round(response.data.daily[i].temp.max) }°`;
        (element.querySelector(".temp-min")).innerHTML = `${ Math.round(response.data.daily[i].temp.min) }°`;
        (element.querySelector("i")).setAttribute("class", ICON_MAP[response.data.daily[i].weather[0].icon]);
        (element.querySelector(".clim-week")).innerHTML = response.data.daily[i].weather[0].main;
        (element.querySelector(".humi-week")).innerHTML = `${ response.data.daily[i].humidity } %`;
        (element.querySelector(".wind-week")).innerHTML = `${ response.data.daily[i].wind_speed } km/h`;
    });
}

// Función para obtener la ubicación actual
function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
}

// Función para actualizar el pronóstico del clima según la ubicación actual
function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ API_KEY }&units=metric`;
    axios.get(apiUrl)
        .then(showWeather)
        .catch(err => console.error(err));
}

// Función para darle formato a la fecha
function formatDate() {
    let date = document.getElementById("date");
    date.textContent = `${ DAYS[dateNow.getDay()] }, ${ ORDER_DAYS[dateNow.getDate()] } ${ MONTHS[dateNow.getMonth()] } ${ dateNow.getFullYear() }`;
}

// Función para darle formato a la hora actual
function formatTime() {
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();

    if (hours < 10)
        hours = `0${ hours }`;
    if (minutes < 10)
        minutes = `0${ minutes }`;
    
    return (dateNow.getHours() < 12) ? `${ hours }:${ minutes } AM` : `${ hours }:${ minutes } PM`;
}

// Función para actualizar la imagen de fondo según la hora actual
function updateBackground() {
    if (dateNow.getHours() >= 19 || dateNow.getHours() <= 6) {
        (document.querySelector(".card")).style.background = "url('../public/wallpaper_evening.jpg') no-repeat center 85%";
        (document.querySelector("body")).style.backgroundColor = "#322a5d";
    } else if (dateNow.getHours() <= 17) {
        (document.querySelector(".card")).style.background = "url('../public/wallpaper_morning.jpg') no-repeat center 85%";
        (document.querySelector("body")).style.backgroundColor = "#63416c";
    } else {
        (document.querySelector(".card")).style.background = "url('../public/wallpaper_afternoon.jpg') no-repeat center 85%";
        (document.querySelector("body")).style.backgroundColor = "#402e4f";
    }
}

window.onload = init;