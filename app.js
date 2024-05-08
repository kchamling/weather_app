const apiKey = "a3c8b4d35c6ce1580408371d0f3cf57b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const temperature = document.querySelector(".weather h1");
const humidity = document.querySelector("#humidity-content h2");
const wind = document.querySelector("#wind-content h2");
const inputCity = document.querySelector("#input");
const searchIcon = document.querySelector("#search-icon");
const cityName = document.querySelector(".weather h2");
const weatherIcon = document.querySelector(".weather img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  var data = await response.json();
  console.dir(data.weather[0].main);

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "./assets/images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "./assets/images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "./assets/images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "./assets/images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "./assets/images/mist.png";
  }

  cityName.innerText = data.name;
  temperature.innerText = Math.round(data.main.temp) + "°c";
  humidity.innerText = data.main.humidity + "%";
  wind.innerText = data.wind.speed + "km/h";
}

searchIcon.addEventListener("click", () => {
  checkWeather(inputCity.value);
});

inputCity.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(inputCity.value);
  }
});
