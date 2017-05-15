$(document).ready(function(){
	
	
	
	var Request = new XMLHttpRequest();
	var url = 'dane.json';
	
	Request.open('GET', url);
	Request.onload = function() {
		var data = JSON.parse(Request.responseText);
		console.log(data);
	
		var lasButton = document.getElementById('las-button');
		var blaszakButton = document.getElementById('blaszak-button');
		var zamekButton = document.getElementById('zamek-button');
		var nadJaremButton = document.getElementById('21-button');
		var actualStop = document.getElementById('stop');
		
		/*Funkcja wczytujaca domyslne ustawienia strony*/
		
		function myOnLoad(){
			actualStop.innerHTML = "Międzylesie";
			var allStops = document.getElementById('allStops');
			
			allStops.innerHTML = '<div class="line line1"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 3 </figcaption><ul id="listaLine3"></ul></div><div class="line line2"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 4 </figcaption><ul id="listaLine4"></ul></div><div class="line line3"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 12 </figcaption><ul id="listaLine12"></ul></div><div class="line line4"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 3(Weekendy i Święta) </figcaption><ul id="listaLine3W"></ul></div>';
			
			var line3 = document.getElementById('listaLine3');
			var arr3 = data.miedzylesie.busNr3.kursy;
			
			for(var i in arr3)
			$(line3).append('<li>'+arr3[i]+'</li>');
			
			
			
			var line4 = document.getElementById('listaLine4');
			var arr4 = data.miedzylesie.busNr4.kursy;
			
			for(var i in arr4)
			$(line4).append('<li>'+arr4[i]+'</li>');
			
			
			
			var line12 = document.getElementById('listaLine12');
			var arr12 = data.miedzylesie.busNr12.kursy;
			
			for(var i in arr12)
			$(line12).append('<li>'+arr12[i]+'</li>');
			
			
			
				
			var line3W = document.getElementById('listaLine3W');
			var arr3W = data.miedzylesie.busNr3W.kursy;
			
			for(var i in arr3W)
			$(line3W).append('<li>'+arr3W[i]+'</li>');
			
		};
		
		myOnLoad();
		
		
		
		lasButton.onclick = function(){
			myOnLoad();
		};
	
		
		blaszakButton.onclick = function(){ 		
			actualStop.innerHTML = "Blaszak";
													 
			var allStops = document.getElementById('allStops')
			
			allStops.innerHTML = '<div class="line line1"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 3 </figcaption><ul id="listaLine3"></ul></div><div class="line line2"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 4 </figcaption><ul id="listaLine4"></ul></div>';
			
			var line3 = document.getElementById('listaLine3');
			var arr3 = data.blaszak.busNr3.kursy;
			
			for(var i in arr3)
			$(line3).append('<li>'+arr3[i]+'</li>');
			
			
			
			var line4 = document.getElementById('listaLine4');
			var arr4 = data.blaszak.busNr4.kursy;
			
			for(var i in arr4)
			$(line4).append('<li>'+arr4[i]+'</li>');
		};
		
		zamekButton.onclick = function(){
			actualStop.innerHTML = "Zamek";
			
			var allStops = document.getElementById('allStops');
			
			allStops.innerHTML = '<div class="line line1"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 3 </figcaption><ul id="listaLine3"></ul></div><div class="line line2"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 4 </figcaption><ul id="listaLine4"></ul></div><div class="line line3"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 12 </figcaption><ul id="listaLine12"></ul></div><div class="line line4"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 3(Weekendy i Święta) </figcaption><ul id="listaLine3W"></ul></div>';
			
			var line3 = document.getElementById('listaLine3');
			var arr3 = data.zamek.busNr3.kursy;
			
			for(var i in arr3)
			$(line3).append('<li>'+arr3[i]+'</li>');
			
			
			
			var line4 = document.getElementById('listaLine4');
			var arr4 = data.zamek.busNr4.kursy;
			
			for(var i in arr4)
			$(line4).append('<li>'+arr4[i]+'</li>');
			
			
			
			var line12 = document.getElementById('listaLine12');
			var arr12 = data.zamek.busNr12.kursy;
			
			for(var i in arr12)
			$(line12).append('<li>'+arr12[i]+'</li>');
			
			
			
				
			var line3W = document.getElementById('listaLine3W');
			var arr3W = data.zamek.busNr3W.kursy;
			
			for(var i in arr3W)
			$(line3W).append('<li>'+arr3W[i]+'</li>');
		};
		
		nadJaremButton.onclick = function(){
			actualStop.innerHTML = "Osiedle Nad Jarem";
			
			var allStops = document.getElementById('allStops');
			
			allStops.innerHTML = '<div class="line line1"><img class="small-image" src="image/bus.svg" alt="bus"> <figcaption>Linia nr 3 </figcaption> <ul id="listaLine3"></ul></div><div class="line line2"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>Linia nr 12 </figcaption><ul id="listaLine12"></ul></div>	';
			
			var line3 = document.getElementById('listaLine3');
			var arr3 = data.nadJarem.busNr3.kursy;
			
			for(var i in arr3)
			$(line3).append('<li>'+arr3[i]+'</li>');
			
			var line12 = document.getElementById('listaLine12');
			var arr12 = data.nadJarem.busNr12.kursy;
			
			for(var i in arr12)
			$(line12).append('<li>'+arr12[i]+'</li>');
		};
	}

	Request.send();
	
	
});					

						
						
			