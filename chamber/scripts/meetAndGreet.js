const todaysDate = new Date();
if(todaysDate.getDay()<1 || todaysDate.getDay()>3) {
    document.getElementById("meetAndGreet").style.display = "none";
}

function closeBanner() {
    document.getElementById("meetAndGreet").style.display = "none";
}