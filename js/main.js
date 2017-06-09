$(document).ready(function(){
	var Request = new XMLHttpRequest();
	var url = 'dane.json';
	
	Request.open('GET', url);
	Request.onload = function() {
		var data = JSON.parse(Request.responseText);
		console.log(data);
	
		var actualStop = document.getElementById('stop');
		var allStops = document.getElementById('allStops');
		
		function createStop(stop){  		
			actualStop.innerHTML = stop.name;
			
			allStops.innerHTML = '';
			
			var arr = stop.busList;
			var linestyle = 'line2';
			for(var i in arr)
				{	
					if(linestyle == 'line2')
						linestyle = 'line1';
					else linestyle = 'line2';
					
					if(arr[i].Weekends === false){
					$(allStops).append('<div class="line '+linestyle+'"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption>'+arr[i].busName+'<br><span>'+arr[i].trasa+'</span></figcaption><ul class="'+arr[i].id+'"></ul></div>');
					}else{
					$(allStops).append('<div class="line '+linestyle+'"><img class="small-image" src="image/bus.svg" alt="bus"><figcaption class="red">'+arr[i].busName+'<br><span>'+arr[i].trasa+'</span></figcaption><ul class="'+arr[i].id+'"></ul></div>');	
					}
					
					
					for(var j in arr[i].kursy)
						$('.'+arr[i].id).append('<li>'+arr[i].kursy[j]+'</li>');
				}
		};		

		createStop(data.stops[0]);
		
			$('#miedzylesieBtn').click(function(){
			createStop(data.stops[0]);
			});
		
			$('#blaszakBtn').click(function(){
			createStop(data.stops[1]);
			});
		
			$('#styczniaBtn').click(function(){
			createStop(data.stops[2]);
			});
		
			$('#zamekBtn').click(function(){
			createStop(data.stops[3]);
			});
	}
	Request.send();

});							