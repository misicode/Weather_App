const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let now = new Date();
  let apiKey = "dcc96758227522fb2135712c910a87e1";
  
  let date = document.querySelector("#date");
  date.textContent = `${
    days[now.getDay() - 1]
  } ${now.getHours()}:${now.getMinutes()}`;
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let icon = document.querySelector("#icon");
  
  let form = document.querySelector("#form-city");
  form.addEventListener("submit", changeCity);
  
  function init() {
    let city = "Lima";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  function changeCity(event) {
    event.preventDefault();
    let city = document.querySelector("#city");
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }
  
  function showData(response) {
    let cityElement = response.data.name;
    let city = document.querySelector("#title-city");
    city.innerHTML = cityElement;
    let temperatureElement = Math.round(response.data.main.temp);
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = temperatureElement + " °C";
    let weatherElement = response.data.weather[0].main;
    let weather = document.querySelector("#weather");
    weather.innerHTML = weatherElement;
    let humidityElement = response.data.main.humidity;
    humidity.innerHTML = "Humidity: " + humidityElement + "%";
    let windElement = response.data.wind.speed;
    wind.innerHTML = "Wind: " + windElement + " km/h";
    let iconElement = response.data.weather[0].icon;
    icon.src = `http://openweathermap.org/img/wn/${iconElement}@2x.png`;
  }
  
  let btnCurrent = document.querySelector("#current");
  btnCurrent.addEventListener("click", getCurrentPosition);
  
  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }
  
  function getCurrentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  window.onload = init();