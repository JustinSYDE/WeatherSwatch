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

				myAjaxCheck:function(){
					$.simpleWeather({
					    location: 'Calgary',
					    woeid: '',
					    unit: 'c',
					    success: function(weather) {
					      console.log("1st");
					      var temperatureTemp = parseInt(weather.temp);
					      html = '<span>'+weather.temp+'&deg;'+weather.units.temp+' '+'</span>';
					      html += '<span>'+weather.currently+'</span>';
					      $('#weather').html(html);
					      colorSwatchService.returnSeason(temperatureTemp);
					      console.log(colorSwatchService.seasons);
					    }
				  	});
				},

				returnSeason:function(temperature){
					console.log("2nd");
					console.log(temperature);

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
						document.getElementById("currentCity").click();	//Bad hack that reloads the page so that the color swatch will reload
						colorSwatchService.i++;
					}
				} 
			};

		return colorSwatchService;
	}]);
});
