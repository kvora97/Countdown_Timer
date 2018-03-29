
function storeInputs() {
	
	// get inputs from each field
	var days = document.getElementById("days").value;
	if (isNaN(days)) { days = 0; }

	var hours = document.getElementById("hours").value;
	if (isNaN(hours)) { hours = 0; }

	var minutes = document.getElementById("minutes").value;
	if (isNaN(minutes)) { minutes = 0; }

	var seconds = document.getElementById("seconds").value;
	if (isNaN(seconds)) { seconds = 0; }

	// hide input fields
	document.getElementById("inputs").style.display = "none";
	var nodes = document.getElementById("clock").childNodes;

	for(var i=0; i<nodes.length; i++) {
	    if (nodes[i].nodeName.toLowerCase() == 'span') {
	         nodes[i].style.display = "inline-block";
	     }
}

	// call function to set values 


	// show clock countdown

}