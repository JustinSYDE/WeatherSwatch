define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('WeatherService', function() {
		//TO TEST:
		//var seasons = summerCollectionService;
		//return seasons;
		var weatherService = { 
			myAjaxCheck: function(callBack){
				$.simpleWeather({
				    location: 'Toronto',
				    woeid: '',
				    unit: 'c',
				    success: function(weather) {
				      var temperatureTemp = parseInt(weather.temp);
				      html = '<span>'+weather.temp+'&deg;'+weather.units.temp+' '+'</span>';
				      html += '<span>'+weather.currently+'</span>';

				      $('#weather').html(html);
				      callBack(temperatureTemp);
				    }
			  	});
			}
		};

		return weatherService;
	});
});