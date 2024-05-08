const apiKey = "a3c8b4d35c6ce1580408371d0f3cf57b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const temperature = document.querySelector(".weather h1");
const humidity = document.querySelector("#humidity-content h2");
const wind = document.querySelector("#wind-content h2");
const inputCity = document.querySelector("#input");
const searchIcon = document.querySelector("#search-icon");
const cityName = document.querySelector(".weather h2");
const weatherIcon = document.querySelector(".weather img");
const weather = document.querySelector(".weather");
const details = document.querySelector(".details");
const error = document.querySelector(".message p");
const message = document.querySelector(".message");
const container = document.querySelector(".container");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = "block";
  } else {
    message.remove()
    weather.style.display = "flex";
    details.style.display = "flex";
  }

  var data = await response.json();
  console.dir(data.weather[0].main);

  cityName.innerText = data.name;
  temperature.innerText = Math.round(data.main.temp) + "°c";
  humidity.innerText = data.main.humidity + "%";
  wind.innerText = data.wind.speed + "km/h";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  }
}

searchIcon.addEventListener("click", () => {
  checkWeather(inputCity.value);
});

inputCity.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(inputCity.value);
  }
});
inputCity.addEventListener("input", (e) => {});
