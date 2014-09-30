//TEMPLATE OF A SERVICE TO BE USED BY THE TEMPLATE MAIN CONTROLLER
//SERVICES SHOULD CONTAIN MAJORITY OF THE LOGIC AND CODE
//ALSO POSSIBLE TO INJECT OTHER HELPER SERVICES TO A SERVICE TO ABSTRACTIFY CODE
//SERVICES ALWAYS RETURN AN OBJECT OR A FUNCTION

define(["servicesFactory", 
		"services/summerCollectionService",
		"services/fallCollectionService",
		"services/winterCollectionService",
		"services/springCollectionService",
		"services/cityService"], function(servicesFactory) {

	servicesFactory.factory('ColorSwatchService', 
		['SummerCollectionService', 
		"FallCollectionService", 
		"WinterCollectionService",
		"SpringCollectionService",
		"CityService",
		function(summerCollectionService, fallCollectionService, winterCollectionService, springCollectionService, cityService) {

			var colorSwatchService = {
				seasons: null,
				i: 0,
				cityOne: null,
				cityTwo: null,
				cityThree: null,
				weather: null,

				generateRandomCities: function(){
					colorSwatchService.cityOne = cityService.generateRandomCity();
				
					do{
						colorSwatchService.cityTwo = cityService.generateRandomCity();
					}while(colorSwatchService.cityTwo === colorSwatchService.cityOne);

					do{
						colorSwatchService.cityThree = cityService.generateRandomCity();
					}while(colorSwatchService.cityThree === colorSwatchService.cityTwo);
				},

				myAjaxCheck:function(){
					//console.log(colorSwatchService.city);
					$.simpleWeather({
					    location: colorSwatchService.cityOne,
					    woeid: '',
					    unit: 'c',
					    success: function(weather) {
					        var temperatureTemp = parseInt(weather.temp);
					        /*html = '<span>'+weather.temp+'&deg;'+weather.units.temp+' '+'</span>';
					        html += '<span>'+weather.currently+'</span>';
					        $('#weather').html(html);*/
					        colorSwatchService.weather = +weather.temp + '°' + weather.units.temp + ' ' + weather.currently;
					        colorSwatchService.returnSeason(temperatureTemp);
					    }
				  	});

				},

				returnSeason:function(temperature){
					console.log(temperature);
					console.log(colorSwatchService.cityOne);
					var date = new Date();
					var month = date.getMonth();

					if (temperature >= 20){
						colorSwatchService.seasons = summerCollectionService;	
					}

					else if (temperature>4 && temperature <20 && (month>7 && month<12)){ //Gives possibility to display fall colours even in cooler, summer months
						colorSwatchService.seasons = fallCollectionService;
					}

					else if (temperature>4 && temperature <20 && (month>1 && month>6)) {//Gives possibility to display spring colours even in warmer, winter months
						colorSwatchService.seasons = springCollectionService;
					}

					else if (temperature < 4){
						colorSwatchService.season = winterCollectionService;
					}

					if (colorSwatchService.i === 0){
						document.getElementById("swatchTitle").click();	//Bad hack that reloads the page so that the color swatch will reload
						colorSwatchService.i++;
					}
				} 
			};

		return colorSwatchService;
	}]);
});
