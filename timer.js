var days, hours, minutes, seconds, timer;
var ts, remaining_seconds, total_seconds;
var reset_clicked = false;
var pause_clicked = false;

function toggle()
{
	if (!pause_clicked)
	{
		document.getElementById("startbutton").innerHTML = "PAUSE";
		pause_clicked = true;
	}
	else
	{
		document.getElementById("startbutton").innerHTML = "START";
		pause_clicked = false;
	}	
}

function reset()
{
	reset_clicked = true;
	pause_clicked = false;
	ts = total_seconds = tdays = hours = minutes = seconds = 0;
	
	toggle();

	document.getElementById("days").value = days;
	document.getElementById("hours").value = hours;
	document.getElementById("minutes").value = minutes;
	document.getElementById("seconds").value = seconds;

	document.getElementById("resetbutton").style.display = "none";
	document.getElementById("startbutton").innerHTML = "START";
	document.getElementById("startbutton").style.color = "black";
}

function startTimer()
{
	if (total_seconds == 0)
	{
		clearInterval(timer);
		if (!reset_clicked)
		{	
			document.getElementById("startbutton").innerHTML = "TIME UP!";
			document.getElementById("startbutton").style.color = "red";
		}
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
}

function storeInputs() 
{
	reset_clicked = false;
	pause_clicked = false;

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

	document.getElementById("resetbutton").style.display = "inline-block";

	total_seconds = (1 * seconds) + (60 * minutes) + (60 * 60 * hours) + (60 * 60 * 24 * days);
	timer = setInterval(startTimer, 0);
}
