let lastVisitDate = localStorage.getItem('lastVisited') || "";
let welcomeMessage = "Welcome! Let us know if you have any questions.";
let currentDate = new Date();
if(lastVisitDate) {
    let numberOfDays = (currentDate.getTime() - lastVisitDate) / 84600000;
    if(numberOfDays <= 1) {
        welcomeMessage = "Back so soon! Awesome!";
    }
    else {
        welcomeMessage = `You last visited ${numberOfDays} day`;
        if(numberOfDays > 1) { welcomeMessage += "s"; }
        welcomeMessage += ' ago.';
    }
}
document.querySelector("#visitorMessage").innerHTML = welcomeMessage;
localStorage.setItem('lastVisited', currentDate.getTime());