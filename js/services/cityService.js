define(["servicesFactory"], function(servicesFactory) {

	servicesFactory.factory('CityService', function() {
		var cityService = {
			cityCollection: ['Toronto', 'Calgary', 'Vancouver', 'Hong Kong', 'London', 'Paris', 'New York City', 'San Francisco', 'Barcelona', 'Tokyo', 'Florence', 'Rome', 'New Orleans', 'Chicago', 'Montreal', 'Boston', 'Rio'],

			//Returns a random number between 0 and cityCollection.length
			generateRandomNum: function(){
				return Math.floor(Math.random() * (cityService.cityCollection.length));
			},

			//Returns a random city name from the cityCollection[]
			generateRandomCity: function(){
				return cityService.cityCollection[cityService.generateRandomNum()];
			}
		};

		return cityService;
	});
});