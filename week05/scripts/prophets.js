const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

let results = null;
async function getProphetData(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    let prophets = data.prophets; 
    console.table(prophets); 
    displayProphets(prophets);
  }
}
const displayProphets = (prophets) => {
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
}
getProphetData(url);