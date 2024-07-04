const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const location_not_found = document.querySelector(".location-not-found");

const weather_body = document.querySelector(".weather-body");


async function checkWeather(city) {
  const api_key = "7dfae2febcc839a7072c3d822639e4ac";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if (weather_data.cod === `404`) {
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
  }

  console.log("run");
  location_not_found.style.display = "none";
  weather_body.style.display = "flex";
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "assets/cloud.svg";
      break;
    case "Clear":
      weather_img.src = "assets/clear.svg";
      break;
    case "Rain":
      weather_img.src = "assets/rain.svg";
      break;
    case "Mist":
      weather_img.src = "assets/mist.svg";
      break;
    case "Snow":
      weather_img.src = "assets/snow.svg";
      break;
    case "Storm":
      weather_img.src = "assets/storm.svg";
      break;
  }

  switch (weather_data.weather[0].main) {
    case "Clouds":
      document.body.style.background = "url('assets/awan bg.png')";
      document.body.style.transition = "background-image 0.5s ease-in-out";
      break;
    case "Clear":
      document.body.style.background = "url('assets/cerah bg.png')";
      document.body.style.transition = "background-image 0.5s ease-in-out";
      break;
    case "Rain":
      document.body.style.background = "url('assets/hujan bg.png')";
      document.body.style.transition = "background-image 0.5s ease-in-out";
      break;
    case "Mist":
      document.body.style.background = "url('assets/angin bg.png')";
      document.body.style.transition = "background-image 0.5s ease-in-out";
      break;
    case "Snow":
      document.body.style.background = "url('assets/salju bg.png')";
      document.body.style.transition = "background-image 0.5s ease-in-out";
      break;
    case "Storm":
      document.body.style.background = "url('assets/badai bg.png')";
      document.body.style.transition = "background-image 0.5s ease-in-out";
      break;
    default:
      document.body.style.background = "white";
  }

  console.log(weather_data);
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});


