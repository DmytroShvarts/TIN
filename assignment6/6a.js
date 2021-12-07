function convert(){
	var c = document.getElementById('fCelsius').value
	var f = document.getElementById('fFahrenheit').value
	if (c == ""){
		document.getElementById('fCelsius').value = (f - 32) * (5/9);
	}else if (c != "" && f == ""){
		document.getElementById('fFahrenheit').value = c * (9/5) + 32;
	}
}