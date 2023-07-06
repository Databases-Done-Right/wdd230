const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const apiKey = "653875d1c619f26557ce7417c00c803c";
const lat = 49.75;
const lon = 6.63;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const displayWeatherData = (prophets) => {
    console.log(prophets);
    /*
    const cards = document.querySelector('#cards');
    prophets.forEach((prophet) => {
    var card = document.createElement("section");
    var fullName = document.createElement("h2");
    var portrait = document.createElement("img");
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", fullName.textContent + " Portrait");
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "300");
    portrait.setAttribute("height", "400");
    card.appendChild(fullName);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
    */
}

async function getWeatherData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayWeatherData(data);
    }
  } catch (error) {
      console.log(error);
  }
}

getWeatherData(url); 