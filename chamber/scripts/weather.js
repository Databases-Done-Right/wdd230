const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const weatherForecast = document.querySelector("#weatherForecast");

const apiKey = "653875d1c619f26557ce7417c00c803c";
const lat = 51.61;
const lon = -2.96;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F, ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

function displayWeatherResults(data) {
    const forecastIncrementInHours = 24;
    const steps = forecastIncrementInHours / 3;
    for(let a=1; a<=3; a++) {
      let theWeather = data.list[steps*a];
      var card = document.createElement("div");
      var h3 = document.createElement("h3");
      var image = document.createElement("img");
      var temp = document.createElement("div");
      var iconsrc = `https://openweathermap.org/img/w/${theWeather.weather[0].icon}.png`;
      image.setAttribute("src", iconsrc);
      image.setAttribute("alt", theWeather.weather[0].description);
      image.setAttribute("loading", "lazy");
      image.setAttribute("width", "50");
      image.setAttribute("height", "50");
      let theDate = new Date(theWeather.dt_txt);
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      h3.textContent = weekday[theDate.getDay()];
      temp.innerHTML = `${Math.round(theWeather.main.temp)}&deg;F`;
      card.appendChild(h3);
      card.appendChild(image);
      card.appendChild(temp);
      weatherForecast.appendChild(card);
    }
}

async function apiFetch(url, weatherUrl) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }

  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayWeatherResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch(url, weatherUrl);