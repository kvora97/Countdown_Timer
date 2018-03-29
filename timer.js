
function startTimer(days, hours, minutes, seconds)
{
	var remaining = setInterval( function updateSeconds() 
	{
		if (seconds > 1)
		{
			seconds--;
			document.getElementById("seconds").value = seconds;
		}
		else
		{
			clearInterval(remaining);
			console.log("ENTERED ELSE CASE");
			document.getElementById("timeup").style.display = "inline-block";
		}

		console.log(seconds + "STILL IN LOOP");

	}, 1000);

	console.log("NOT IN LOOP");
}

function storeInputs() {
	
	// get inputs from each field
	var days = document.getElementById("days").value;
	if (isNaN(days)) {
		days = 0;
		document.getElementById("days").value = days;
	}

	var hours = document.getElementById("hours").value;
	if (isNaN(hours)) { 
		hours = 0;
		document.getElementById("hours").value = hours;
	}

	var minutes = document.getElementById("minutes").value;
	if (isNaN(minutes)) {
		minutes = 0;
		document.getElementById("minutes").value = minutes;
	}

	var seconds = document.getElementById("seconds").value;
	if (isNaN(seconds)) { 
		seconds = 0; 
		document.getElementById("seconds").value = seconds;
	}

	startTimer(days, hours, minutes, seconds);
}