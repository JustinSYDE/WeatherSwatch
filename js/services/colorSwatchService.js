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

						returnSeason:function(temperature){
							var date = new Date();
							var month = date.getMonth();

							/*------------------------ SUMMER ---------------------------------*/
							if (temperature >= 20 && temperature <30){
								colorSwatchService.seasons = summerCollectionService;	
							}

							else if(temperature>=30){
								colorSwatchService.seasons = summerPlusCollectionService;
							}

							/*------------------------ FALL ---------------------------------*/
							//Gives possibility to display fall colours even in cooler, summer months
							else if (temperature>12 && temperature <20 && (month>7 && month<12)){ 
								colorSwatchService.seasons = fallCollectionService;
							}

							else if (temperature>=4 && temperature <12 && (month>7 && month<12)){ 
								colorSwatchService.seasons = fallPlusCollectionService;
							}

							/*------------------------ SPRING ---------------------------------*/
							//Gives possibility to display spring colours even in warmer, winter months
							else if (temperature>=4 && temperature <20 && (month>1 && month>6)) {
								colorSwatchService.seasons = springCollectionService;
							}

							/*------------------------ WINTER ---------------------------------*/
							else if (temperature < 4 && temperature >= - 10){
								colorSwatchService.seasons = winterCollectionService;
							}

							else if (temperature < -10){
								colorSwatchService.seasons = winterPlusCollectionService;
							}

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
