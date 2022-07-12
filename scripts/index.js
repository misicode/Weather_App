/***********************************************************
 * VARIABLES
 ***********************************************************/

let dateNow = new Date();
const apiKey = "dcc96758227522fb2135712c910a87e1";

let place = document.getElementById("place");
let temperature = document.getElementById("temperature");
let icon = document.getElementById("icon");
let climate = document.getElementById("climate");
let daytime = document.getElementById("daytime");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let city = document.getElementById("city");
let btnSearch = document.getElementById("btnSearch");
btnSearch.onclick = changeCity;

const days = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
};
  
const orderDays = {
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

const months = {
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

const iconMap = {
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


/***********************************************************
 * FUNCIONES
 ***********************************************************/

function init() {
    formatDate();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=${ apiKey }&units=metric`;
    axios.get(apiUrl)
        .then(showData)
        .catch(err => console.error(err));
}

function changeCity(event) {
    event.preventDefault();
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${ city.value }&appid=${ apiKey }&units=metric`;
    axios.get(api)
        .then(showData)
        .catch(err => console.error(err));
}

function showData(response) {
    console.log(response.data)
    place.innerHTML = `${ response.data.name }, ${ response.data.sys.country }`;
    temperature.innerHTML = Math.round(response.data.main.temp);
    icon.setAttribute("class", iconMap[response.data.weather[0].icon]);
    climate.innerHTML = response.data.weather[0].main;
    daytime.innerHTML = `Last update: ${ formatTime() }`;
    humidity.innerHTML = `Humidity: ${ response.data.main.humidity } %`;
    wind.innerHTML = `Wind: ${ response.data.wind.speed } km/h`;
    updateForecast(response.data.coord);
}

function updateForecast(coords) {
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${ coords.lat }&lon=${ coords.lon }&exclude=minutely,hourly&appid=${ apiKey }&units=metric`;
    axios.get(api)
        .then(showForecast)
        .catch(err => console.error(err));
}

function showForecast(response) {
    console.log(response.data)
    let timeWeek = document.querySelectorAll("li");
    timeWeek.forEach( (element, i) => {
        let day = element.querySelector("h3");
        day.innerHTML = days[dateNow.getDay() + (i+1)];
        let temp = element.querySelector(".temp-week");
        temp.innerHTML = `${ Math.round(response.data.daily[i].temp.min) }°C - ${ Math.round(response.data.daily[i].temp.max) }°C`;
        let icon = element.querySelector("i");
        icon.setAttribute("class", iconMap[response.data.daily[i].weather[0].icon]);
        let climate = element.querySelector(".clim-week");
        climate.innerHTML = response.data.daily[i].weather[0].main;
    });
}

// Función para darle formato a la fecha
function formatDate() {
    let date = document.getElementById("date");
    date.textContent = `${ days[dateNow.getDay()] }, ${ orderDays[dateNow.getDate()] } ${ months[dateNow.getMonth()] } ${ dateNow.getFullYear() }`;
}

// Función para darle formato al tiempo
function formatTime() {
    if (dateNow.getHours() < 12)
        return `${ dateNow.getHours() }:${ dateNow.getMinutes() } AM`
    else
        return `${ dateNow.getHours() }:${ dateNow.getMinutes() } PM`
}

window.onload = init;