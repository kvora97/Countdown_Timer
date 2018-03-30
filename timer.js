var ts, total_seconds, days, hours, minutes, seconds, timer;
var reset_clicked = false;

function reset()
{
	console.log("ENTERED RESET");

	reset_clicked = true;
	days = hours = minutes = seconds = 0;
	
	document.getElementById("button").innerHTML = "START";
	
	document.getElementById("days").value = days;
	document.getElementById("hours").value = hours;
	document.getElementById("minutes").value = minutes;
	document.getElementById("seconds").value = seconds;

	document.removeEventListener("click", reset, false);
	document.addEventListener("click", storeInputs, true);
}

function startTimer()
{
	if (total_seconds == 0)
	{
		clearInterval(timer);
	}

	ts = total_seconds;

	days = Math.floor(ts / (24 * 60 * 60));
	ts -= (days * 24 * 60 * 60);

	hours = Math.floor(ts / (60 * 60));
	ts -= (hours * 60 * 60);

	minutes = Math.floor(ts / 60);
	ts -= (minutes * 60);

	//seconds = Math.floor(total_seconds % 60);
	seconds = ts;

	document.getElementById("days").value = days;
	document.getElementById("hours").value = hours;
	document.getElementById("minutes").value = minutes;
	document.getElementById("seconds").value = seconds;
	
	total_seconds--;

	console.log(days);
	console.log(hours);
	console.log(minutes);
	console.log(seconds);
}

function storeInputs() 
{
	// get inputs from each field
	days = document.getElementById("days").value;
	if (isNaN(days)) {
		days = 0;
		document.getElementById("days").value = days;
	}
	if (days === "") {
		days = 0;
		document.getElementById("days").value = days;
	}

	hours = document.getElementById("hours").value;
	if (isNaN(hours)) { 
		hours = 0;
		document.getElementById("hours").value = hours;
	}
	if (hours === "") {
		hours = 0;
		document.getElementById("hours").value = hours;
	}

	minutes = document.getElementById("minutes").value;
	if (isNaN(minutes)) {
		minutes = 0;
		document.getElementById("minutes").value = minutes;
	}
	if (minutes === "") {
		minutes = 0;
		document.getElementById("minutes").value = minutes;
	}

	seconds = document.getElementById("seconds").value;
	if (isNaN(seconds)) {
		seconds = 0;
		document.getElementById("seconds").value = seconds;
	}
	if (seconds === "") {
		seconds = 0;
		document.getElementById("seconds").value = seconds;
	}

	if (!reset_clicked)
	{
		document.getElementById("button").innerHTML = "RESET";
	}
	else
	{
		document.getElementById("button").innerHTML = "START";
		reset_clicked = false;
	}

	document.removeEventListener("click", storeInputs, false);
	document.addEventListener("click", reset, true);

	total_seconds = (1 * seconds) + (60 * minutes) + (60 * 60 * hours) + (60 * 60 * 24 * days);
	console.log("total seconds " + total_seconds) ;
	timer = setInterval(startTimer, 0);
}
