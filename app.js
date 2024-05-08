const apiKey = "a3c8b4d35c6ce1580408371d0f3cf57";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
}

checkWeather();
