document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = "Last Modified: " + document.lastModified;
let pageVisits = localStorage.getItem('pageCounter') || 0;
pageVisits++;
document.querySelector("#pageCounter").innerHTML = pageVisits;
localStorage.setItem('pageCounter', pageVisits);