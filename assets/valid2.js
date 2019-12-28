function btnclick() {
	document.getElementById("nextbtn").disabled = false;
});

$('#inputname').on('change', function(event) {
	event.preventDefault();
	btnclick()
});
