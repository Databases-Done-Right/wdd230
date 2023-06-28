const kp1 = document.querySelector("#passwordField");
const kp2 = document.querySelector("#reEnterPasswordField");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.display = "block";
        kp2.classList.add("invalid");
	} else {
        kp2.classList.remove("invalid");
		message.style.display = "none";
	}
}

const range = document.querySelector("#pageRatingField");
const rangeValue = document.querySelector("#pageRatingTextField");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}