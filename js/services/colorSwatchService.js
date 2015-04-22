//TEMPLATE OF A SERVICE TO BE USED BY THE TEMPLATE MAIN CONTROLLER
//SERVICES SHOULD CONTAIN MAJORITY OF THE LOGIC AND CODE
//ALSO POSSIBLE TO INJECT OTHER HELPER SERVICES TO A SERVICE TO ABSTRACTIFY CODE
//SERVICES ALWAYS RETURN AN OBJECT OR A FUNCTION

define(["servicesFactory", 
		"services/seasons/summerCollectionService",
		"services/seasons/fallCollectionService",
		"services/seasons/winterCollectionService",
		"services/seasons/springCollectionService",
		"services/seasons/summerPlusCollectionService",
		"services/seasons/fallPlusCollectionService",
		"services/seasons/winterPlusCollectionService",
		"services/cityService"], 
		
		function(servicesFactory) {

			servicesFactory.factory('ColorSwatchService', 
				['SummerCollectionService', 
				"FallCollectionService", 
				"WinterCollectionService",
				"SpringCollectionService",
				"SummerPlusCollectionService",
				"FallPlusCollectionService",
				"WinterPlusCollectionService",
				"CityService",

				function(summerCollectionService, 
					fallCollectionService, 
					winterCollectionService, 
					springCollectionService, 
					summerPlusCollectionService, 
					fallPlusCollectionService, 
					winterPlusCollectionService, 
					cityService) {
					var _scope;

					var colorSwatchService = {
						seasons: null,
						i: 0,
						cityOne: ' ',
						cityTwo: " ",
						cityThree: " ",
						weather: null,

						generateRandomCities: function(){
							colorSwatchService.cityOne = cityService.generateRandomCity();
						
							do{
								colorSwatchService.cityTwo = cityService.generateRandomCity();
							}while(colorSwatchService.cityTwo == colorSwatchService.cityOne);

							do{
								colorSwatchService.cityThree = cityService.generateRandomCity();
							}while(colorSwatchService.cityThree == colorSwatchService.cityTwo);
						},

						myAjaxCheck:function(city){
							$.simpleWeather({
							    location: city,
							    woeid: '',
							    unit: 'c',
							    success: function(weather) {
							        var temperatureTemp = parseInt(weather.temp);
							        colorSwatchService.weather = weather.city + '| ' + weather.temp + '°' + weather.units.temp + ' ' + weather.currently;
							        colorSwatchService.returnSeason(temperatureTemp);
							        if(_scope){
							        	_scope.$digest();
							        }
							    }
						  	});
						},

						convertToWeatherCalculatedColors:function(temperature, seasonCollection) {
							// Output: a new seasonCollection object with new colors

							var calculatedCollection = [{hexColor:{}},{hexColor:{}},{hexColor:{}},{hexColor:{}}];

							for (i = 0; i < 4; i++) {
								for (j = 0; j < 5; j++) {
									calculatedCollection[i].hexColor[j] = colorSwatchService.calculateColor(temperature, seasonCollection[i].hexColor[j]);
								}
							}

							return calculatedCollection;
						},

						calculateColor:function(temperature, color) {
							// <0> Isolate hex string from input string
							var red = color.substr(1,2);
							var green = color.substr(3,2);
							var blue = color.substr(5,2);

							// <1> Convert hex string to 3 separate base 10 integers (i.e. for R, G, B)
							red = parseInt('0x' + red);
							green = parseInt('0x' + green);
							blue = parseInt('0x' + blue);

							// <2> Add temperature to above integers
							// If the overall sum is greater than 255, then subtract instead - if the overall sum is less than 0 - add instead
							red = colorSwatchService.calculateHex(temperature, red);
							green = colorSwatchService.calculateHex(temperature, green);
							blue = colorSwatchService.calculateHex(temperature, blue);

							// <3> Convert back to hex string
							red = red.toString(16);
							green = green.toString(16);
							blue = blue.toString(16);

							// <4> Return the new color string
							return '#' + red + green + blue;
						},

						calculateHex:function(temperature, number) {
							if (number + 2*temperature > 255) {
								return number - 2*temperature;
							} else {
								return number + 2*temperature;
							}
						},

						returnSeason:function(temperature){
							var date = new Date();
							//var month = date.getMonth();

							/*------------------------ SUMMER ---------------------------------*/
							if(temperature>=30){
								colorSwatchService.seasons = colorSwatchService.convertToWeatherCalculatedColors(temperature, summerPlusCollectionService);
							}

							else if (temperature >= 20){
								colorSwatchService.seasons = colorSwatchService.convertToWeatherCalculatedColors(temperature, summerCollectionService);	
							}

							/*------------------------ SPRING ---------------------------------*/
							//Gives possibility to display spring colours even in warmer, winter months
							else if (temperature >=15 /*&& (month>1 && month>6)*/) {
								colorSwatchService.seasons = colorSwatchService.convertToWeatherCalculatedColors(temperature, springCollectionService);
							}

							/*------------------------ FALL ---------------------------------*/
							//Gives possibility to display fall colours even in cooler, summer months
							else if (temperature >= 7 /*&& (month>7 && month<12)*/){ 
								colorSwatchService.seasons = colorSwatchService.convertToWeatherCalculatedColors(temperature, fallCollectionService);
							}

							else if (temperature >= 0 /*&& (month>7 && month<12)*/){ 
								colorSwatchService.seasons = colorSwatchService.convertToWeatherCalculatedColors(temperature, fallPlusCollectionService);
							}

							/*------------------------ WINTER ---------------------------------*/
							else if (temperature >= -10){
								colorSwatchService.seasons = colorSwatchService.convertToWeatherCalculatedColors(temperature, winterCollectionService);
							}

							else if (temperature >= -20){
								colorSwatchService.seasons = colorSwatchService.convertToWeatherCalculatedColors(temperature, winterPlusCollectionService);
							}
							
							console.log("temperature:" + temperature + ", season: " + colorSwatchService.seasons);
							if (_scope){
								_scope.$digest();
							}
						}
					};

				colorSwatchService.init = function(scope){
					_scope = scope;
					return colorSwatchService;
				};
				return colorSwatchService;
			}]);
});
