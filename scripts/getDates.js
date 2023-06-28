document.querySelector("#year").innerHTML = new Date().getFullYear();
document.querySelector("#lastModified").innerHTML = "Last Modified: " + document.lastModified;
let pageVisits = localStorage.getItem('pageCounter') || 0;
pageVisits++;
let pageVisitElement = document.querySelector("#pageCounter");
if(pageVisitElement) {
    pageVisitElement.innerHTML = pageVisits;
}
localStorage.setItem('pageCounter', pageVisits);