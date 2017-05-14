$(document).ready(function(){
	
	var Request = new XMLHttpRequest();
	var url = 'dane.json';
	
	Request.open('GET', url);
	Request.onload = function() {
		var data = JSON.parse(Request.responseText);
		console.log(data);
	}

	Request.send();
});					

						
						
			