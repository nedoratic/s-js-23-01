// Selecting the HTML elements that display days, hours, minutes, and seconds
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// Function to render the countdown
function renderCountdown() {
	// December is 11 since months are zero-indexed
	const christmasDate = new Date(new Date().getFullYear(), 11, 25);
	// Create a new instance of the Date object for the current date
	const currentDate = new Date();
	// Calculate the time difference in milliseconds between Christmas and the current date
	const timeLeft = christmasDate - currentDate;
	// Convert the time difference to days, hours, minutes, and seconds
	const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
	// Function to add a leading zero to a number if it's a single digit
	const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);
	// Update the HTML content with leading zeros
	days.textContent = addLeadingZero(daysLeft);
	hours.textContent = addLeadingZero(hoursLeft);
	minutes.textContent = addLeadingZero(minutesLeft);
	seconds.textContent = addLeadingZero(secondsLeft);
}

// Call the function to initially render the countdown
renderCountdown();

// Update the countdown every second using setInterval
setInterval(renderCountdown, 1000);
